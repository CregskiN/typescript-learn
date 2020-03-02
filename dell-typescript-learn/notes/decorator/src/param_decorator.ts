
/**
 * 
 * @param target : 原型
 * @param method : 方法名
 * @param paramIndex  参数位置(从0算起)
 */

function propertyDecorator(target: any, method: any, paramIndex: number) {
    console.log(target, method, paramIndex);

}

class TestClassForPropertyDecorator {

    getInfo(name: string, @propertyDecorator age: number) {
        return {
            name,
            age
        }
    }
}

const classInstance6 = new TestClassForPropertyDecorator();
console.log(classInstance6.getInfo('dell', 30));