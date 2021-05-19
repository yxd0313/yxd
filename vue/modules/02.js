// 引入vue
import Vue from 'vue';
// 构建应用
let app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        title: 'hello',
        books: ['啦啦啦啦啦啦啦啦', '滴滴滴滴滴', '呼呼呼呼呼'],
        // person: {
        //     name: '张三',
        //     sex: '男'
        // },
        // xxoo: ''
    },
})

// 修改普通值
// app.title = 'i miss you';

// 数组中的基础值类型
app.books[1] = '咔咔咔咔咔咔';
// // 更新整个数组
app.books = ['啦啦啦啦啦啦啦啦', '滴滴滴滴滴', '呼呼呼呼呼'];

// 数组中新增的值
// app.books.push('哭哭哭哭哭');
app.books[5] = '哭哭哭哭';

// 对象新增的属性
// app.person.age = 20;
// 更新整个对象
// app.person = {
//     name: '张三',
//     sex: '男',
//     age: 11
// }

// 未初始化的数据
// app.xxoo = 'ooxx';
// app.person.name = '李四';

// 使用set方法
// app.$set(app.books, 3, '啦啦啦啦啦啦');
// app.$set(app.person, 'age', 20);
// console.log(app);