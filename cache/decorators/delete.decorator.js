"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator = (path, middlewares = []) => {
    return (target, propertyKey) => {
        if (!Reflect.hasMetadata('routes', target.constructor)) {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        const routes = Reflect.getMetadata('routes', target.constructor);
        routes.push({
            path,
            requestMethod: 'delete',
            methodName: propertyKey,
            middlewares,
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};
exports.default = decorator;
