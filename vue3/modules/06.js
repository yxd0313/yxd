// 引入vue
import Vue from 'vue';

// 定义组件类
const yxd = Vue.extend({
    // 模板
    template: '#tpl',
    data() {
        return {
            title: '斑码教育',
            name: 'child'
        }
    },
})

// 实例化对象
let app =new Vue({
    // 视图
    el:'#app',
    // 模型
    data:{
        msg:'i love you',
    },
    components:{
        yxd
    }
})