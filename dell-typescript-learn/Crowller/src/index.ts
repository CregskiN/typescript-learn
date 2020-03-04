import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import './controller/LoginController';
import './controller/CrowllerController';
import { router } from './controller/decorator';
import { catchError } from './middleware/catchError';

const app = express();

// 问题1：express 库的类型定义文件 .d.ts文件类型描述不准确 // 类型融合
// 问题2：使用中间件，对req，res做修改实际上对类型也做修改，实际上类型不能能改变，框架问题 // 中间件
app.use(catchError());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession({
    name: 'session',
    keys: ['teacher dell'],
    maxAge: 24 * 60 * 60 * 1000
}));
app.use(router);


app.listen(7001, () => {
    console.log('listen port 7001...');
})