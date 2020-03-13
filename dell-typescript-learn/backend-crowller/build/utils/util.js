"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 指定res格式
 * @param data
 * @param errMsg
 */
exports.getResponseData = function (data, errMsg) {
    if (errMsg) {
        return {
            success: false,
            errMsg: errMsg,
            data: data,
        };
    }
    return {
        success: true,
        data: data
    };
};
