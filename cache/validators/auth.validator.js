"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
const schemas = {
    GET_SIGN_IN: {
        params: joi_1.default.object({
            phone: joi_1.default.number().required(),
        }),
    },
    POST_SIGN_IN: {
        params: joi_1.default.object({
            phone: joi_1.default.number().required(),
        }),
        body: joi_1.default.object({
            validationCode: joi_1.default.number().required(),
        })
    },
    SIGN_UP: {
        body: joi_1.default.object({
            nick: joi_1.default.string().required(),
            phone: joi_1.default.number().required(),
        }),
    },
};
exports.default = schemas;
