const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports={
    entry: './src/index.js',
    output:{
        filename:'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            { 
                test: /\.css$/, 
                use: [MiniCssExtractPlugin.loader, 'css-loader'] 
            },
            { 
                test: /\.(mp3|wav)$/, 
                use: ['file-loader'] 
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // يستخدم هذا الملف كـ Template
            filename: 'index.html' // سيتم إنشاء dist/index.html بناءً عليه
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css', // تأكد من أن ملف الـ CSS يتم تسميته بشكل صحيح هنا
        })
    ],
    mode: 'development',

};