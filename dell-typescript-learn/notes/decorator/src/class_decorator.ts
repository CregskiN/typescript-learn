/**
 * 标准类修饰器写法
 * 1. <T extends (...args: any[]) => {}> T继承一个函数，这个函数 (any类型的数组) => {}
 * 2. T： 可以被实例化的类型。以 new (...args: any[]) => {} 的方式
 * 3. return的内容为对constructor的`扩展`
 * 4. 执行时刻：类的constructor执行 -> decorator的constructor执行
 * 
 * 一些理解：
 * 
 */
function decoratorOfClass() {
    return function <T extends new (...args: any[]) => {}>(constructor: T) {
        return class extends constructor {
            name = 'CN';

            getName() {
                return name;
            }
        }
    }
}


const TestClassForClassDecoratoe = decoratorOfClass()(
    class {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }
);


const classInstance = new TestClassForClassDecoratoe('CregskiN');
console.log(classInstance.getName());
