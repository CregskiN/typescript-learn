"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchError = function () {
    return function (req, res, next) {
        try {
            next();
        }
        catch (err) {
            res.json({
                msg: 'error'
            });
        }
    };
};
