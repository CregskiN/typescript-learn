// // 类的装饰器 decorator
// // 本质是一个函数
// // 通过@使用

// // 类装饰器接受的参数是构造函数
// function testDecorator1(constructor: any) {
//     // constructor.prototype.getName = () => {
//         console.log('decorator1');
//     // };
// }

// function testDecorator2(constructor: any) {
//     // constructor.prototype.getName = () => {
//         console.log('decorator2');
//     // };
// }

// // 在类创建好之后，实例化之前，执行
// @testDecorator1
// @testDecorator2
// class Test {

// }


// // 工厂模式的装饰器，可控制装饰器是否使用
// function decoratorTest(flag: boolean) {
//     if (flag) {
//         return function testDecorator(constructor: any) {
//             console.log('工厂函数的装饰器执行了！');
//             constructor.prototype.getName = () => {
//                 console.log('dell');
//             }
//         }
//     } else {
//         return function testDecorator(constructor: any) { }
//     }
// }

// @decoratorTest(true)
// class Test {

// }

// const test = new Test();
// (test as any).getName();