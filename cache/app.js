"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const repositories_1 = require("./repositories");
const utils_1 = require("./utils");
const app = express_1.default();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
const controllers = [
    { class: controllers_1.AuthController, dependencies: [repositories_1.UserRepository] },
];
utils_1.attachRoutes(app, controllers);
app.use((req, res) => {
    res.status(404).send('Path not found');
});
exports.default = app;
