"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const utils_1 = require("../utils");
const yenv_1 = __importDefault(require("yenv"));
const env = yenv_1.default();
class default_1 {
    async initialize() {
        utils_1.Message.log('Starting DB');
        const promiseInitialize = new Promise((resolve, reject) => {
            const connectionString = `mongodb+srv://${env.DATABASE.USER}:${env.DATABASE.PASS}@${env.DATABASE.HOST}/${env.DATABASE.DB}?retryWrites=true&w=majority`;
            const options = {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
                useFindAndModify: true,
                poolSize: 10,
            };
            const callback = (error) => {
                if (error) {
                    utils_1.Message.log('Error DB');
                    reject(error);
                }
                else {
                    utils_1.Message.log('Connected to MongoDB');
                    resolve();
                }
            };
            mongoose_1.default.connect(connectionString, options, callback);
        });
        await promiseInitialize;
    }
    disconnect() {
        mongoose_1.default.disconnect();
    }
}
exports.default = default_1;
