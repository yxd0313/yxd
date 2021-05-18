// 引入vue
import Vue from 'vue';

// 定义组件类
const child = Vue.extend({
    // 属性值为对象
    props: {
        // value值为系统构造函数
        name: Number,
        // value值为数组
        msg: [String, Number],
        // value值为一个对象
        parentMsg: {
            // type属性修饰类型
            type: Number | String,
            // 默认值
            default () {
                return '嘛咪嘛咪轰'
            },
            // 必须传
            required: true,
            // 验证器
            validator(value) {
                return value.length >= 5;
                console.log(arguments);
            }
        }
    },
    // 模板
    template: `
        <div>
        <h1>子组件</h1>
        <h2>{{msg}}</h2>
        <h3>{{parentMsg}}</h3>
        </div>
    `,
    data() {
        return {

        }
    },
    // 创建完毕
    created() {
        console.log(this);
    }
});

// 实例化对象
let app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        msg: 'i love you',
    },
    // 局部注册组件
    components: {
        child,
    }
})