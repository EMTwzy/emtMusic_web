//下载
import axios from 'axios';
import { useIndexStore } from '../pinia';

export const downLoad=async(url:string,song:string,singer:string)=>{

      const fileName = song+'-'+singer; // 自定义文件名  
  
      try {  
        ////////////加载
        useIndexStore().useLoading();
        // 使用axios发送GET请求获取文件内容  
        const response = await axios({  
          url,  
          method: 'GET',  
          responseType: 'blob', // 告诉axios我们期望返回一个blob对象  
        });  
  
        // 创建一个Blob对象  
        const blob = new Blob([response.data]); // 根据文件类型设置MIME类型, { type: 'audio/flac' }  
  
        // 创建一个指向Blob对象的URL  
        const blobUrl = URL.createObjectURL(blob);  
  
        // 创建一个a标签用于下载  
        const link = document.createElement('a');  
        link.href = blobUrl;  
        link.download = fileName; // 设置下载文件名  
        link.style.display = 'none';  
  
        // 将a标签添加到DOM中  
        document.body.appendChild(link);  
  
        // 模拟点击a标签来下载文件  
        link.click();  
  
        // 下载完成后，撤销Object URL和移除a标签  
        URL.revokeObjectURL(blobUrl);  
        document.body.removeChild(link);  
      } catch (error) {  
        console.error('下载文件时出错:', error);  
        // 在这里处理错误，比如显示一个错误消息给用户  
      }  finally {
        useIndexStore().useLoading();
    }
    
}