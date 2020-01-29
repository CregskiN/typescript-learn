## 学习笔记

```
npm install typescript -g #
```

```
tsc index.ts # 编译
tsc index.ts --strictNullChecks # 严格检测编译 对key:number/... = null禁止
```

---
## 基础类型
> boolean  
```ts

let isDone: boolean = false;
```

> number 
```ts

let decLiteral: number = 20;
let hexLiteral: number = 0x14;
let binaryLiteral: number = 0b10100;

```

> string  
```ts

let name: string = 'bob' + lastName + ' ';
name = `hello, is ${Date.now()} now`;
```

> 数组  

第一种方式: 数组泛型Array<元素类型>
```ts

let list: Array<number> = [1,2,3]
```
第二种方式: number[]
```ts

let list: number[] = [1,2,3];
```

> 元组 Tuple  

```ts

let x1: [string, number] = ['hello', 10];
let x2: [string, number] = ['hello', false]; // error

```

> 枚举 enum
```ts

enum Color {
    Red = 3,
    Green,
    Blue
};
let c: Color = Color.Green; // 4
let c: number = Color.Green; // 4
let d: string = Color[4] // Green
```

> any  

不对类型检测
```ts

let notSure: any = 4;
notSure = 'hello';
norSure = false;
// 可以为任意类型
```

> void
```ts

let unusual: void = undefined || null;

function fn(): void {
    console.log(`htllo world`)
}
```

> null 和 undefined
```ts

let u: undefined = undefined
let n: null = null

```

> never

表示永不存在的值，一般为函数
```ts

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message)
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed")
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}

```

> object

object 表示非原始类型，也就是除 number，string，boolean，symbol，null或undefined 之外的类型。  
使用 object 类型，就可以更好的表示像 Object.create 这样的 API。例如：
```ts
declare function create(o: object | null): void

create({ prop: 0 }) // OK
create(null) // OK

create(42) // Error
create('string') // Error
create(false) // Error
create(undefined) // Error
```

> 类型断言
```ts
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length

let someValue: any = 'this is a string'
let strLength: number = (someValue as string).length

```

---
> Null / Undefined 是所有类型的子类型
 