"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Put = exports.Get = exports.Post = exports.Controller = void 0;
var controller_decorator_1 = require("./controller.decorator");
Object.defineProperty(exports, "Controller", { enumerable: true, get: function () { return __importDefault(controller_decorator_1).default; } });
var post_decorator_1 = require("./post.decorator");
Object.defineProperty(exports, "Post", { enumerable: true, get: function () { return __importDefault(post_decorator_1).default; } });
var get_decorator_1 = require("./get.decorator");
Object.defineProperty(exports, "Get", { enumerable: true, get: function () { return __importDefault(get_decorator_1).default; } });
var put_decorator_1 = require("./put.decorator");
Object.defineProperty(exports, "Put", { enumerable: true, get: function () { return __importDefault(put_decorator_1).default; } });
var delete_decorator_1 = require("./delete.decorator");
Object.defineProperty(exports, "Delete", { enumerable: true, get: function () { return __importDefault(delete_decorator_1).default; } });
