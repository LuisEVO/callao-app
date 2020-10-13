"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("../app"));
const utils_1 = require("../utils");
const yenv_1 = __importDefault(require("yenv"));
const env = yenv_1.default();
class default_1 {
    constructor(app) {
        this.app = app;
    }
    async initialize() {
        const promiseInitialize = new Promise((resolve, reject) => {
            const server = http_1.default.createServer(app_1.default);
            server
                .listen(env.PORT)
                .on('listening', () => {
                // Message.log(`Server is running on port ${env.PORT}`);
                utils_1.Message.log(`Server is running on port ${server.address().port}`);
                resolve();
            })
                .on('error', (error) => {
                reject(error);
            });
        });
        await promiseInitialize;
    }
}
exports.default = default_1;
