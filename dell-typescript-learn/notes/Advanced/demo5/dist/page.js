// namespace Components {
define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // 导出子命名空间
    var SubComponents;
    (function (SubComponents) {
        var Test = /** @class */ (function () {
            function Test() {
            }
            return Test;
        }());
        SubComponents.Test = Test;
    })(SubComponents || (SubComponents = {}));
    exports.SubComponents = SubComponents;
    // 导出类
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement('div');
            elem.innerText = 'this is a header';
            document.body.appendChild(elem);
        }
        return Header;
    }());
    exports.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerText = 'this is a content';
            document.body.appendChild(elem);
        }
        return Content;
    }());
    exports.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('footer');
            elem.innerText = 'this is a footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
// namespace
// 类似模块化开发方式，统一暴露模块，作为全局变量
define("page", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // namespace Home {
    var Page = /** @class */ (function () {
        function Page() {
            this.user = {
                name: 'dell'
            };
            new components_1.Header();
            new components_1.Content();
            new components_1.Footer();
        }
        return Page;
    }());
    exports.Page = Page;
});
// }
