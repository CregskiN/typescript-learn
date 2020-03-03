/**
 * 不同装饰器的执行顺序
 * 1. 方法修饰器 -> 类的修饰器
 */

import 'reflect-metadata';

// 遍历源数据
function showData(target: typeof User) {
    for (let key in target.prototype) {
        console.log('key is ', key);
        const metadata = Reflect.getMetadata('data', target.prototype, key);
        console.log(metadata);
    }
}

// 设置data字段的源数据
function setData(dataKey: string, dataValue: string) {
    return function (target: User, key: string) {
        Reflect.defineMetadata(dataKey, dataValue, target, key);
    }
}

@showData
class User {

    @setData('data', 'name')
    getName() { }

    @setData('data', 'age')
    getAge() { }
}