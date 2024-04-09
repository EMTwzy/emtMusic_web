import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//导入pinia
import {createPinia} from 'pinia';

//导入iconPark
import '@icon-park/vue-next/styles/index.less';

//导入elementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

let pinia =createPinia();

let app=createApp(App);

app.use(pinia);
app.use(ElementPlus);


app.mount('#app')
