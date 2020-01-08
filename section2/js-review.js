
// -- 闭包 --
// function fn1 (){
//     var a = 10;
//     return () => { // 闭包场景
//         var b = a + 1;
//         return b;
//     }
// }
// var res1 = fn1();
// console.log(res1());

// -- var 变量提升 --
// function fn(shouldInitialize) {
//     // 相当于此处 var x;
//     if (shouldInitialize) {
//         var x = 10;
//     }
//     return x;
// }
// console.log(fn(true));
// console.log(fn(false));

// -- var作用域 -- 
// function sumMatrix(matrix) {
//     var sum = 0;
//     for (var i = 0; i < matrix.length; i++) {
//         var currentRow = matrix[i];
//         for (var i = 0; i < currentRow.length; i++) {
//             sum += currentRow[i]
//         }
//     }
//     return sum;
// }
// // var i i: 1+2+3 = 6 // 外层var=0,内层var0~2遍历结束
// // let i i: 1+2+3+4+5+6 = 21 // 逻辑正常
// var matrix = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];
// console.log(sumMatrix(matrix));

// -- for 内var在异步下的表现--
for (let i = 0; i < 10; i++) {
    // 立即执行函数 将异步拉回
    // ((i) => {
    //     setTimeout(() => {
    //         console.log(i);
    //     }, 100 * i)
    // })(i);
    console.log('外层i',i);
    
    for (let j = 0; j < 15; j++) {
        console.log(i)
    }
}
