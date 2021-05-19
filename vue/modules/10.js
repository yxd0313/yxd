// 引入Vue
import Vue from 'vue';

// 构建应用
let app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        sex: 'nv',
        // 第二种情况
        hobby: {
            a: '读书被选中',
            b: '看报没被选中',
            c: '钓鱼被选中'
        },
        checks: {
            a: '读书被选中',
            b: '看报被选中',
            c: '钓鱼被选中'
        },
        nochecks: {
            a: '读书没被选中',
            b: '看报没被选中',
            c: '钓鱼没被选中'
        }
    },
})
console.log(app);