import { NextFunction, Request, Response } from 'express';
import { Responses } from '../utils';
export default class {
  static validate(schemaValidation: any): any {
    return async (
      req: Request,
      res: Response,
      next: NextFunction
    ): Promise<any> => {
      const typesParametersToValidate = ['body', 'params', 'headers', 'query'];

      const listValidations: Array<Promise<any>> = [];

      typesParametersToValidate.forEach(
        (type: 'body' | 'params' | 'headers' | 'query') => {
          if (schemaValidation.hasOwnProperty(type)) {
            listValidations.push(schemaValidation[type].validate(req[type]));
          }
        }
      );

      Promise.all(listValidations)
        .then((results) => {

          const errors: any[] = [];
          results.forEach((result) => {
            if (result.hasOwnProperty('error')) {
              errors.push(...result.error.details.map((detail: any) => detail.message));
            }
          });

          if (!errors.length) {
            next();
          } else {
            Responses.sendErrorParameters(res, errors);
          }
        })
        .catch((err) => {
          Responses.sendErrorParameters(res, err);
        });
    };
  }
}
