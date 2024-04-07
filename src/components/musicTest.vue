<template>
    <div class=''>
      <button @click="downloadFile">点我下载</button>  
    </div>
  </template>
  
  <script setup lang='ts'>
  import axios from 'axios';
  
  async function downloadAudio(url: string, fileName: string) {
    try {
      const response = await axios.get(url, {
        responseType: 'blob'
      });
      const blob = new Blob([response.data]);
      const fileUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = fileUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(fileUrl);
      document.body.removeChild(a);
    } catch (error) {
      console.error('出错', error);
    }
  }
  
  function downloadFile() {
    const audioUrl = 'http://ws.stream.qqmusic.qq.com/F000004MbuZo17nm5Q.flac?fromtag=510033622&guid=00000&trace=10269bcb9826fafe&uin=0&vkey=1F5B05E4F783257868BE21F2FD49A27AC41C7A7F097B26773967947E5B70DCAA8FE0C0D6E817BFF44021B685D97AC312C30526495100451E';
    const customFileName = 'under the tree.flac';
    downloadAudio(audioUrl, customFileName);
    console.log("点了");
  }
  </script>
  
  <style lang='less' scoped>
  
  </style>
  