import 'reflect-metadata';

// 需求：设置隐藏属性。 源数据

// 挂载到对象上上
const userO = {
    name: 'dell'
}
Reflect.defineMetadata('data', 'test', userO);
console.log('userO is ', userO);
console.log('metadata is ', Reflect.getMetadata('data', userO));

// 挂在到类上
@Reflect.metadata('data', 'test')
class UserC {
    name = 'dell';
}
const userc = new UserC();
console.log('UserC is ', userc);
console.log('metadata is ', Reflect.getMetadata('data', UserC));

/**
 * 挂载到属性上
 * 1. 位置：属性所属类的原型的name属性上 (即实例的原型链上)
 */
class UserP {
    @Reflect.metadata('data', 'test')
    name = 'dell';
}
const userp = new UserP();
console.log('UserP is ', (userp as any).__proto__);
console.log('metadata is ', Reflect.getMetadata('data', UserP.prototype, 'name'));

// 挂载到方法上
class UserF {
    @Reflect.metadata('data', 'test')
    getName() { };
}
const userf = new UserP();
console.log('UserF is ', userf);
console.log('metadata is ', Reflect.getMetadata('data', UserF.prototype, 'getName'));
