const path = require('path')
const webpack = require('webpack')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const compressionWebpackPlugin = require('compression-webpack-plugin')
const config = require('../config')
const devConfig = require('../config/dev.env')
const prodConfig = require('../config/prod.env')

// console.log(process.env.NODE_ENV == prodConfig.NODE_ENV, 'kk')
// console.log(process.env.NODE_ENV == 'production', 'kj')

function isProd(value) {
  return process.env.NODE_ENV == (prodConfig.NODE_ENV || value)
}

function readFile() {
  return fs.readdirSync(config.htmlDIR).map(it => {
    return it.split('.')[0]
  })
}

function entryConfig() {
  const files = readFile()
  return files.reduce((curr, it, idx) => {
    curr[it] = `${config.projectDIR}/${it}/index.js`
    return curr
  }, {})
}

function outputConfig(t) {
  return Object.assign({}, config.build().output, {
    filename: `[name].js?t=${t}`,
  })
}

function pluginsConfig() {
  const files = readFile()
  const _htmlWebpackPlugin = files.reduce((curr, it) => {
    curr.push(
      new HtmlWebpackPlugin({
        template: `${config.htmlDIR}/${it}.html`,
        filename: `${it}.html`,
        inject: true,
        chunks: [`${it}`],
        css: [],
        js: ['js/lodash.js', 'js/react.js', 'js/react-dom.js'],
      }),
    )
    return curr
  }, [])

  const _cleanWebpackPlugin = new CleanWebpackPlugin()
  const _vueLoaderPlugin = new VueLoaderPlugin()
  const _copyWebpackPlugin = new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, 'static'),
      to: path.resolve(__dirname, 'static'),
      // ignore: ['*.ts', '*.less'],
    },
    {
      from: './node_modules/lodash/lodash.js',
      to: path.resolve(__dirname, '../dist/js/lodash.js'),
    },
    {
      from: './node_modules/react-dom/umd/react-dom.production.min.js',
      to: path.resolve(__dirname, '../dist/js/react-dom.js'),
    },
    {
      from: './node_modules/react/umd/react.production.min.js',
      to: path.resolve(__dirname, '../dist/js/react.js'),
    },
  ])

  const _definePlugin = new webpack.DefinePlugin({
    webp: JSON.stringify(isProd() ? prodConfig : devConfig),
  })

  // new compressionWebpackPlugin()
  //new webpack.HotModuleReplacementPlugin

  return [
    ..._htmlWebpackPlugin,
    ...[$glob.extractTextPlugin, _cleanWebpackPlugin, _vueLoaderPlugin, _copyWebpackPlugin, _definePlugin],
  ]
}

function moduleConfig() {
  return {
    rules: [
      {
        test: /\.css$/,
        use: $glob.extractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                //关键代码 抽离对应css
                modules: false,
              },
            },
          ],
        }),
      },
      {
        test: /\.scss$/,
        use: $glob.extractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                //关键代码 抽离对应css
                modules: false,
              },
            },
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.less$/,
        use: $glob.extractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                //关键代码 抽离对应css
                modules: false,
              },
            },
            'less-loader',
          ],
        }),
      },
      {
        test: /\.(js)|(jsx)|(ts)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
      {
        test: /\.(ts)|(tsx)$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
    ],
  }
}

function externalsConfig() {
  return {
    lodash: 'lodash',
    'react-dom': 'ReactDOM',
    react: 'React',
  }
}

function resolveConfig() {
  // config.resolve = {
  //   extensions: ['.js','jsx','.vue','.json'],
  //   alias: {
  //     '@': resolve('src'),
  //     '@/components': resolve('src/components'),
  //     '@/pages': resolve('src/pages')
  //   }
  // }
  // config.optimization = {
  //   splitChunks:{
  //     chunks:'all',
  //     name:true,
  //     cacheGroups:{
  //       lodash:{
  //         name:'chunks-lodash',
  //         test: (module) => {
  //           return /lodash/.test(module.context)
  //         },
  //         chunks:'initial',
  //         priority:12
  //       }
  //     }
  //   }
  // }
  // config.optimization = {
  //   splitChunks:{
  //     chunks:'all',//async 对异步代码分割 all 对同步和异步代码分割
  //     minSize: 300000,//当引入的模块大于30kb才会做代码分割
  //     maxSize: 0,//当引入的模块大于maxSize时，会尝试对引入的模块进行二次拆分，一般不用配置
  //     minChunks: 1,//当一个模块被至少引入1次，才会做代码分割
  //     maxAsyncRequests: 5,//当引入模块10个时，只会将前5个模块进行打包
  //     maxInitialRequests: 3,//入口文件引入的模块如果超过3个，只会将前3个模块做代码分割
  //     automaticNameDelimiter: '~',//文件连接符
  // name: true,//拆分块的名称，让cacheGroups里面的名字有效
  //     cacheGroups:{
  //       com:{
  //         filename:'[name].js',
  //         priority:2,//有限权，当一个模块都符合cacheGroups分组条件，将按照优先权进行分组，priority值越大，优先权越高
  //         // reuseExistingChunk:true
  //       },
  //     }//对符合代码拆分的模块进行一个分类
  //   }
  // }

  return {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.less', '.scss', '.css'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  }
}

function devServerConfig() {
  return config.dev()
}

function modeConfig() {
  return isProd() ? 'production' : 'development'
}

const $glob = (function () {
  const _extractTextPlugin = new ExtractTextPlugin({
    filename: `[name].min.css?t=${config.ft}`,
    disable: false,
  })

  return {
    extractTextPlugin: _extractTextPlugin,
  }
})()

const web = (function () {
  return {
    context: path.resolve(__dirname, '../'),
    mode: modeConfig(),
    entry: entryConfig(),
    output: outputConfig(),
    module: moduleConfig(),
    plugins: pluginsConfig(),
    externals: externalsConfig(),
    resolve: resolveConfig(),
    devServer: devServerConfig(),
  }
})()

module.exports = web
