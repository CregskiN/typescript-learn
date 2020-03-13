// 函数
// function hello() { }
// const hello1 = function () { }
// const hello2 = () => { }

// // 参数注解 返回值注解
// function add(first: number, second: number): number {
//     return first + second;
// }
// const getTotal: number = add(1, 2); // number可不加

// // 函数返回值类型 void never
// function sayHello(): void {
//     console.log('hello world!');
// }

// const fun = (str: string) => number = (str) => {
//     return parseInt(str, 10);
// }

// function errorEmitter(): never { // 函数永远不可能执行完毕 // 循环 // error 
//     throw new Error();
// }

// 解构赋值的类型注解
// function add({ first, second }: { first: number, second: number }): number {
//     return first + second;
// }

// const total = add({ first: 1, second: 2 });
