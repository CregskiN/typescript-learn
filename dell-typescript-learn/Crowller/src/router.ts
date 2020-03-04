// import { Router, Request, Response, NextFunction } from 'express';
// import fs from 'fs';
// import path from 'path';



// const router = Router();




// // 爬取数据
// router.get('/crowller', checkLogin, (req: BodyRequest, res: Response, next: NextFunction) => {
//     const secret = 'secretKey';
//     const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
//     const analyze = DellAnalyzer.getInstance();
//     const crowller = new Crowller(url, analyze);
//     res.redirect('/');
// })

// // 展示数据 // 返回已爬取内容
// router.get('/showData', checkLogin, (req: BodyRequest, res: Response, next: NextFunction) => {
//     try {
//         const position = path.resolve(__dirname, '../data/course.json')
//         const result = fs.readFileSync(position, 'utf-8');
//         res.json(
//             getResponseData(JSON.parse(result))
//         )
//     } catch (err) {
//         res.json(getResponseData('show failed', '数据不存在'));
//     };
// })

// export {
//     router
// }