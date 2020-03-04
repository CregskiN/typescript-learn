import { Request, Response, NextFunction } from 'express';

import { controller, get, post } from './decorator';
import { getResponseData } from '../utils/util';


interface BodyRequest extends Request {
    body: {
        [key: string]: string | undefined;
    }
}

@controller
class LoginController {

    @get('/logout')
    logout(req: BodyRequest, res: Response, next: NextFunction) {
        console.log('/logout 路由命中');

        if (req.session) {
            req.session.login = undefined;
        }
        res.json(getResponseData('登出成功！'));
    }


    @post('/login')
    login(req: BodyRequest, res: Response, next: NextFunction) {
        const { password } = req.body;
        if (password === '123' && req.session) {
            req.session.login = true;
            res.redirect('/');
        } else {
            res.json(getResponseData('login failed', '登陆失败！'))
            return;
        }
    }



    @get('/')
    home(req: BodyRequest, res: Response, next: NextFunction) {
        console.log('/ 路由命中');

        const isLogin = req.session ? req.session.login : false;
        if (isLogin) {
            res.send(`
            <html>
                <body>
                    <a href="/getData">爬取</a>
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
    }


}