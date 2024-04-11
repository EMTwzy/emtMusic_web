<template>
  <!-- 音乐播放控制组件 -->
  <div class="musicPlay">
    <div class="content">
      <img
        :src="
          item.cover == '' || item.cover == undefined
            ? default_cover
            : item.cover
        "
        class="cover"
      />
      <div class="play">
        <!-- 音乐名称 -->
        <div class="musicName">
          {{ item.song == "" ? "先选一首歌吧" : item.song }}
          <p>{{ item.singer == "" ? "先选一首歌吧" : item.song }}</p>
        </div>
        <!-- 音频 -->
        <audio controls class="audio">
          <!-- item.url -->
          <!-- 'http://ws.stream.qqmusic.qq.com/C400001Vq41O3ZUGHA.m4a?fromtag=310033622&guid=00000&trace=18dde88247e116d7&uin=0&vkey=98D9DD45DEF611130F85798280674657A8D5AF962B6662781EEC8F3FF082F95CA0FD408D251A7731764C210DEAAB5AFD36B8A934A4C0BBFD' -->
          <source :src="url" type="audio/mpeg" />
          您的浏览器不支持 audio 元素。
        </audio>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, watch, ref } from "vue";
// 导入滑动utils
import { scrollEvent } from "../utils/scroll";
// 导入pinia
import { useIndexStore } from "../pinia/index.ts";
//导入默认封面
import defaultPic from "../assets/default_pic.jpg";
//导入使用howler
import { Howler, Howl } from "howler";

//使用pinia
const useIndex = useIndexStore();
const item = computed(() => useIndex.item);

const url = ref("");

watch(item, () => {
  url.value =item.value.url;
  console.log("gai bian l item", url.value);
  document.getElementsByClassName('audio')[0].load();
});

const default_cover = defaultPic;

onMounted(() => {
  scrollEvent();
});
</script>

<style lang="less" scoped>
.musicPlay {
  position: fixed;
  bottom: 0rem;
  width: 50%;
  left: 25%;
  border: 0.1rem solid #ccc;
  height: 5rem;

  .content {
    width: 100%;
    display: flex;
    flex-direction: row;
    /*封面*/
    .cover {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
    }

    /*播放数据区域*/
    .play {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-left: 2rem;
      /*名称*/
      .musicName {
        text-align: center;
      }
      /*音频*/
      .audio {
        width: 100%;
      }
    }
  }
}
</style>
