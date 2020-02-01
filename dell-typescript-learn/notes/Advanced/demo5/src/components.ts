


// namespace Components {


// 导出子命名空间
namespace SubComponents {
    export class Test { }
}

// 导出接口
interface User {
    name: string;
}

// 导出类
class Header {
    constructor() {
        const elem = document.createElement('div');
        elem.innerText = 'this is a header';
        document.body.appendChild(elem);
    }
}

class Content {
    constructor() {
        const elem = document.createElement('div');
        elem.innerText = 'this is a content';
        document.body.appendChild(elem);
    }
}

class Footer {
    constructor() {
        const elem = document.createElement('footer');
        elem.innerText = 'this is a footer';
        document.body.appendChild(elem);
    }
}

// }

export {
    User,
    SubComponents,
    Header,
    Content,
    Footer,
}