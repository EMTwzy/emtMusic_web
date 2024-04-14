import { itemI } from '../interface/itemInterface';
import { http } from '../utils/http';

//模糊查询
export const searchList = async (name: string): itemI => {
    try {
        let res: itemI = await http('/api/Tencent', { word: name.value });
        console.log("@searchList/",res);
        return res;
    } catch (error) {
        console.error('searchList出现错误！');
    }
}

//综合查询
export const searchMusic=async(word:string,page:number):itemI=>{
    try{        
        let res:itemI=await http('/api/Tencent',{word,page});
        console.log("@searchMusic/",res);
        return res;
    }catch(error){
        console.error('searchMusic出现错误！');
    }
}

// 根据id获取播放数据
export const searchById=async(id:number,q:number)=>{
    try{
        let q1=q==3?1:3;
        let q2=q==6?4:6;
        let q3=q==9?7:9;
        let res=await http('/api/Tencent',{id,q});

        if(res.url==''&&q1==3){
            searchById(id,q1);
        }else if(res.url==''&&q2==6){
            searchById(id,q2);
        }else if(res.url==''&&q3==9){
            searchById(id,q3);
        }

        console.log('@searchById',res);
        return res;
    }catch(error){
        console.error('searchById出现错误！');
    }
}