"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var crowller_1 = require("./utils/crowller");
var util_1 = require("./utils/util");
var router = express_1.Router();
exports.router = router;
// 中间件：登陆验证
var checkLogin = function (req, res, next) {
    var isLogin = req.session ? req.session.login : false;
    if (!isLogin) {
        res.json(util_1.getResponseData('operation failed', '请先登录'));
        return;
    }
    next();
};
// 首页登陆输入
router.get('/', function (req, res, next) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.send("\n        <html>\n            <body>\n                <a href=\"/crowller\">\u722C\u53D6</a>\n                <a href=\"/showData\">\u5C55\u793A</a>\n                <a href=\"/logout\">\u9000\u51FA</a>\n            </body>\n        </html>\n        ");
        return;
    }
    res.send("\n    <html>\n        <body>\n            <form method=\"post\" action=\"/login\">\n                <input type=\"password\" name=\"password\"/>\n                <button>\u767B\u5F55</button>\n            </form>\n        </body>\n    </html>\n    ");
});
// 登出路由
router.get('/logout', function (req, res, next) {
    if (req.session) {
        req.session.login = undefined;
    }
    res.json(util_1.getResponseData('登出成功！'));
});
// 登录路由
router.post('/login', function (req, res, next) {
    // 逻辑 1.确认是否登陆过 2.确认密码是否正确
    var password = req.body.password;
    if (password === '123' && req.session) {
        req.session.login = true;
        res.redirect('/');
    }
    else {
        res.json(util_1.getResponseData('login failed', '登陆失败！'));
        return;
    }
});
// 爬取数据
router.get('/crowller', checkLogin, function (req, res, next) {
    var secret = 'secretKey';
    var url = "http://www.dell-lee.com/typescript/demo.html?secret=" + secret;
    var analyze = crowller_1.DellAnalyzer.getInstance();
    var crowller = new crowller_1.Crowller(url, analyze);
    res.redirect('/');
});
// 展示数据 // 返回已爬取内容
router.get('/showData', checkLogin, function (req, res, next) {
    try {
        var position = path_1.default.resolve(__dirname, '../data/course.json');
        var result = fs_1.default.readFileSync(position, 'utf-8');
        res.json(util_1.getResponseData(JSON.parse(result)));
    }
    catch (err) {
        res.json(util_1.getResponseData('show failed', '展示失败！'));
    }
    ;
});
