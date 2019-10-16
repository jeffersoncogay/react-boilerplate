const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000
const DIST_DIR = path.join(__dirname, '../dist')
const HTML_FILE = path.join(DIST_DIR, 'index.html')

app.use(express.static(DIST_DIR))

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const webpackconfig = require('../webpack.dev')
  const webpackMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpackCompiler = webpack(webpackconfig)
  app.use(webpackMiddleware(webpackCompiler,{}))
  app.use(webpackHotMiddleware(webpackCompiler))
}

global.node_env = process.env.NODE_ENV

app.get('/api', (req, res) => {
  res.send(mockResponse)
})

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE)
})

app.listen(port, function () {
 console.log('App listening on port: ' + port)
})