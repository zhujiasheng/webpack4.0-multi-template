const path = require('path')

const config = {
  htmlDIR: './src/html',
  projectDIR: './src/project',
  ft: +new Date(),
  dev() {
    return {
      contentBase: `${config.htmlDIR}/`,
      host: '127.0.0.1',
      port: '8888',
      hot: true,
      compress: true,
    }
  },
  build() {
    return {
      output: {
        filename: `[name].js`,
        path: path.resolve(__dirname, '../dist/'),
        // Paths
        // assetsRoot: path.resolve(__dirname, "../dist/"),
        // assetsSubDirectory: "static",
        // assetsPublicPath: './',
        // publicPath
        // library: `${'web'}`,
        // libraryTarget: "commonjs2"
      },
    }
  },
}

module.exports = config
