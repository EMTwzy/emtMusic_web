<template>
    <div class='musicItem' @mouseenter="isHover = true" @mouseleave="isHover = false">
        <img :src="data.obj.cover" alt="">
        <div class="musicName" v-show="!isHover">{{ data.obj.song }}<p>{{ data.obj.singer }}</p>
        </div>
        <!-- 如果当前组件被选中，就出现控制选项-->
        <div class="musicController"  v-show="isHover">
            <el-tooltip class="box-item" effect="dark" content="播放" placement="bottom">
                <play-one theme="outline" size="30" fill="#c662ff" />
            </el-tooltip>
            <el-tooltip class="box-item" effect="dark" content="下载" placement="bottom">
                <download-four theme="outline" size="30" fill="#c662ff" />
            </el-tooltip>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { defineProps, ref } from 'vue';
import { itemI } from '../interface/itemInterface';
import {PlayOne,DownloadFour} from '@icon-park/vue-next';


//接收数据
const data = defineProps<{
    obj: itemI
}>();

//console.log(data.obj);

const isHover = ref(false);



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

        box-item {
            padding-left:2rem ;
        }

        ::v-deep .i-icon {
            cursor: pointer;
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