"use strict";
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
