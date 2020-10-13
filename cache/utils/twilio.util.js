"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const twilio_1 = __importDefault(require("twilio"));
const yenv_1 = __importDefault(require("yenv"));
const env = yenv_1.default();
class default_1 {
    static send(phone, message) {
        const client = twilio_1.default(env.TWILIO.SID, env.TWILIO.TOKEN);
        return client.messages
            .create({
            body: message,
            from: '+14809332398',
            to: `+51${phone}`
        });
    }
}
exports.default = default_1;
