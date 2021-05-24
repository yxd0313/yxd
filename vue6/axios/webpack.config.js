// 暴露接口
module.exports = {
    resolve: {
        // 扩展名
        extensions: ['.js'],
        // 配置别名
        alias: {
            vue$: '/node_modules/vue/dist/vue.js'
        }
    },
    // 入口文件
    entry: {
        "01": './modules/01.js',
        "02": './modules/02.js',
        "03": './modules/03.js',
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
    mode: 'development',
    devServer: {
        // 配置域名
        host: 'localhost',
        // 配置端口号
        port: 8080,
        // 是否打开浏览器
        open: true,
        // 代理
        proxy: {
            '/data/ddd': {
                target: 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg',
                // 是否重写路径
                pathRewrite: {
                    changeOrigin: true,
                    '^/data/ddd': '',
                },
                // https是否效验
                secure: false
            }
        }
    }
}