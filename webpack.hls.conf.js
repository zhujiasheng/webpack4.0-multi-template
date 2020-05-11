var getConfig = require('hjs-webpack')
const path = require('path');

module.exports = getConfig({
  // entry point for the app
  in: 'src/hls/app.js',

  // Name or full path of output directory
  // commonly named `www` or `public`. This
  // is where your fully static site should
  // end up for simple deployment.
  out: {
    path:'public',
    name:'app.js'
  },

  // This will destroy and re-create your
  // `out` folder before building so you always
  // get a fresh folder. Usually you want this
  // but since it's destructive we make it
  // false by default
  clearBeforeBuild: true
})
