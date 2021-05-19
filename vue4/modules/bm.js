export default function (store) {
    // 插件方法的调用
    store.subscribe((...arg) => {
        console.log(arg);
    })
}