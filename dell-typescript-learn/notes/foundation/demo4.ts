// // 数据接口
// interface Person {
//     // readonly name: string; // 只读 不能改
//     name: string;
//     age?: number; // 若有age 必为number
//     [propName: string]: any; // 若有其他key 必为string
//     say(): void;
// }

// // 函数接口
// interface SayHi {
//     (word: string): string; // 接收string 返回string
// }

// // 接口间继承
// interface Teacher extends Person {
//     teach(): string;
// }

// // 数据接口使用
// const printPersonName = (person: Person): void => {
//     console.log(person.name);
// }
// const getPersonName = (person: Person, name: string): void => {
//     person.name = name;
// }

// class User implements Person {
//     name: 'dell';
//     say() {
//         return 'hello';
//     }
// }

// // 方法接口使用
// const sayHi: SayHi = (word: string) => {
//     return word;
// };

// // printPersonName({
// //     name: 'dell',
// //     sex: 'male' // 强校验 // 报错
// // });

// const person = {
//     name: 'dell',
//     sex: 'male',
//     say() { console.log('hello world') }
// }

// printPersonName(person); // 弱校验 //传person 不报错
// getPersonName(person, 'CregskiN');
// printPersonName(person);