// 方法装饰器
// 运行时刻：定义类

// 普通方法 targer -> class.prototype
// 静态方法 target -> 类的构造函数
function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    // descriptor.writable = false; // 设置不可重写
    // console.log(target);
    descriptor.value = function(){ // 原始function的引用
        return 'decorator';
    }
}


class Test {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @getNameDecorator
    getName() {
        return this.name;
    }

};

const test = new Test('dell');
console.log(test.getName());