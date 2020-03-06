import { RequestHandler } from 'express';
import router from '../router';
import 'reflect-metadata';
import { Methods } from '../types';


/**
 * 生成路由
 * decorator for class
 * @param target constructor , 即 obj.__proto__.constructor
 */
export function controller(root: string) {
    return function (target: new (...args: any[]) => any) {
        for (let key in target.prototype) {
            const path: string = Reflect.getMetadata('path', target.prototype, key);
            const method: Methods = Reflect.getMetadata('method', target.prototype, key);
            const middleware: RequestHandler = Reflect.getMetadata('middleware', target.prototype, key);
            const handler = target.prototype[key]; // class内方法在obj.__proto__上
            if (path && method) {
                const fullPath = root === '/' ? path : `${root}${path}`;
                if (middleware) {
                    router[method](fullPath, middleware, handler)
                } else {
                    router[method](fullPath, handler);
                }
            }
        }
    }
}

