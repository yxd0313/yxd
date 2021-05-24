// 引用Vue
import Vue from 'vue';
// 引入axios
import axios from 'axios';
// 引入组件
import Child from './Child';
// 引入scss文件
import '../scss/1.scss';
// 引入Demo
import Demo from './Demo';

// 挂载
Vue.component('demo', Demo);

// 构建应用
const app = new Vue({
    // 视图
    el: '#app',
    data: {
        msg: 'you'
    },
    // 注册组件
    components: {
        Child
    }
})