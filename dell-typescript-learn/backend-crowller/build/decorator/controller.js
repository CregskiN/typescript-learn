"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __importDefault(require("../router"));
require("reflect-metadata");
/**
 * 生成路由
 * decorator for class
 * @param target constructor , 即 obj.__proto__.constructor
 */
function controller(root) {
    return function (target) {
        for (var key in target.prototype) {
            var path = Reflect.getMetadata('path', target.prototype, key);
            var method = Reflect.getMetadata('method', target.prototype, key);
            var middleware = Reflect.getMetadata('middleware', target.prototype, key);
            var handler = target.prototype[key]; // class内方法在obj.__proto__上
            if (path && method) {
                var fullPath = root === '/' ? path : "" + root + path;
                if (middleware) {
                    router_1.default[method](fullPath, middleware, handler);
                }
                else {
                    router_1.default[method](fullPath, handler);
                }
            }
        }
    };
}
exports.controller = controller;
