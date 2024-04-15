<template>
    <div class='musicItem' @mouseenter="isHover = true" @mouseleave="isHover = false">
        <img :src="data.obj.cover" alt="">
        <div class="musicName" v-show="!isHover">{{ data.obj.song }}<p>{{ data.obj.singer }}</p>
        </div>
        <!-- 如果当前组件被选中，就出现控制选项-->
        <div class="musicController"  v-show="isHover">
            <el-tooltip class="box-item" effect="dark" content="播放" placement="bottom">
                <play-one theme="outline" size="30" fill="#c662ff" @click="selectMusic(data.obj.id)"/>
            </el-tooltip>
            <el-tooltip class="box-item" effect="dark" content="下载" placement="bottom">
                <download-four theme="outline" size="30" fill="#c662ff" @click="downMusic(data.obj.id)"/>
            </el-tooltip>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { defineProps, ref,computed } from 'vue';
import { itemI } from '../interface/itemInterface';
import {PlayOne,DownloadFour} from '@icon-park/vue-next';
import {useIndexStore} from '../pinia/index.ts';
import {downLoad} from '../utils/download';
import {searchById} from '../api/index';

//接收数据
const data = defineProps<{
    obj: itemI
}>();

//console.log(data.obj);

const isHover = ref(false);

//使用pinia
const useIndex=useIndexStore();
const id=computed(()=>useIndex.id);
// 选择音乐
async function selectMusic(ids:number){
    if(id.value==ids);
    else{
        useIndex.id=ids;
        await useIndex.updateItem();
    }
}

//下载音乐
async function downMusic(ids:number){
    let res=await searchById(ids,9);
    console.log("看看downMusic",res.data);
    downLoad(res.data.url,res.data.song,res.data.singer);
}

</script>

<style lang='less' scoped>
.musicItem {
    width: 30rem;
    display: flex;
    align-items: center;
    margin: 0 auto;
    background-color: rgba(128, 128, 128, 0.7);

    img {
        width: 5rem;
        height: 5rem;
    }

    .musicName {
        margin-left: 2rem;
    }

    /*当前组件的控制器*/
    .musicController {
        width: 5rem;
        height: 5rem;
        margin-left: 14rem;
        line-height: 5rem;
        position: absolute;

        ::v-deep .i-icon {
            cursor: pointer;
            margin-left:0.5rem ;
        }

        ::v-deep .i-icon:hover {
            color: red;
        }
    }
}

.musicItem:hover {
    background-color: rgb(128, 128, 128);
}
</style>