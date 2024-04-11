import { defineStore } from 'pinia';
// 导入模糊查询,综合查询
import { searchList, searchMusic,searchById } from '../api/index';

export const useIndexStore = defineStore('index', {
    state: () => ({
        itemsList: [{}],           //itemList
        item: {                    //播放项
            id: 0,
            mid: '',        //意义不明
            vid: '',        //通常为空
            song: '',               //歌名
            subtitle: '',   //副标题
            singer: '',             //歌手
            album: '',      //群体
            pay: '',        //是否免费类
            time: '',       //上架时间
            bpm: null,      //默认为null
            quality: '',    //最高质量
            interval: '',           //总时长
            size: '',       //大小
            kbps: '',       //速度
            cover: '',              //封面
            link: '',       //q音乐链接
            url: ''         //音乐地址
        },
        loading: 'false',       //是否显示加载
        id: 0,
        page: 1,        //当前页数
        word: '',       //当前搜索对象
    }),
    getters: {

    },
    actions: {
        // 获取itemsList
        async searchApi(inputValue: string) {
            try {
                let res = await searchList(inputValue);
                this.word = inputValue;
                this.itemsList.length = 0;
                this.page = 1;
                this.itemsList = res.data;

            } catch (error) {
                throw error;
            }
        },
        //综合查询
        //一旦page数据值发生变化就调用综合查询
        async searchMusic(word: string, page: number) {
            try {
                let res = await searchMusic(word, page);
                //先置空
                this.itemsList.length = 0;
                //再录入数据
                this.itemsList = res.data;
            } catch (error) {
                throw error;
            }
        },

        //改变loading状态
        useLoading() {
            if (this.loading === 'true')
                this.loading = 'false';
            else
                this.loading = 'true';
        },

        //页数控制器
        pageTo(controller: string) {
            switch (controller) {
                case 'one':
                    this.page = 1;
                    break;
                case 'next':
                    this.page++;
                    break;
                case 'pre':
                    if (this.page - 1 != 0)
                        this.page--;
                    break;
            }
        },

        //更新item的状态，一旦id变更
        async updateItem(){
            try{
                let res=await searchById(this.id,3);
                this.item.length=0;
                this.item=res.data;
                console.log('看看pinia这边的数据值',res.data);
            }catch(error){
                throw error;
            }
        }

    }
})