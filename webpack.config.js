import path from 'path';

module.exports = {
    entry: './src/main.js', // Đường dẫn đến file entry của ứng dụng Vue
    output: {
        path: path.resolve(__dirname, 'dist'), // Thư mục đầu ra sau khi build
        filename: 'bundle.js', // Tên file đầu ra
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm-bundler.js',
        },
    },
};