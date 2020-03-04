"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
require("reflect-metadata");
exports.router = express_1.Router();
var Method;
(function (Method) {
    Method["get"] = "get";
    Method["post"] = "post";
})(Method || (Method = {}));
/**
 * 将中间件以metadata形式绑定到constructor.prototype
 * @param middleware
 */
function use(middleware) {
    return function (target, key) {
        Reflect.defineMetadata('middleware', middleware, target, key);
    };
}
exports.use = use;
/**
 * 生成路由
 * decorator for class
 * @param target constructor , 即 obj.__proto__.constructor
 */
function controller(target) {
    for (var key in target.prototype) {
        var path = Reflect.getMetadata('path', target.prototype, key);
        var method = Reflect.getMetadata('method', target.prototype, key);
        var middleware = Reflect.getMetadata('middleware', target.prototype, key);
        var handler = target.prototype[key]; // class内方法在obj.__proto__上
        if (path && method && handler) {
            if (middleware) {
                exports.router[method](path, middleware, handler);
            }
            else {
                exports.router[method](path, handler);
            }
        }
    }
}
exports.controller = controller;
/**
 * (工厂函数) 生成函数，该函数将path, method信息，使用metadata绑定到对应方法上
 * @param method
 */
function getRequestDecorator(method) {
    return function (path) {
        return function (target, key) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        };
    };
}
exports.get = getRequestDecorator('get');
exports.post = getRequestDecorator('post');
// /**
//  * 绑定字段为path的metadata到指定method
//  * @param path
//  * decorate for method
//  */
// export function get(path: string) {
//     return function (target: any, key: string) {
//         Reflect.defineMetadata('path', path, target, key);
//     }
// }
// /**
//  * 绑定post.path的metadata到指定method
//  * decorate for method
//  * @param path 
//  */
// export function post(path: string) {
//     return function (target: any, key: string) {
//         Reflect.defineMetadata('path', path, target, key);
//         Reflect.defineMetadata('method', 'post', target, key);
//     }
// }
