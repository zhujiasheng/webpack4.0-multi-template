  const path = require('path');
  const webpack = require('webpack');
  const fs = require('fs');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const {CleanWebpackPlugin} = require('clean-webpack-plugin');
  const ExtractTextPlugin = require("extract-text-webpack-plugin");
  const VueLoaderPlugin = require('vue-loader/lib/plugin');
  const htmlDIR = './src/html';
  const pagesDIR = './src/pages';
  let entry = {},output = {},plugins = [],_module = {};
  const files = fs.readdirSync(htmlDIR).map(it => {
    return it.split(".")[0];
  })
  const _ExtractTextPlugin = new ExtractTextPlugin({
    filename:'[name].min.css',//坑这里写成了.js
    disable:false
  })

  //entry
  entry = files.reduce((curr,it,idx) => {
    curr[it] = `${pagesDIR}/${it}/index.js`;
    return curr;
  },{});

  //output
  output = {
    filename:'[name].js',
    path:path.resolve(__dirname,'dist')
  }

  //plugins
  plugins = files.reduce((curr,it) => {
    curr.push(new HtmlWebpackPlugin({
      template:`${htmlDIR}/${it}.html`,
      filename:`${it}.html`,
      inject:true,
      chunks:[`${it}`]
    }));
    return curr;
  },[]);
  
  plugins.push(new CleanWebpackPlugin());
  plugins.push(_ExtractTextPlugin);
  plugins.push(new VueLoaderPlugin());
  plugins.push(new webpack.HotModuleReplacementPlugin({
    // Options...
  }))

  //module
  _module = {
    rules:[
      {
        test:/\.css$/,
        use: _ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader:"css-loader",
            options:{//关键代码 抽离对应css
              modules:false
            }
          }],
        })
      },
      {
        test:/\.scss$/,
        use:_ExtractTextPlugin.extract({
          fallback:"style-loader",
          use:[{
            loader:"css-loader",
            options:{//关键代码 抽离对应css
              modules:false
            },
          },
          "sass-loader"
        ]
        })
      },
      {
        test:/\.less$/,
        use:_ExtractTextPlugin.extract({
          fallback:"style-loader",
          use:[{
            loader:"css-loader",
            options:{//关键代码 抽离对应css
              modules:false
            },
          },"less-loader"]
        })
      },
      {
        test:/\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test:/\.vue$/,
        use:{
          loader: 'vue-loader'
        }
      }
    ]
  }
  
  const config = {
    entry,
    output,
    module:_module,
    plugins
  }

  config.optimization = {
    splitChunks:{
      chunks:'all',//async 对异步代码分割 all 对同步和异步代码分割
      minSize: 300000,//当引入的模块大于30kb才会做代码分割
      maxSize: 0,//当引入的模块大于maxSize时，会尝试对引入的模块进行二次拆分，一般不用配置
      minChunks: 1,//当一个模块被至少引入1次，才会做代码分割
      maxAsyncRequests: 5,//当引入模块10个时，只会将前5个模块进行打包
      maxInitialRequests: 3,//入口文件引入的模块如果超过3个，只会将前3个模块做代码分割
      automaticNameDelimiter: '~',//文件连接符
      name: true,//拆分块的名称，让cacheGroups里面的名字有效
      cacheGroups:{
        com:{
          filename:'[name].js',
          priority:2,//有限权，当一个模块都符合cacheGroups分组条件，将按照优先权进行分组，priority值越大，优先权越高
          // reuseExistingChunk:true
        },
      }//对符合代码拆分的模块进行一个分类
    }
  }

  config.devServer = {
    // contentBase:`${htmlDIR}/`,
    contentBase:'./dist/',
    host:'127.0.0.1',
    port:'8888',
    hot:true,
    compress: true
  }

  module.exports = config;
