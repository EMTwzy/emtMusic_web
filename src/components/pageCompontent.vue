<template>
    <!-- 页数控制器 -->
<div class='pageController'>
    <el-row>
        <el-col :span="9"></el-col>
        <el-col :span="4">
            <el-button type="primary" @click="pageTo('one')">回到首页</el-button>
            <el-button type="primary" @click="pageTo('pre')">上一页</el-button>
        </el-col>
        <el-col :span='1' style='color:black;font-size:1.5rem'>
            {{page}}
        </el-col>
        <el-col :span="3">
            <el-button type="primary" @click="pageTo('next')">下一页</el-button>
        </el-col>
        <el-col :span="7"></el-col>
    </el-row>
</div>
</template>

<script setup lang='ts'>
    import {computed,watch} from 'vue';
    // 导入useIndexStore
    import {useIndexStore} from '../pinia/index';
    //综合查询
    import {searchMusic} from '../api/index';

    //获取pinia那边的数据
    const useIndex=useIndexStore();
    const page=computed(()=>useIndex.page);
    //跳页
    function pageTo(controller:string){
        useIndex.pageTo(controller);
    }

    
    watch(page,()=>{
        useIndex.searchMusic(useIndex.word,useIndex.page);
    })


</script>

<style lang='less' scoped>

</style>