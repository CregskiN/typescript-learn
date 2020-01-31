// ts -> .d.ts翻译文件 -> js
import fs from "fs";
import path from "path";
import superagent from "superagent";

import { DellAnalyzer } from "./dellAnalyzer";


interface Analyzer {
    analyze: (html: string, filePath: string) => string;
}


class Crowller {
    private filePath = path.resolve(__dirname, "../data/course.json"); // 绝对路径 + 手写路径 拼接
    private url: string;
    private analyzer: any;

    constructor(url: string, analyzer: DellAnalyzer) {
        this.url = url;
        this.analyzer = analyzer;
        this.initSpiderProcess();
    }

    // @ 主进程函数
    async initSpiderProcess() {
        const html = await this.getRawHtml(this.url);
        const fileContent = this.analyzer.analyze(html, this.filePath);
        this.writeFile(fileContent);
    }

    // 爬取HTML
    async getRawHtml(url: string) {
        const result = await superagent.get(url);
        return result.text; // 存储
    }

    // 写文件
    writeFile(content: string): void {
        fs.writeFileSync(this.filePath, content);
    }

}


const secret = 'secretKey';
const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;

const analyze = DellAnalyzer.getInstance();
const crowller = new Crowller(url, analyze);



export {
    Analyzer
}