import fs from 'fs';
import cheerio from 'cheerio';

import { Analyzer } from './utils/crowller';

interface Course {
    title: string;
    count: number;
}

interface CourseResult {
    time: number;
    data: Course[]
}

interface JSONContent {
    [propName: number]: Course[];
}


class DellAnalyzer implements Analyzer {
    private static instance: DellAnalyzer;

    private constructor() {}

    static getInstance(){
        if(!this.instance){
            this.instance = new DellAnalyzer();
        }
        return this.instance;
    }


    // 处理数据
     generateJSONContent(courseInfo: CourseResult, filePath: string) {
        let fileContent: JSONContent = {}; 
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf-8');
            if(content !== ''){
                fileContent = JSON.parse(content); 
            } 
        }
        fileContent[courseInfo.time] = courseInfo.data;
        return fileContent;
    }  

    // 解析html
    private getCourseInfo(html: string) {
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
            time: Date.now(),
            data: courseInfos
        }
    }


    public analyze(html: string, filePath: string) {
        const courseInfo = this.getCourseInfo(html);
        const fileContent = this.generateJSONContent(courseInfo, filePath);
        return JSON.stringify(fileContent);
    }

    
}

export {
    DellAnalyzer
}