// 引入
import Vue from 'vue';
// 引入app
import App from './App';
// 第二种方式
// const Xxoo = () => import('./Xxoo');
// 全局注册
// Vue.component('Xxoo', () => import('./Xxoo'));

// 动态
let name = 'Demo';
Vue.component('Xxoo', () => import(`./${name}`))
// 构建应用
const app = new Vue({
    render: h => h(App)
}).$mount('#app');