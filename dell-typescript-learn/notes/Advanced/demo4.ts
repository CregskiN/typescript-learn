// 类的泛型

// 需求： 存储多种类型的数组 string[] number[]

// 1 
// class DataManager {
//     private data:string[];

//     constructor(data:string[]){
//         this.data = data;
//     }

//     getItem(index){
//         return this.data[index];
//     }

// }

// const data = new DataManager(['1']);
// console.log(data.getItem(0));


// 2

// interface Item {
//     name: string;
// }

// class DataManager<T extends Item> {
//     private data: T[];

//     constructor(data: T[]) {
//         this.data = data;
//     }

//     getItem(index: number): string {
//         return this.data[index].name;
//     }

// }

// const data = new DataManager([
//     {
//         name: '1'
//     }
// ]);
// console.log(data.getItem(0));


// 3

// interface Test {
//     name: string;
// }

// class DataManager<T extends number | string> {
//     private data: T[];

//     constructor(data: T[]) {
//         this.data = data;
//     }

//     getItem(index: number): T {
//         return this.data[index];
//     }

// }

// const data = new DataManager<string>(['123']);


// 4 
// 使用泛型作为类型注解
const func: <T>() => string = <T>() => {
    return '123';
}