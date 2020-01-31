// ts -> .d.ts翻译文件 -> js 
import superagent from 'superagent';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

interface Course {
    title: string;
    count: number;
}

interface CourseResult {
    time: number;
    data: Course[]
}

interface JsonContent {
    [propName: number]: Course[];
}



class Crowller {
    private secret = 'secretKey';
    private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`
    private filePath = path.resolve(__dirname, '../data/course.json'); // 绝对路径 + 手写路径 拼接

    constructor() {
        this.initSpiderProcess();
    }

    // 主进程函数
    async initSpiderProcess() {
        const html = await this.getRawHtml(); // 获取原始HTML
        const courseInfo = await this.getCourseInfo(html);
        const fileContent = await this.generateJsonContent(courseInfo);
        fs.writeFileSync(this.filePath, JSON.stringify(fileContent));
    }

    // 爬取HTML
    async getRawHtml() {
        const result = await superagent.get(this.url);
        return result.text; // 存储
    }

    // 解析HTML
    async getCourseInfo(html: string) {
        const $ = cheerio.load(html);
        const courseItems = $('.course-item');
        const courseInfos: Course[] = [];

        courseItems.map((index, element) => {
            const descs = $(element).find('.course-desc');
            const title = descs.eq(0).text();
            const count = parseInt(descs.eq(1).text().split('：')[1], 10);
            courseInfos.push({ title, count });
        });
        return {
            time: (new Date()).getTime(),
            data: courseInfos
        }
    }

    // 将爬取处理后的数据新建成JSON文件
    async generateJsonContent(courseInfo: CourseResult) {
        
        let fileContent: JsonContent = {};
        if (fs.existsSync(this.filePath)) {
            fileContent = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
        }
        
        fileContent[courseInfo.time] = courseInfo.data;
        return fileContent;
        
    }

}

const crowller = new Crowller();