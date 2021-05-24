// 暴露接口
module.exports = {
    resolve: {
        // 扩展名
        extensions: ['.js', '.vue'],
        // 配置别名
        alias: {
            vue$: '/node_modules/vue/dist/vue.js'
        }
    },
    // 入口文件
    entry: {
        // '01': './modules/01.js',
        "main": './modules/main.js'
    },
    // 出口配置
    output: {
        // 文件名
        filename: '[name].js'
    },
    // 加载机
    module: {
        // 匹配规则
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                // 排除文件夹
                exclude: '/node_modules',
                // 包含指定的文件夹
                include: '/modules',
                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    // 模式
    mode: 'development'
}