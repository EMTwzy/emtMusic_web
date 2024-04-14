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
        :class="{playCover:isPause==false}"
        class="cover"
      />
      <div class="play">
        <!-- 音乐名称 -->
        <div class="musicName">
          {{ item.song == "" ? "先选一首歌吧" : item.song }}
          <p>{{ item.singer == "" ? "先选一首歌吧" : item.singer }}</p>
        </div>
        <!-- 音频 -->
        <audio controls class="audio" ref="audioRef">
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

//使用pinia
const useIndex = useIndexStore();
const item = computed(() => useIndex.item);
//默认封面
const default_cover = defaultPic;

//收录audio
var audioStatus = 0;
const audioRef = ref<HTMLAudioElement | null>(null);
var isPause = ref(true);

//一旦更换了音乐了
const url = ref("");
watch(item, () => {
  url.value = item.value.url;
  console.log("gai bian l item", url.value);
  //重载audio
  audioStatus.load();
  // 假设更换音乐后需要暂停并重置旋转角度
  isPause.value = true;
});

//页面挂载后
onMounted(() => {
  scrollEvent();
  //加载后捕获audio
  audioStatus = document.querySelector("audio");
  // 监听播放事件
  audioRef.value.addEventListener("play", () => {
    isPause.value = false;
  });

  // 监听暂停事件
  audioRef.value.addEventListener("pause", () => {
    isPause.value = true;
  });
});
</script>

<style lang="less" scoped>
.musicPlay {
  position: fixed;
  bottom: 0rem;
  width: 50%;
  left: 25%;
  border: 0.1rem solid #ccc;
  height: 6rem;
  background-color: rgb(184, 98, 255);
  .content {
    width: 100%;
    display: flex;
    flex-direction: row;

    /*封面*/
    .cover {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      transition: transform 0.3s ease-out; 
    }
    .playCover{
      animation: rotation 3s linear infinite; /* 每次旋转2秒钟 */
    }
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
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
        font-size: 1.5rem;
        font-weight: bold;
        text-emphasis: 0.2rem;

        p {
          font-size: 1rem;
        }
      }
      /*音频*/
      .audio {
        width: 100%;
        background-color: rgba(184, 98, 255, 1);
      }
    }
  }
}
</style>
