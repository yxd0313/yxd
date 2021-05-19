// 引入Vue
import Vue from 'vue';
// 引入Vuex
import Vuex from 'vuex';

// 引入安装
Vue.use(Vuex);

// 创建store对象
let store = new Vuex.Store({
    // 创建数据
    state: {
        msg: 'this is store',
        num: 0
    },
    // 计算属性数据
    getters: {
        doubleNum(state) {
            console.log(111);
            return state.num * 2;
        }
    },
    // 同步消息
    mutations: {
        addNum(state) {
            state.num += 3;
        },
        reduceNum(state) {
            state.num -= 5;
        },
        // 重置
        resetNum(state) {
            state.num = 0;
        }
    },
    // 异步消息
    actions: {
        resetNum(store) {
            console.log('actions', arguments);
            setTimeout(() => {
                store.commit('resetNum');
            }, 2000);
        }
    }
});
// 声名两个子组件
let child = Vue.extend({
    template: '#child',
    // 创建完毕
    created() {}
})
let then = Vue.extend({
    template: '#then',
    // 创建完毕
    created() {},
})

// 构建应用
const app = new Vue({
    store,
    // 视图
    el: '#app',
    // 数据
    data: {
        num: 1
    },
    // 注册组件
    components: {
        child,
        then
    },
    // 创建完毕
    created() {
        console.log('app', this);
    },
    methods: {
        addNum() {
            this.$store.commit('addNum', [1, 2, true]);
        }
    }
})