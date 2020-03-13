import { RequestHandler } from 'express';
import 'reflect-metadata';
import { CrowllerController, LoginController } from '../controller';

type ClassPrototype = CrowllerController | LoginController;


/**
 * 将中间件以metadata形式绑定到constructor.prototype
 * @param middleware 
 */
export function use(middleware: RequestHandler): Function {
    return function (target: ClassPrototype, key: string) {
        const originMiddlewares: RequestHandler[] = Reflect.getMetadata('middlewares', target) || [];
        originMiddlewares.push(middleware);
        Reflect.defineMetadata('middlewares', originMiddlewares, target, key);
    }
}