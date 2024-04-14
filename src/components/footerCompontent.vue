<template>
  <div class="footer">
    <div class="content">
      <p>本站所有资源来源于网络，若有冒犯十分抱歉</p>
      <p>如果您有什么建议，可以向emt1731041348@outlook.com发送</p>
      <p></p>
    </div>
  </div>
</template>

<script setup lang="ts">
/*
var footerTop = document.querySelector('.content').offsetTop; // footerComponent的顶部位置  
        var viewportHeight = window.innerHeight;
        var componentHeight = component.offsetHeight;
        var initialBottom = 1; // 组件距离页面底部的初始距离（单位：rem）  
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var documentHeight = document.documentElement.scrollHeight;

        // 当用户滚动到接近页面底部时，恢复组件到初始位置  
        if (scrollTop + viewportHeight >= documentHeight - componentHeight - initialBottom * 16) { // 假设1rem等于16px  
          footerTop.style.display='block';
        } else {
            // 否则，让组件保持在当前可视区域的底部  
            footerTop.style.display = 'none';
        }*/
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 5rem;
  position: fixed;
  bottom:0;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  color: white;
  
  .content{
    padding: 1rem;
  }
}
</style>
