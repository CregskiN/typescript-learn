const userInfo: any = undefined;

function catchError(msg: string) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const fn = descriptor.value;
        try {
            fn();
        } catch (err) {
            throw new Error(msg);
        }
    }
}


class Test {

    @catchError('userInfo.name 不存在')
    getName() {
        return userInfo.name;
    }

    @catchError('userInfo.age 不存在')
    getAge() {
        return userInfo.age;
    }
}

const test = new Test();
console.log(test.getName());