"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var crowller_1 = require("./crowller");
var router = express_1.Router();
exports.router = router;
// 首页登陆输入
router.get('/', function (req, res, next) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.send("\n        <html>\n            <body>\n                <a href=\"/getData\">\u722C\u53D6\u5185\u5BB9</a>\n                <a href=\"/logout\">\u9000\u51FA</a>\n            </body>\n        </html>\n        ");
        return;
    }
    res.send("\n    <html>\n        <body>\n            <form method=\"post\" action=\"/login\">\n                <input type=\"password\" name=\"password\"/>\n                <button>\u767B\u5F55</button>\n            </form>\n        </body>\n    </html>\n    ");
});
// 登出路由
router.get('/logout', function (req, res, next) {
    if (req.session) {
        req.session.login = undefined;
    }
    res.redirect('/');
});
// 登录路由
router.post('/login', function (req, res, next) {
    // 逻辑 1.确认是否登陆过 2.确认密码是否正确
    var password = req.body.password;
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.send('您已登陆过，请勿重复登陆');
        return;
    }
    else {
        if (password === '123' && req.session) {
            req.session.login = true;
            res.redirect('/');
        }
        else {
            res.send('登陆失败！');
            return;
        }
    }
});
// 爬取数据
router.get('/getData', function (req, res, next) {
    var _a = req.body, password = _a.password, teacherName = _a.teacherName;
    var isLogin = req.session ? req.session.login : false;
    if (!isLogin) {
        res.send('请登陆后爬取内容');
    }
    var secret = 'secretKey';
    var url = "http://www.dell-lee.com/typescript/demo.html?secret=" + secret;
    var analyze = crowller_1.DellAnalyzer.getInstance();
    var crowller = new crowller_1.Crowller(url, analyze);
    res.send('爬取成功');
});
