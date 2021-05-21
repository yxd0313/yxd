// 引入express
let express = require('express');
// 引入ejs
let ejs = require('ejs');
// 构建应用
let app = new express();

app.engine('.html', ejs.__express);
// 静态化
app.use('/dist/', express.static('./dist'));
// 设置用户的请求
app.get('*', (req, res) => {
    res.render('../路由策略.html');
})

// 设置监听端口号
app.listen(80, () => {
    console.log('server is start')
})