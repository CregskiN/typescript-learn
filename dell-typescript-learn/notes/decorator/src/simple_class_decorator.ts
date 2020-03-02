/**
 * 类的装饰器
 * 1. 本身是一个function
 * 2. 运行时刻：类创建后，实例化前。 概念上是对类做修饰，而不是对实例做修饰
 * 3. 一类可使多个修饰器，栈式收集修饰器，修饰器后入先执行
 */

function simpleDecoratorOfClass1(flag: boolean) {
    if ( flag) {
        return function (constructor: any) {
            // constructor.prototype.getName = () => {
            //     console.log('get name');
            // }
            console.log('decorate1');
        }
    } 
    return function (constructor: any) { }
}

function simpleDecoratorOfClass2(constructor: any) {
    console.log('decorate2');
}

// @decorateOfClass2
@simpleDecoratorOfClass1(false)
class SimpleTestClassForClassDecorator { }

const classInstance1 = new SimpleTestClassForClassDecorator();
console.log((classInstance1 as any).getName());