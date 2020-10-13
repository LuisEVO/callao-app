"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = require("../repositories");
const decorators_1 = require("../decorators");
const validators_1 = require("../validators");
const utils_1 = require("../utils");
const moment_1 = __importDefault(require("moment"));
let default_1 = class default_1 {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getSignIn(req, res) {
        const phone = +req.params.phone;
        const user = await this.userRepository.getUserByPhone(phone);
        if (!user) {
            return utils_1.Responses.sentError(res, `El telefono ${phone} no se encuentra registrado`);
        }
        else {
            const user = await this.userRepository.updateUserValidationCode(phone);
            const client = await utils_1.Twilio.send(phone, `App Callao: su código de validación es ${user.validationCode}`);
            return res.json({});
        }
    }
    async postSignIn(req, res) {
        const phone = +req.params.phone;
        const validationCode = +req.body.validationCode;
        const user = await this.userRepository.getUserByPhone(phone);
        if (!user) {
            return utils_1.Responses.sentError(res, `El telefono ${phone} no se encuentra registrado`);
        }
        else if (!user.validationCode) {
            return utils_1.Responses.sentError(res, `Solicite un codígo de acceso`);
        }
        else if (validationCode !== user.validationCode) {
            return utils_1.Responses.sentError(res, `El código es incorrecto`);
        }
        else if (moment_1.default().isSameOrAfter(user.validationExpirationDate)) {
            return utils_1.Responses.sentError(res, `El código expiró`);
        }
        else if (validationCode === user.validationCode && moment_1.default().isBefore(user.validationExpirationDate)) {
            return utils_1.Responses.sentOk(res);
        }
    }
    async signUp(req, res) {
        const phone = req.body.phone;
        const user = await this.userRepository.getUserByPhone(phone);
        if (user) {
            return utils_1.Responses.sentError(res, `El telefono ${phone} ya se encuentra registrado`);
        }
        else {
            await this.userRepository.insert(req.body);
            return res.json({});
        }
    }
};
__decorate([
    decorators_1.Get('/send-code/:phone', [validators_1.SchemaValidator.validate(validators_1.authSchemas.GET_SIGN_IN)]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], default_1.prototype, "getSignIn", null);
__decorate([
    decorators_1.Post('/validate-code/:phone', [validators_1.SchemaValidator.validate(validators_1.authSchemas.POST_SIGN_IN)]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], default_1.prototype, "postSignIn", null);
__decorate([
    decorators_1.Post('/sign-up', [validators_1.SchemaValidator.validate(validators_1.authSchemas.SIGN_UP)]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], default_1.prototype, "signUp", null);
default_1 = __decorate([
    decorators_1.Controller('/auth'),
    __metadata("design:paramtypes", [repositories_1.UserRepository])
], default_1);
exports.default = default_1;
