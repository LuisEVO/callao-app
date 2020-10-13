"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
class default_1 {
    static catchAsync(ftn) {
        return (req, res, next) => {
            return ftn(req, res, next).catch((error) => {
                if (error.hasOwnProperty('code')) {
                    _1.Responses.sentErrorDatabase(res, error);
                }
                else {
                    const err = new Error(error);
                    err.status = 501;
                    _1.Responses.sentErrorServer(res, err);
                }
            });
        };
    }
}
exports.default = default_1;
