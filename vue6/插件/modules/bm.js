// 引入axios
import axios from 'axios';

// 可以为一个对象
export default {
    install(Vue, ...args) {
        // 添加一个属性
        Vue.bmClassName = 'ddd';
        // 指令
        Vue.directive('bm', function () {
            console.log('this is bm-');
        });
        // 过滤器
        Vue.filter('bm', function () {
            return 'ddd:' + args[0];
        })
        Vue.prototype.$http = axios;
    }
}