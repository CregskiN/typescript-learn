
// -- 数值 --
// let isDone: boolean = true;
// let decLiteral: number = 20; // 十进制 20
// let hexLiteral: number = 0x14; // 十六进制 20
// let binary: number = 0b10100; // 二进制 20
// let octalLiteral: number = 0o24; // 八进制 20

// -- 字符串 --
// let str: string = 'bob' || `bob - ${Date.now()}` || 'bo' + 'b' + Date.now();


// -- 数组 --
// let arr: number[] = [1,2,3]; // 数字类型一维数组
// let list: Array<number> = [1,2,3]; // 数组泛型，此处只支持number

// -- 元组 --
// let x: [string, number]; // 元组 可规定每个元素的类型
// x = ['hello', 1];
// console.log(x[0].substr(1)); // 可运行
// console.log(x[1].substr(1)); // 报错
// x[3] = '11'; // 不能将类型“"11"”分配给类型“undefined”。
// x[2] = undefined; //Tuple type '[string, number]' of length '2' has no element at index '2'.

// -- 枚举类型 --
enum Color {
    RED = 1,
    GREEN,
    BLUE,
} // 编译过后为索引格式，如 Color[Color["RED"] = 0] = "RED";，查询可正可反
let c: Color = Color.RED;
console.log('RED value ', c); //RED value  1
let d: number = Color.GREEN;
console.log('GREEN value ', d); // GREEN value  2
let f: string = Color[2]; // 从值为1开始计值为2的name ，若没有则undefined
// let f: Color = Color[2]; // 报错
console.log('index = 2, name =', f);


// -- any类型 -- 
// 跳过类型检查 // 一般需要类型检查
// let notSure: any = 4;
// notSure = false;
// notSure = 'asd';
// let list: any[] = [1, 'str', true, undefined];
// list[1] = 23;

// -- void类型 --
// function warnUser(): void { // 1.用于函数
//     console.log('this is my warning message');
// }
// let unusable: void = undefined / null; // 2.用于变量
// let unusable: void = false; // 报错

// -- null / undefined类型 --
// let u: undefined = undefined;
// u = null;
// let i: null = undefined;
// i = null;
// let num: number = 3;
// num = null;

// -- 联合类型 --
// let u: number | null = 3;
// console.log('u = ', u); // u =  3
// u = null;
// console.log('u = ', u); // u =  null

// -- never -- 不存在值的类型 -- 
// never 是任何类型的子类型,且没有子类型
// 返回never的函数，必须存在无法到达的终点
// function error(message: string): never {
//     throw new Error(message)
// }
// function fail() {
//     return error('somethind failed'); // never
// }
// function infiniteLoop(): never {
//     while(true){ // 无线循环没有终点

//     }
// }

// -- object类型 --
// declare声明
// declare function create(o: object | null): void;
// create({prop:0});
// create(null);
// create(42); // 报错
// create('string'); // 报错
// create(undefined);

// -- 类型转换(类型断言) --
// let someValue: any = 'this is a string';
// const strLength:number = (<string>someValue).length;
// const strLength:number = (someValue as string).length; // JSX指定用语法
// console.log(strLength);








