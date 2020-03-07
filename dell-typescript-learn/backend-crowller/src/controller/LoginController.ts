import { Response, NextFunction } from 'express';

import { getResponseData } from '../utils/util';
import { get, post, controller } from '../decorator';
import { BodyRequest } from '../types';

@controller('/api')
export class LoginController {

    @get('/isLogin')
    isLogin(req: BodyRequest, res: Response, next: NextFunction) {
		const isLogin = !!(req.session ? req.session.login : false);
		res.json(getResponseData<boolean>(isLogin));
	}

    @post('/login')
    login(req: BodyRequest, res: Response, next: NextFunction): void {
        const { password } = req.body;
        if (password === '123' && req.session) {
            req.session.login = true;
            res.json(getResponseData<boolean>(true));
        } else {
            res.json(getResponseData<boolean>(false));
            return;
        }
    }

    @get('/logout')
    logout(req: BodyRequest, res: Response, next: NextFunction): void {
        console.log('/logout 路由命中')

        if (req.session) {
            req.session.login = undefined;
        }
        res.json(getResponseData<boolean>(false));
    }
}
