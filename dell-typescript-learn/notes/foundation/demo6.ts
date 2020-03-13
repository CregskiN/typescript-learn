// readonly
// class Person {

//     public readonly _name: string;
//     // public _name: string; // 可读可改


//     constructor(name: string) {
//         this._name = name;
//     }

//     get name() {
//         return this._name + '';
//     }

//     set name(name) {
//         this._name = name;
//     }

// }

// const person = new Person('Dell');


//  抽象类
// abstract class Geom { // 抽象类只能被继承 不能被new

//     width: number;

//     getType() {
//         return 'Geom';
//     }

//     abstract getArea(): number; // 抽象出统一方法
// }

// class Ciecle extends Geom{
//     getArea(){
//         return 1;
//     }
// }
// class Square{}
// class Triangle {}

// 最高封装
// interface Person {
//     name: string;
// }

// interface Teacher extends Person {
//     teachingAge: number;
// }

// interface Student extends Person {
//     age: number;
// }

// const teacher = {
//     name: 'dell',
//     teachingAge: 10
// }

// const student = {
//     name: 'CregskiN',
//     age: 19
// }

// const getUserInfo = (user: Person) => {
//     console.log(user.name);
// }

// getUserInfo(teacher);
// getUserInfo(student);