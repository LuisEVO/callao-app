"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authSchemas = exports.SchemaValidator = void 0;
var schema_validator_1 = require("./schema.validator");
Object.defineProperty(exports, "SchemaValidator", { enumerable: true, get: function () { return __importDefault(schema_validator_1).default; } });
var auth_validator_1 = require("./auth.validator");
Object.defineProperty(exports, "authSchemas", { enumerable: true, get: function () { return __importDefault(auth_validator_1).default; } });
