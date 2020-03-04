import { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import { Crowller, DellAnalyzer } from '../utils/crowller';
import { getResponseData } from '../utils/util';
import { get, use } from './decorator';


interface BodyRequest extends Request {
    body: {
        [key: string]: string | undefined;
    }
}


// 中间件：登陆验证
const checkLogin = (req: Request, res: Response, next: NextFunction) => {
    const isLogin = req.session ? req.session.login : false;
    if (!isLogin) {
        res.json(getResponseData('operation failed', '您尚未登陆！'));
        return;
    }
    next();
}

class CrowllerController {

    @get('/getData')
    @use(checkLogin)
    getData(req: BodyRequest, res: Response, next: NextFunction) {
        const secret = 'secretKey';
        const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
        const analyze = DellAnalyzer.getInstance();
        new Crowller(url, analyze);
        res.redirect('/');
    }


    @get('/showData')
    @use(checkLogin)
    showData(req: BodyRequest, res: Response, next: NextFunction) {
        try {
            const position = path.resolve(__dirname, '../../data/course.json')
            const result = fs.readFileSync(position, 'utf8');
            res.json(getResponseData(JSON.parse(result)));

        } catch (err) {
            res.json(getResponseData('show failed', '数据不存在'));
        };
    }
}