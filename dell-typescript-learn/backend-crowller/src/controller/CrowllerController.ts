import { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import { Crowller, DellAnalyzer } from '../utils/crowller';
import { getResponseData } from '../utils/util';
import { controller, get, use } from '../decorator';
import { BodyRequest } from '../types';



// 中间件：登陆验证
const checkLogin = (req: Request, res: Response, next: NextFunction): void => {
    const isLogin = !!(req.session ? req.session.login : false);
    if (!isLogin) {
        res.json(getResponseData('operation failed', '您尚未登陆！'));
        return;
    }
    next();
}

@controller('/')
export class CrowllerController {

    @get('/getData')
    @use(checkLogin)
    getData(req: BodyRequest, res: Response, next: NextFunction): void {
        const secret = 'secretKey';
        const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
        const analyze = DellAnalyzer.getInstance();
        new Crowller(url, analyze);
        res.redirect('/');
    }


    @get('/showData')
    @use(checkLogin)
    showData(req: BodyRequest, res: Response, next: NextFunction): void {
        try {
            const position = path.resolve(__dirname, '../../data/course.json')
            const result = fs.readFileSync(position, 'utf8');
            res.json(getResponseData(JSON.parse(result)));

        } catch (err) {
            res.json(getResponseData('show failed', '数据不存在'));
        };
    }
}