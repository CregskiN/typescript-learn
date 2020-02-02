// import $ from 'jquery';

// $((function () {
//     $('body').html('<div>123</div>');

//     new $.fn.init();
// }));

// keyof 关键字的使用

interface Person {
    name: string;
    age: number;
    gender: string;
}

class Teacher {
    private info: Person;

    constructor(info: Person) {
        this.info = info;
    }

    // getInfo(key: string) {
    //     if (key === 'name' || key === 'age' || key === 'gender') {
    //         return this.info[key];
    //     }
    // }

    // keyof Person 底层
    // 循环1
    // type T = 'name';
    // key: 'name';
    // return Person['name'];

    // 循环2
    // type T = 'age';
    // key: 'age';
    // return Person['age'];

    // 循环3
    // type T = 'gender';
    // key: 'gender';
    // return Person['gender'];
    getInfo<T extends keyof Person>(key: T): Person[T]{
        return this.info[key];
    }
}

const teacher = new Teacher({
    name: 'dell',
    age: 18,
    gender: 'male'
});

const test = teacher.getInfo('name');