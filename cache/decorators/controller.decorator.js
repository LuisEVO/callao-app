"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator = (prefix = '', middlewares = []) => {
    return (target) => {
        Reflect.defineMetadata('prefix', prefix, target);
        Reflect.defineMetadata('middlewares', middlewares, target);
        if (!Reflect.hasMetadata('routes', target)) {
            Reflect.defineMetadata('routes', [], target);
        }
    };
};
exports.default = decorator;
