/**
 * 方法修饰器
 * 
 * 1. target  
 * 普通方法 指向类的 prototype  // TestClassForFunctionDecorator { getName: [Function] }
 * static静态方法 指向类的 构造函数 // [Function: TestClassForFunctionDecorator] { getName: [Function] }
 * 
 * 2. key 指向被修饰方法名
 * 3. 方法修饰器类似 Object.defineProperty(obj, prop, descriptor)
 * 4. 执行时刻：类创建后，实例化前 // 同类装饰器相同
 */

function getNameDecorator(target: any, key: any, descriptor: PropertyDescriptor) {
    descriptor.writable = true;
    descriptor.value = () => {
        return '123';
    }
}


class TestClassForFunctionDecorator {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    @getNameDecorator
    getName() {
        return 'hello';
    }
}

const classInstance3 = new TestClassForFunctionDecorator('function name');
// classInstance3.getName = () => {
//     return 'world';
// }
console.log(classInstance3.getName());