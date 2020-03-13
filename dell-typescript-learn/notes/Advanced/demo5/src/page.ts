// namespace
// 类似模块化开发方式，统一暴露模块，作为全局变量


// 引用说明
// ///<reference path='./components.ts' /> 

import { User, Header, Content, Footer } from './components';

// namespace Home {
    
    export class Page {
        user: User = {
            name: 'dell'
        };

        constructor() {
            new Header();
            new Content();
            new Footer();
        }
    }
    
// }
