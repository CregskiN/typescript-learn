import 'reflect-metadata';

import { ClassPrototype,Methods } from '../types';


/**
 * (工厂函数) 生成函数，该函数将path, method信息，使用metadata绑定到对应方法上
 * @param method 
 */
function getRequestDecorator(method: Methods): Function {
    return function (path: string) {
        return function (target: ClassPrototype, key: string) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        }
    }
}

export const get = getRequestDecorator(Methods.get);
export const post = getRequestDecorator(Methods.post);
export const del = getRequestDecorator(Methods.delete);
export const put = getRequestDecorator(Methods.put);