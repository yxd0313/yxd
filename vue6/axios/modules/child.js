// 引入vue
import Vue from 'vue';
// 组件
export default Vue.extend({
    template: `<h1>child</h1>`,
    created() {
        console.log(1, this.$http);
        console.log('child', this);
    }
})