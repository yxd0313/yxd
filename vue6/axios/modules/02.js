// 引入vue
import Vue from 'vue';
// 引入axios
import axios from 'axios';
// 引用child
import child from './child'

// 语义化
Vue.prototype.$http = axios;

// 构建应用
const app = new Vue({
    // 视图
    el: '#app',
    data: {
        msg: 'you'
    },
    // 注册组件
    components: {
        child
    },
    // 创建完毕
    created() {
        console.log('app', this);
        // 发送ajax请求
        this.$http
            // 传递数据的时候
            .get('/data/demo.json?name=zhangsan&age=18')
            .then(({
                data
            }) => {
                this.msg = data.msg;
            })
            .catch(err => console.log(111, err));
    }
})