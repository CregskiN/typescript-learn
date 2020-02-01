
// // 泛型 generic 泛指的类型

// // function join(first: string | number, second: string | number) {
// //     // 需求 若 first为number 后必为number
// //     return `${first}${second}`;
// // }

// // join(1, 2);

// // 多泛型
// function join<T, P>(first: T, second: P) {
//     // 需求 若 first为number 后必为number
//     return `${first}${second}`;
// }

// join<string, number>('1', 1);
// join('1', 2); // 底层有类型推断机制


// // 返回值泛型
// function anotherJoin<T, P>(first: T, second: P): T {
//     // 需求 若 first为number 后必为number
//     return first;
// }


// // 泛型数组
// function map<T>(params: T[] /* @params: Array<T> */) {
//     return params;
// }

// map<string>(['123']);
// map(['123']);