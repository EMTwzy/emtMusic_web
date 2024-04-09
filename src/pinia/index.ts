import {defineStore} from 'pinia';
// 导入模糊查询,综合查询
import {searchList,searchMusic} from '../api/index';

export const useIndexStore=defineStore('index',{
    state:()=>({
        itemsList:[{}],           //itemList
        item:{},
        loading:'false',       //是否显示加载
        page:1,        //当前页数
        word:'',       //当前搜索对象
    }),
    getters:{

    },
    actions:{
        // 获取itemsList
        async searchApi(inputValue:string){
            try{
                let res=await searchList(inputValue);
                this.word=inputValue;
                this.itemsList.length=0;
                this.page=1;
                this.itemsList=res.data;
                
            }catch(error){
                throw error;
            }
        },
        //综合查询
        //一旦page数据值发生变化就调用综合查询
    async searchMusic(word:string,page:number){
        try{
            let res=await searchMusic(word,page);
            //先置空
            this.itemsList.length=0;
            //再录入数据
            this.itemsList=res.data;
        }catch(error){
            throw error;
        }
    },

        //改变loading状态
        useLoading(){
            if(this.loading==='true')
                this.loading='false';
            else
                this.loading='true';
        },

        //页数控制器
        pageTo(controller:string){
            switch(controller){
                case 'one':
                    this.page=1;
                    break;
                case 'next':
                    this.page++;
                    break;
                case 'pre':
                    if(this.page-1!=0)
                    this.page--;
                    break;
            }
        },

    }
})