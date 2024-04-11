<template>
  <div class="index">
    <!-- 输入框 -->
    <div class="search">
      <img src="../assets/emt_inpute.png" alt="输入框背景" />
      <input
        type="text"
        v-model="inputValue"
        class="input"
        placeholder="来找首好歌吧~"
        ref="input"
        autofocus
        @keydown.enter="search"
      />
    </div>
    <!-- 加载 -->
    <div
      class="el-loading-mask"
      style="top: 40%; left: 45%; height: 128px; width: 128px;background:rgb(168,168,168)"
      v-if="loading=='true'"
    >
      <div class="el-loading-spinner">
        <svg class="circular" viewBox="0 0 50 50">
          <circle class="path" cx="25" cy="25" r="20" fill="none"></circle>
        </svg>
        <p class="el-loading-text">有点慢，不要急</p>
      </div>
    </div>
    <!-- 列表 -->
    <div class="itemList" v-if="items.length > 1 && items.length != null">
      <musicItem
        v-for="item in items"
        :key="item.id"
        :obj="item"
        class="item"
      ></musicItem>
      <!-- 页数控制器 -->
      <page-compontent style="margin-top:3rem;"></page-compontent>
    </div>

  </div>
  <!-- 播放控制器 -->
  <musicPlay></musicPlay>
<footer-compontent></footer-compontent>
</template>

<script setup lang="ts">
// 导入vue基本
import { ref, onMounted, computed,watch } from "vue";
import { useIndexStore } from "../pinia/index";
// 导入音乐列表组件、导入页数控制器、底部声明、底部播放组件
import musicItem from "../components/musicItem.vue";
import pageCompontent from '../components/pageCompontent.vue';
import footerCompontent from '../components/footerCompontent.vue';
import musicPlay from '../components/musicPlay.vue';
//导入interface
import itemI from "../interface/itemInterface";
// 使用loading
import { ElLoading } from "element-plus";

//输入框
const input = ref<HTMLInputElement | null>(null);
const inputValue = ref<string>("");

onMounted(() => {
  if (input.value != null) input.value.focus();
});

//使用index的pinia
const useIndex = useIndexStore();
const items: itemI = computed(() => useIndex.itemsList);
//输入框 回车事件
async function search() {
    await useIndex.searchApi(inputValue);
}

//加载
const loading = computed(() => useIndex.loading);

</script>

<style lang="less" scoped>
@boxWidth: 40rem;

/*主页*/
.index {
    height: 190vh;
  /*搜索区*/
  .search {
    width: @boxWidth;
    height: 8rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 8rem;
    /*背景*/
    img {
      width: @boxWidth;
      height: 8rem;
    }
    /*输入框*/
    .input {
      background: none;
      border: none;
      position: relative;
      top: -6.7rem;
      width: 15rem;
      padding: 1rem;
      font-size: 2rem;
      text-align: center;
    }
    .input:focus {
      border: none;
      outline: none;
      box-shadow: none;
    }
  }

  .itemList {
    
    .item {
      margin-top: 2rem;
    }
  }
}
</style>
