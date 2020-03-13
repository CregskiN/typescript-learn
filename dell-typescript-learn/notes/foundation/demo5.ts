// // 类的定义
// class Person1 {
//     public name: string;
//     getName() {
//         return this.name;
//     }
// }

// // 类的继承
// class Teacher extends Person1 {
//     getTeacherName() {
//         return 'CregskiN'
//     }
//     getName() {
//         return super.getName() + ' Lee';
//     }
// }

// const teacher = new Teacher();
// console.log(teacher.getName());

// 访问类型 private protected public
// public 允许在类内外使用
// protected 允许在本类及子类中使用
// private 允许在类内使用
// class Person2 {
//     public name: string;
// }


// constructor
// class Person {
//     // 传统写法
//     // public name: string
//     // constructor(name: string) {
//     //     this.name = name;
//     // }

//     // 简化写法  (自动赋值)
//     constructor(public name: string){}
// }

// class Teacher extends Person {
//     constructor(public age: number){
//         super(); // 父类有构造器，子类也必须使用构造器
//     }
// }

// const teacher = new Teacher(28);


// 静态属性 getter and setter 存取器
// class Person {
//     private _name: string;
//     constructor(name: string){
//         this._name = name;
//     }

//     get name(){
//         return this._name + ''; // 此处可加密 // 可用jwt base-64加密
//     }

//     set name(name: string){
//         this._name = name;
//     }
    
// }

// const person = new Person('dell');
// console.log(person.name); // 调用get静态属性
// person.name = 'CregskiN'; // 调用set静态属性
// console.log(person.name);
