"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    static sentOk(res) {
        res.status(200).json();
    }
    static sentErrorDatabase(res, message) {
        res.status(500).json({
            status: 500,
            message,
        });
    }
    static sentError(res, message) {
        return res.status(500).json(message);
    }
    static sentErrorServer(res, err) {
        const dataError = {
            status: err.status,
            message: err.message,
        };
        if (process.env.NODE_ENV === 'development') {
            dataError.stack = err.stack;
        }
        res.status(err.status).json(dataError);
    }
    static sendErrorParameters(res, error) {
        console.log(error);
        res.status(411).json({ status: 411, error });
    }
}
exports.default = default_1;
