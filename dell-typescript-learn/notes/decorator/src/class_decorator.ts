

// function testDecoratorFactory() {
//     // new (...args: any[]) => any 表示是一个构造函数
//     return function <T extends new (...args: any[]) => any>(constructor: T) {
//         return class extends constructor {
//             private name = 'lee';
//             getName() {
//                 return this.name;
//             }
//         };
//     }
// }

// // @testDecoratorFactory()
// // class Test {
// //     name: string;
// //     constructor(name: string) {
// //         this.name = name;
// //         console.log(name ? '初始化赋值成功' : '初始化赋值失败');
// //     }
// // }

// const t = testDecoratorFactory();
// console.log(t); // t是装饰器函数

// const Test = testDecoratorFactory()(
//     class {
//         name: string;
//         constructor(name: string) {
//             this.name = name;
//         }
//     }
// );

// const test = new Test('dell');
// console.log(test.getName());


