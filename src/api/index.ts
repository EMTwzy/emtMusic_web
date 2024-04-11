import { itemI } from '../interface/itemInterface';
import { http } from '../utils/http';

//模糊查询
export const searchList = async (name: string): itemI => {
    try {
        let res: itemI = await http('/api/Tencent', { word: name.value });
        console.log("@searchList/",res);
        return res;
    } catch (error) {
        throw error;
    }
}

//综合查询
export const searchMusic=async(word:string,page:number):itemI=>{
    try{        
        let res:itemI=await http('/api/Tencent',{word,page});
        console.log("@searchMusic/",res);
        return res;
    }catch(error){
        throw error;
    }
}

// 根据id获取播放数据
export const searchById=async(id:number,q:number)=>{
    try{
        let res=await http('/api/Tencent',{id,q});
        console.log('@searchById',res);
        return res;
    }catch(error){
        throw error;
    }
}