"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var types_1 = require("../types");
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
exports.get = getRequestDecorator(types_1.Methods.get);
exports.post = getRequestDecorator(types_1.Methods.post);
exports.del = getRequestDecorator(types_1.Methods.delete);
exports.put = getRequestDecorator(types_1.Methods.put);
