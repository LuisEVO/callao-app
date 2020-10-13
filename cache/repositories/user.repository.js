"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const _1 = require(".");
const moment_1 = __importDefault(require("moment"));
class default_1 extends _1.GenericRepository {
    constructor() {
        super(models_1.User);
    }
    async getUserByPhone(phone) {
        const user = await models_1.User.findOne({ phone });
        return user;
    }
    async updateUserValidationCode(phone) {
        const user = await models_1.User.findOne({ phone });
        user.validationCode = Math.floor(Math.random() * (9999 - 1111 + 1) + 1111);
        user.validationExpirationDate = moment_1.default().add(2, 'minutes');
        user.save();
        return user;
    }
}
exports.default = default_1;
