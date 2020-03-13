import { Request } from 'express';
import { CrowllerController, LoginController } from '../controller';

export interface BodyRequest extends Request {
    body: {
        [key: string]: string | undefined;
    }
}
export enum Methods {
    get = 'get',
    post = 'post',
    delete = 'delete',
    put = 'put',
}

export type ClassPrototype = CrowllerController | LoginController;

