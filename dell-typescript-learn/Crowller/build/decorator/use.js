"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
/**
 * 将中间件以metadata形式绑定到constructor.prototype
 * @param middleware
 */
function use(middleware) {
    return function (target, key) {
        var originMiddlewares = Reflect.getMetadata('middlewares', target) || [];
        originMiddlewares.push(middleware);
        Reflect.defineMetadata('middlewares', originMiddlewares, target, key);
    };
}
exports.use = use;
