  const path = require('path');
  const webpack = require('webpack');
  const fs = require('fs');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const ExtractTextPlugin = require("extract-text-webpack-plugin");
  const htmlDIR = './src/html';
  const pagesDIR = './src/pages';
  let entry = {},output = {},plugins = [],_modules = {};
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

  plugins.push(_ExtractTextPlugin);
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
        test:/\.js|jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
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

  config.devServer = {
    // contentBase:`${htmlDIR}/`,
    contentBase:'./dist/',
    host:'127.0.0.1',
    port:'8888',
    hot:true,
    compress: true
  }

  module.exports = config;
