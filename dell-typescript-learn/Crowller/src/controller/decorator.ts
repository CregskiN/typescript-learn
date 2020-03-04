import { Router, RequestHandler } from 'express';
import 'reflect-metadata';

export const router = Router();

enum Method {
    get = 'get',
    post = 'post'
}

/**
 * 将中间件以metadata形式绑定到constructor.prototype
 * @param middleware 
 */
export function use(middleware: RequestHandler) {
    return function (target: any, key: string) {
        Reflect.defineMetadata('middleware', middleware, target, key);
    }
}


/**
 * 生成路由
 * decorator for class
 * @param target constructor , 即 obj.__proto__.constructor
 */
export function controller(target: any) {
    for (let key in target.prototype) {
        const path = Reflect.getMetadata('path', target.prototype, key);
        const method: Method = Reflect.getMetadata('method', target.prototype, key);
        const middleware = Reflect.getMetadata('middleware', target.prototype, key);
        const handler = target.prototype[key]; // class内方法在obj.__proto__上
        if (path && method && handler) {
            if (middleware) {
                router[method](path, middleware, handler)
            } else {
                router[method](path, handler);
            }
        }
    }
}


/**
 * (工厂函数) 生成函数，该函数将path, method信息，使用metadata绑定到对应方法上
 * @param method 
 */
function getRequestDecorator(method: string) {
    return function (path: string) {
        return function (target: any, key: string) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        }
    }
}

export const get = getRequestDecorator('get');
export const post = getRequestDecorator('post');


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
