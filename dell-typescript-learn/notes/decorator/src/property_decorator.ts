
/**
 * 属性装饰器
 * 1. 只能接收target, key
 * 2. 需要descriptor可以自己创建，并返回。 替换属性原descriptor
 * 3. 属性装饰器无法对属性值产生影响。 只能target[key]修改原型属性，无法影响实例属性
 */

function nameDecorate(target: any, key: any): any {
    console.log(target, key);
    const descriptor: PropertyDescriptor = {
        writable: false
    }
    return descriptor;
}

class TestClassForParamDecorator {

    @nameDecorate
    name = 'dell';

}

const classInstance5 = new TestClassForParamDecorator();
console.log(classInstance5.name);