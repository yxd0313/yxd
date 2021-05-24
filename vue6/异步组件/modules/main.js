// 引入
import Vue from 'vue';
// 引入app
import App from './App';
// 构建应用
const app = new Vue({
    render: h => h(App)
}).$mount('#app');