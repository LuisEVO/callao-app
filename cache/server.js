"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = __importDefault(require("./app"));
const bootstrap_1 = require("./bootstrap");
const utils_1 = require("./utils");
const start = async () => {
    try {
        const serverBootstrap = new bootstrap_1.ServerBootstrap(app_1.default);
        const databaseBootstrap = new bootstrap_1.DatabaseBootstrap();
        await serverBootstrap.initialize();
        await databaseBootstrap.initialize();
    }
    catch (error) {
        utils_1.Message.log(error);
    }
};
start();
