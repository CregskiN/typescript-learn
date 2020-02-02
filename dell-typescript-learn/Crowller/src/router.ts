import { Router, Request, Response, NextFunction } from 'express';

import { Crowller, DellAnalyzer } from './crowller';

const router = Router();

// 解决问题1：继承原接口
interface RequesWithBody extends Request {
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
                <a href="/getData">爬取内容</a>
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
    res.redirect('/');
})

// 登录路由
router.post('/login', (req: RequesWithBody, res: Response, next: NextFunction) => {
    // 逻辑 1.确认是否登陆过 2.确认密码是否正确
    const { password } = req.body;
    const isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.send('您已登陆过，请勿重复登陆');
        return;
    } else {
        if (password === '123' && req.session) {
            req.session.login = true;
            res.redirect('/');
        } else {
            res.send('登陆失败！');
            return;
        }
    }

})


// 爬取数据
router.get('/getData', (req: RequesWithBody, res: Response, next: NextFunction) => {
    const { password, teacherName } = req.body;
    const isLogin = req.session ? req.session.login : false;

    if (!isLogin) {
        res.send('请登陆后爬取内容');
    }

    const secret = 'secretKey';
    const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
    const analyze = DellAnalyzer.getInstance();
    const crowller = new Crowller(url, analyze);
    res.send('爬取成功');


})

export {
    router
}