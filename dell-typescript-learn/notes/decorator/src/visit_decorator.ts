/**
 * 访问器的修饰器
 * 1. target 指向 prototype
 * 2. key指向访问器的属性名
 * 3. 访问器的修饰器没有writable属性
 * 4. setter 和 getter不能用同名访问器
 */

function decoratorOfVisit(target: any, key: any, descriptor: PropertyDescriptor) {
    // descriptor.writable = true;
    console.log(target,key);
    
}


class TestClassForVisitDecorator {
    
    private _name: string;
    constructor(_name: string) {
        this._name = _name;
    }

    get name() {
        return this._name;
    }

    @decoratorOfVisit
    set name(name: string) {
        this._name = name;
    }
}

const classInstance4 = new TestClassForVisitDecorator('function name');

classInstance4.name = 'CregSkin'
console.log(classInstance4.name);