// 引入
import Vue from 'vue';
// 引入app
import App from './App';

// 全局混合--继承
Vue.mixin({
    xxoo: 'ooxx',
    say() {
        console.log('i miss you');
    },
    data() {
        return {
            num: 12,
            msg: 'you'
        }
    },
    created() {
        this.num = 15;
    }
})
import bm from './bm';
// 安装
Vue.use(bm, 1, true, 'i miss you', ['a', 'b']);

console.log(Vue.bmClassName);
// 构建应用
const app = new Vue({
    render: h => h(App)
}).$mount('#app');