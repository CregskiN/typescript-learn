"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../utils/util");
var decorator_1 = require("../decorator");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.logout = function (req, res, next) {
        console.log('/logout 路由命中');
        if (req.session) {
            req.session.login = undefined;
        }
        res.json(util_1.getResponseData('登出成功！'));
    };
    LoginController.prototype.login = function (req, res, next) {
        var password = req.body.password;
        if (password === '123' && req.session) {
            req.session.login = true;
            res.redirect('/');
        }
        else {
            res.json(util_1.getResponseData('login failed', '登陆失败！'));
            return;
        }
    };
    LoginController.prototype.home = function (req, res, next) {
        console.log('/ 路由命中');
        var isLogin = !!(req.session ? req.session.login : false);
        if (isLogin) {
            res.send("\n            <html>\n                <body>\n                    <a href=\"/getData\">\u722C\u53D6</a>\n                    <a href=\"/showData\">\u5C55\u793A</a>\n                    <a href=\"/logout\">\u9000\u51FA</a>\n                </body>\n            </html>\n            ");
            return;
        }
        res.send("\n        <html>\n            <body>\n                <form method=\"post\" action=\"/login\">\n                    <input type=\"password\" name=\"password\"/>\n                    <button>\u767B\u5F55</button>\n                </form>\n            </body>\n        </html>\n        ");
    };
    __decorate([
        decorator_1.get('/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "logout", null);
    __decorate([
        decorator_1.post('/login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "login", null);
    __decorate([
        decorator_1.get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "home", null);
    LoginController = __decorate([
        decorator_1.controller('/')
    ], LoginController);
    return LoginController;
}());
exports.LoginController = LoginController;
