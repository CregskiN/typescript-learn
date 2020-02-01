// // union 联合类型 animal: Bird | Dog
// // 类型断言： (animal as Bird).sing()

// interface Bird {
//     fly: boolean;
//     sing: () => {};

// }

// interface Dog {
//     fly: boolean;
//     bark: () => {};
// }


// function trainAnial(animal: Bird | Dog) { // 联合类型 提示共有内容
//     // 类型断言 -> 类型保护
//     // 写法 1
//     if ('sing' in animal) {
//         animal.sing();
//     } else {
//         animal.bark(); // 类型推断
//     }

//     // in -> 类型保护
//     // 写法 2
//     // if (animal.fly) {
//     //     (animal as Bird).sing();
//     // } else {
//     //     (animal as Dog).bark();
//     // }

// }

// // typeof -> 类型保护
// function add(first: string | number, second: string | number) {
//     if (typeof first === 'string' || typeof second === 'string') {
//         return `${first}${second}`;
//     }
//     return first + second;
// }


// // instance 配合类使用 -> 类型保护
// class Numberobj {
//     count: number;
// }

// function addSecond(first: object | Numberobj, second: object | Numberobj) {

//     if (first instanceof Numberobj && second instanceof Numberobj) {
//         return first.count + second.count;
//     }
//     return 0;
// }