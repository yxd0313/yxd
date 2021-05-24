// 引入Vue 
import Vue from 'vue';
// 引入axios
import axios from 'axios';
// axios的安装
Vue.prototype.$http = axios;
// 构建应用
const app = new Vue({
    // 视图
    el: '#app',
    data: {
        msg: 'you'
    },
    // 创建完毕
    created() {
        // 发送ajax请求
        this.$http
            .get('/data/ddd')
            // 简写
            .then((res) => {
                console.log(3, res);
            })
            .catch(err => console.log(4, err));
    }
})