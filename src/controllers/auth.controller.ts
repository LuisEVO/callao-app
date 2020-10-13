import { Request, Response } from 'express';
import { UserRepository } from '../repositories';
import { Controller, Get, Post } from '../decorators';
import { SchemaValidator, authSchemas } from '../validators';
import { Responses, Twilio } from '../utils';
import moment from 'moment';

@Controller('/auth')
export default class {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  @Get('/send-code/:phone', [SchemaValidator.validate(authSchemas.GET_SIGN_IN)])
  async getSignIn(req: Request, res: Response): Promise<any> {
    const phone = +req.params.phone;
    const user = await this.userRepository.getUserByPhone(phone)
    if (!user) {
      return Responses.sentError(res, `El telefono ${phone} no se encuentra registrado`);
    } else {
      const user = await this.userRepository.updateUserValidationCode(phone);
      const client = await Twilio.send(
        phone,
        `Alerta Callao: su código de validación es ${user.validationCode}`
      );

      return res.json({});
    }
  }

  @Post('/validate-code/:phone', [SchemaValidator.validate(authSchemas.POST_SIGN_IN)])
  async postSignIn(req: Request, res: Response): Promise<any> {
    const phone = +req.params.phone;
    const validationCode = +req.body.validationCode;
    const user = await this.userRepository.getUserByPhone(phone)
    if (!user) {
      return Responses.sentError(res, `El telefono ${phone} no se encuentra registrado`);
    } else if (!user.validationCode) {
      return Responses.sentError(res, `Solicite un codígo de acceso`);
    } else if (validationCode !== user.validationCode) {
      return Responses.sentError(res, `El código es incorrecto`);
    } else if (moment().isSameOrAfter(user.validationExpirationDate)) {
      return Responses.sentError(res, `El código expiró`);
    } else if (validationCode === user.validationCode && moment().isBefore(user.validationExpirationDate)) {
      


      return Responses.sentOk(res);
    }
  }

  @Post('/sign-up', [SchemaValidator.validate(authSchemas.SIGN_UP)])
  async signUp(req: Request, res: Response): Promise<any> {
    const phone = req.body.phone;
    const user = await this.userRepository.getUserByPhone(phone)
    if (user) {
      return Responses.sentError(res, `El telefono ${phone} ya se encuentra registrado`);
    } else {
      await this.userRepository.insert(req.body)
      return res.json({});
    }
  }
}
