"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
class default_1 {
    static validate(schemaValidation) {
        return async (req, res, next) => {
            const typesParametersToValidate = ['body', 'params', 'headers', 'query'];
            const listValidations = [];
            typesParametersToValidate.forEach((type) => {
                if (schemaValidation.hasOwnProperty(type)) {
                    listValidations.push(schemaValidation[type].validate(req[type]));
                }
            });
            Promise.all(listValidations)
                .then((results) => {
                const errors = [];
                results.forEach((result) => {
                    if (result.hasOwnProperty('error')) {
                        errors.push(...result.error.details.map((detail) => detail.message));
                    }
                });
                if (!errors.length) {
                    next();
                }
                else {
                    utils_1.Responses.sendErrorParameters(res, errors);
                }
            })
                .catch((err) => {
                utils_1.Responses.sendErrorParameters(res, err);
            });
        };
    }
}
exports.default = default_1;
