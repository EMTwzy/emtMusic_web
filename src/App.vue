<script setup lang="ts">
import indexView from "./views/index.vue";
import { onMounted } from "vue";

//获取设备信息
let navi = window.navigator.userAgent;
let fontHtml = document.querySelector("html");
onMounted(() => {
  console.log(navi);
  if (fontHtml != null) {
    fontHtml.style.fontSize = "16px"; //pc端用16px
    if (navi.includes("Mobile")) {
      fontHtml.style.fontSize = "9px"; //手机端用9px
    }
  }
});
</script>

<template>
  <!-- 背景图片 -->
  <div id="bk"/>
  <!-- 主页 -->
  <indexView></indexView>
</template>

<style >
*,
body {
  padding: 0rem;
  margin: 0rem;
}

#bk {
    position: fixed;
    top:0;
    left: 0;
    width:100%;
    height: 100%;
    background-image: url('./assets/main_all.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: -5rem;
    z-index: -1;
}

@media (max-width: 600px) {
  #bk{
    background-image: url('./assets/phone_bk.jpg');
    background-position-x: -10rem;
    background-position-y: 0rem;
  }
  
}
</style>
