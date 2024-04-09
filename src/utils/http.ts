import axios, { AxiosError, AxiosResponse } from 'axios';
import { useIndexStore } from '../pinia';


// 封装 HTTP 请求函数  

export const http = async <T>(url: string, data?: any): Promise<T> => {
    try {
        ////////////加载
        useIndexStore().useLoading();
        // 创建请求配置  
        const requestConfig: axios.AxiosRequestConfig = {
            url,
            //data:JSON.stringify(data),
            params: data,
        };
        console.log("看看到底请求了啥玩意", url, data, requestConfig);

        // 发送请求  
        const response: AxiosResponse<T> = await axios(requestConfig);
        // 请求成功，返回数据  
        return response.data;
    } catch (error) {
        // 请求失败或网络错误  
        if (axios.isAxiosError(error)) {

            const axiosError: AxiosError = error;
            if (axiosError.response) {
                // 请求已发出，但服务器响应的状态码不在 2xx 范围内  
                console.error('请求失败，状态码：', axiosError.response.status);

            } else if (axiosError.request) {
                // 请求已发出，但没有收到任何响应  
                console.error('请求已发出，但没有收到响应');

            } else {
                // 发送请求时发生了某些事情，导致请求没有发出  
                console.error('请求设置错误');

            }
        } else {
            // 处理其他错误  
            console.error('发生了未知错误:', error);

        }
        // 抛出错误  
        throw error;
    } finally {
        useIndexStore().useLoading();
    }
};