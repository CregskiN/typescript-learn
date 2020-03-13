
interface Result<T> {
    success: boolean;
    errMsg?: string;
    data: T;
}

/**
 * 指定res格式
 * @param data 
 * @param errMsg 
 */
export const getResponseData = <T>(data: T, errMsg?: string): Result<T> => {
    if (errMsg) {
        return {
            success: false,
            errMsg,
            data,
        }
    }

    return {
        success: true,
        data
    }
}


    
