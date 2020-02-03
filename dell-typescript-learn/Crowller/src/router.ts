import { Router, Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

import { Crowller, DellAnalyzer } from './utils/crowller';
import { getResponseData } from './utils/util';

const router = Router();

// 中间件：登陆验证
const checkLogin = (req: Request, res: Response, next: NextFunction) => {
    const isLogin = req.session ? req.session.login : false;
    if (!isLogin) {
        res.json(getResponseData('operation failed', '请先登录'))
        return;
    }
    next();
}


// 解决问题1：继承原接口
interface BodyRequest extends Request {
    body: {
        [key: string]: string | undefined;
    }
}

// 首页登陆输入
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    const isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.send(`
        <html>
            <body>
                <a href="/crowller">爬取</a>
                <a href="/showData">展示</a>
                <a href="/logout">退出</a>
            </body>
        </html>
        `);
        return;
    }
    res.send(`
    <html>
        <body>
            <form method="post" action="/login">
                <input type="password" name="password"/>
                <button>登录</button>
            </form>
        </body>
    </html>
    `);
})

// 登出路由
router.get('/logout', (req: Request, res: Response, next: NextFunction) => {
    if (req.session) {
        req.session.login = undefined;
    }
    res.json(getResponseData('登出成功！'));
})

// 登录路由
router.post('/login', (req: BodyRequest, res: Response, next: NextFunction) => {
    // 逻辑 1.确认是否登陆过 2.确认密码是否正确
    const { password } = req.body;
    if (password === '123' && req.session) {
        req.session.login = true;
        res.redirect('/');
    } else {
        res.json(getResponseData('login failed', '登陆失败！'))
        return;
    }

})


// 爬取数据
router.get('/crowller', checkLogin, (req: BodyRequest, res: Response, next: NextFunction) => {
    const secret = 'secretKey';
    const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
    const analyze = DellAnalyzer.getInstance();
    const crowller = new Crowller(url, analyze);
    res.redirect('/');
})

// 展示数据 // 返回已爬取内容
router.get('/showData', checkLogin, (req: BodyRequest, res: Response, next: NextFunction) => {
    try {
        const position = path.resolve(__dirname, '../data/course.json')
        const result = fs.readFileSync(position, 'utf-8');
        res.json(
            getResponseData(JSON.parse(result))
        )
    } catch (err) {
        res.json(getResponseData('show failed', '展示失败！'));
    };
})

export {
    router
}