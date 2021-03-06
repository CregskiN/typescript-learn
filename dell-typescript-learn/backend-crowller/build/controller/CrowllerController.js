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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var crowller_1 = require("../utils/crowller");
var util_1 = require("../utils/util");
var decorator_1 = require("../decorator");
// 中间件：登陆验证
var checkLogin = function (req, res, next) {
    var isLogin = !!(req.session ? req.session.login : false);
    if (!isLogin) {
        res.json(util_1.getResponseData('operation failed', '您尚未登陆！'));
        return;
    }
    next();
};
var CrowllerController = /** @class */ (function () {
    function CrowllerController() {
    }
    CrowllerController.prototype.getData = function (req, res, next) {
        var secret = 'secretKey';
        var url = "http://www.dell-lee.com/typescript/demo.html?secret=" + secret;
        var analyze = crowller_1.DellAnalyzer.getInstance();
        new crowller_1.Crowller(url, analyze);
        res.json(util_1.getResponseData(true));
    };
    CrowllerController.prototype.showData = function (req, res, next) {
        try {
            var position = path_1.default.resolve(__dirname, '../../data/course.json');
            var result = fs_1.default.readFileSync(position, 'utf8');
            res.json(util_1.getResponseData(JSON.parse(result)));
        }
        catch (err) {
            res.json(util_1.getResponseData('show failed', '数据不存在，请先爬取'));
        }
        ;
    };
    var _a, _b;
    __decorate([
        decorator_1.get('/getData'),
        decorator_1.use(checkLogin),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof BodyRequest !== "undefined" && BodyRequest) === "function" ? _a : Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], CrowllerController.prototype, "getData", null);
    __decorate([
        decorator_1.get('/showData'),
        decorator_1.use(checkLogin),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_b = typeof BodyRequest !== "undefined" && BodyRequest) === "function" ? _b : Object, Object, Function]),
        __metadata("design:returntype", void 0)
    ], CrowllerController.prototype, "showData", null);
    CrowllerController = __decorate([
        decorator_1.controller('/api')
    ], CrowllerController);
    return CrowllerController;
}());
exports.CrowllerController = CrowllerController;
