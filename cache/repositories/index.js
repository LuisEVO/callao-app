"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = exports.GenericRepository = void 0;
var generic_repository_1 = require("./generic.repository");
Object.defineProperty(exports, "GenericRepository", { enumerable: true, get: function () { return __importDefault(generic_repository_1).default; } });
var user_repository_1 = require("./user.repository");
Object.defineProperty(exports, "UserRepository", { enumerable: true, get: function () { return __importDefault(user_repository_1).default; } });
