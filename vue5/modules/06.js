// 引入vue
import Vue from 'vue';
// 引入router
import Router from 'vue-router';
// 引入scss
import '../scss/5.scss';

// 安装
Vue.use(Router);

// 创建组件
let first = {
    template: `
    <div class="a">
        <h1>first</h1>
        <h2>name:{{$route.fullPath}}</h2>
    </div>
    `,
}
let second = {
    template: `
    <div class="b">
        <h1>second</h1>
        <h2>id:{{id}}</h2>
    </div>
    `,
    props: ['id']
}
let three = {
    template: `
    <div class="c">
        <h1>three</h1>
        <h2>fullPath:{{fullPath}}---name:{{name}}</h2>
        <hr>
        <router-view></router-view>
    </div>
    `,
    props: ['fullPath', 'name'],
    created() {
        console.log(this.$route);
    },
    watch: {
        $route(to, from) {
            console.log(1, arguments);
        }
    }
}


// 创建路由规则
const routes = [{
        path: '/first',
        component: first,
        name: first
    },
    {
        path: '/second/:id',
        component: second,
        name: 'second',
        props: true
    },
    {
        path: '/three',
        component: three,
        name: 'three',
        props(route) {
            let {
                fullPath,
                name
            } = route;
            return {
                fullPath,
                name
            }
        }
    },
    // 重定向
    {
        path: '/second',
        redirect: '/second/xxoo'
    },
    // 默认路由
    {
        path: '*',
        component: {
            template: '<h1>默认路由</h1>',
            name: 'default'
        }
    }
]

// 创建路由对象
const router = new Router({
    // 规则
    routes
})

// 创建vue实例
const app = new Vue({
    // 视图
    el: '#app',
    // 数据
    data: {

    },
    // 注册路由
    router,
    // 自定义全局路由守卫
    watch: {
        $route(to, from) {
            console.log(2, arguments);
        }
    }
})