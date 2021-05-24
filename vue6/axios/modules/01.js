// 引入Vue
import Vue from 'vue';
// 引入 axios
import axios from 'axios';
// 引入组件
import child from './child';

// 构建应用
const app = new Vue({
    // 视图
    el: '#app',
    // 数据
    data: {
        msg: 'you'
    },
    // 注册组件
    components: {
        child
    },
    // 创建完毕
    created() {
        // 发送ajax请求
        axios.get('/data/demo.json?name=zhangsan&age=18', {
                // query数据
                params: {
                    sex: 'nan',
                    class: 'sy102',
                    name: 'xxoo'
                }
            })
            .then(({
                data
            }) => {
                console.log(data);
                this.msg = data.msg;
            })
            .catch(err => console.log(1, err));
        // 发送post请求
        axios.post('/data/demo.json?name=lisi&class=sy103', {name:666,sex:888},{
                // 设置请求头信息
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                },
                params: {
                    q: 11,
                    w: 22
                },
            
            })

            .then(({
                data
            }) => {
                console.log(data);
            })
            .catch(err => console.log('posterr', err))
    }
})