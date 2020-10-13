"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const getInstancesDependencies = (dependencies) => {
    const instancesDependencies = [];
    dependencies.forEach((dependency) => {
        instancesDependencies.push(new dependency());
    });
    return instancesDependencies;
};
// app.post("/auth/login", ...middlewaresController, ...middlewaresMethods, instance)
const attachs = (app, controllers) => {
    controllers.forEach((controller) => {
        const listInstancesDependencies = getInstancesDependencies(controller.dependencies);
        // const arreglo = ["a", "b", "c"]
        // ...arreglo = "a", "b", "c"
        const instance = new controller.class(...listInstancesDependencies);
        const prefix = Reflect.getMetadata('prefix', controller.class);
        const middlewares = Reflect.getMetadata('middlewares', controller.class);
        const routes = Reflect.getMetadata('routes', controller.class);
        routes.forEach((route) => {
            _1.Message.log([route.requestMethod.toUpperCase(), prefix + route.path]);
            app[route.requestMethod](prefix + route.path, ...middlewares, ...route.middlewares, _1.Errors.catchAsync((req, res, next) => {
                return instance[route.methodName](req, res);
            }));
        });
    });
};
exports.default = attachs;
