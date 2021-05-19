// 引入vue
import Vue from 'vue';
// 引入路由
import Router from 'vue-router';
// 引入路由
Vue.use(Router);

// 定义组件
let first = {
    template: '#first',
    // 创建完毕
    created() {
        console.log('first', this);
    }
}
let second = {
    props: ['name', 'id', 'fullPath', 'sex', 'hash'],
    template: '#second',
    created() {
        console.log(111);
        console.log(this.$route);
    }
}
let three = {
    template: '<h1>footer</h1>'
};
// 创建路由规则
const routes = [{
        path: '/first',
        component: first,
        name: 'first'
    },
    // 动态路由
    {
        path: '/second/:id',
        component: second,
        name: 'second',
        props(route) {
            return {
                name: route.name,
                id: route.params.id,
                fullPath: route.fullPath,
                sex: route.query.sex,
                hash: route.hash
            }
        }
    },
    {
        path: '/three',
        component: three,
        name: 'three'
    },
    // 路由重定向
    {
        path: '/second',
        redirect: '/second/demo?name=zhansan&age=18#top'
    },
    // 设置默认路由
    {
        path: '*',
        component: {
            template: '<h1>index</h1>'
        }
    }
]

// 创建路由对象
const router = new Router({
    routes
});
// 创建实例对象
const app = new Vue({
    // 注册路由
    router,
    // 视图
    el: '#app',
    // 数据
    data: {

    },
    // 创建完毕
    created() {
        console.log('app', this);
    }
})