"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseBootstrap = exports.ServerBootstrap = void 0;
var server_bootstrap_1 = require("./server.bootstrap");
Object.defineProperty(exports, "ServerBootstrap", { enumerable: true, get: function () { return __importDefault(server_bootstrap_1).default; } });
var database_bootstrap_1 = require("./database.bootstrap");
Object.defineProperty(exports, "DatabaseBootstrap", { enumerable: true, get: function () { return __importDefault(database_bootstrap_1).default; } });
