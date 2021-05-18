import Vue from 'vue';

// 全局声明指令
// Vue.directive('bmHtml', {
//     // 绑定指令
//     bind(el, binding, vnode) {
//         console.log(1, 'bind');
//         console.log(arguments);
//         el.innerHTML = binding.value;
//     },
//     // 页面渲染
//     inserted(el, binding, vnode) {
//         console.log(2, 'inserted');
//         console.log(arguments);
//     },
//     // 更新数据
//     update(el, binding, vnode, oldVnode) {
//         console.log(3, 'update');
//         console.log(arguments);
//         el.innerHTML = binding.value;
//     },
//     // 更新视图
//     componentUpdated(el, binding, vnode) {
//         console.log(4, 'componentUpdated');
//     },
//     unbind(el, binding, vnode) {
//         console.log(5, 'unbind');
//     }
// })
Vue.directive('bmHtml', (el, binding, ...args) => {
    console.log(binding.value, binding.oldValue);
    // 通过值的变化，来优化dom操作:那个发生改变执行哪一个
    if (binding.value !== binding.oldValue) {
        console.log(el);
        el.innerHTML = binding.value;
    }
})

// 实例化对象
let app = new Vue({
    el: '#app',
    // 模型
    data: {
        msg: '<a>i love you</a>',
        title: '斑码教育',
        flag: true
    },
    // 定义方法
    methods: {
        toggle() {
            this.flag = !this.flag;
        }
    },
    // 局部定义
    directives: {
        bmOnce: {
            bind(el, binding) {
                console.log(9);
                el.innerHTML = binding.value;
            }
        }
    }
})