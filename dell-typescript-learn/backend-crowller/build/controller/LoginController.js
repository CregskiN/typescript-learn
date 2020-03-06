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
    LoginController.prototype.isLogin = function (req, res, next) {
        var isLogin = !!(req.session ? req.session.login : false);
        res.json(util_1.getResponseData(isLogin));
    };
    LoginController.prototype.login = function (req, res, next) {
        var password = req.body.password;
        if (password === '123' && req.session) {
            req.session.login = true;
            res.json(util_1.getResponseData(true));
        }
        else {
            res.json(util_1.getResponseData(false));
            return;
        }
    };
    __decorate([
        decorator_1.get('/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "logout", null);
    __decorate([
        decorator_1.get('/isLogin'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "isLogin", null);
    __decorate([
        decorator_1.post('/login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "login", null);
    LoginController = __decorate([
        decorator_1.controller('/api')
    ], LoginController);
    return LoginController;
}());
exports.LoginController = LoginController;
