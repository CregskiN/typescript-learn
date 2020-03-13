declare namespace responseResult {

    interface CourseInfo {
        title: string;
        count: number;
    }

    interface Data {
        [key: string]: CourseInfo[];
    }

    type isLogin = boolean;
    type login = boolean;
    type logout = boolean;
    type getData = boolean;
    type showData = Data | boolean;
}