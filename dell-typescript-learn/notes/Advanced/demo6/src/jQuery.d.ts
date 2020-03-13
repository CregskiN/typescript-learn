// // 写类型定义
// // 定义全局变量 declare
// // declare var $: (param: () => void) => void;

// // 定义全局函数 
// interface JqueryInstance {
//     html: (html: string) => JqueryInstance;
// }
//     // 函数重载
// declare function $(readyFunc: () => void): void;
// declare function $(selector: string): JqueryInstance;

// // 如何对全局对象对象、对类进行全局类型定义
// declare namespace $ {
//     namespace fn {
//         class init {}
//         // function init(): void;
//     }
// }

//     // 用接口实现函数重载
// // interface Jquery {
// //     (readyFunc: () => void): void;
// //     (selector: string): JqueryInstance;
// // }
// // declare var $: Jquery;


// es6 模块化
declare module 'jquery'{
    interface JqueryInstance {
        html: (html: string) => JqueryInstance;
    }

    // $ 是一个混合类型
    function $(readyFunc: () => void): void;
    function $(selector: string): JqueryInstance;

    namespace $ {
        namespace fn {
            class init {}
        }
    }
    export = $;
    
}
