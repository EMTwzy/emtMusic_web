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