import Vue from 'vue';

import '../scss/1.scss';
let app = new Vue({
    // 绑定视图
    el: '#app',
    // 绑定模型
    data: {
        flag: true
    },
    // 方法
    methods: {
        // 切换显示状态
        toggle() {
            this.flag = !this.flag;
        },
        // 开始之前
        beforeEnter() {
            console.log(1, 'beforeEnter');
        },
        enter() {
            console.log(2, 'enter');
        },
        afterEnter() {
            console.log(3, 'afterEnter');
        },
        beforeLeave() {
            console.log(4, 'beforeLeave');
        },
        leave() {
            console.log(5, 'leave');
        },
        afterLeave() {
            console.log(6, 'afterLeave');
        }
    }
})