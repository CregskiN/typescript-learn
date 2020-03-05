"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
require("./controller/LoginController");
require("./controller/CrowllerController");
var router_1 = __importDefault(require("./router"));
var catchError_1 = require("./middleware/catchError");
var app = express_1.default();
// 问题1：express 库的类型定义文件 .d.ts文件类型描述不准确 // 类型融合
// 问题2：使用中间件，对req，res做修改实际上对类型也做修改，实际上类型不能能改变，框架问题 // 中间件
app.use(catchError_1.catchError());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(cookie_session_1.default({
    name: 'session',
    keys: ['teacher dell'],
    maxAge: 24 * 60 * 60 * 1000
}));
app.use(router_1.default);
app.listen(7001, function () {
    console.log('listen port 7001...');
});
