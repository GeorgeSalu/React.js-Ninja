'use strict'

const { join } = require('path')

//centralizando paths do webpack no common.js
const paths = {
  root: join(__dirname, '..'),
  src: join(__dirname, '..', 'src'),
  dist: join(__dirname, '..', 'dist')
}

module.exports = {
  paths,

  entry: {
    main: join(paths.src, 'index')
  },

  output: {
    path: paths.dist,
    filename: '[name]-[chunkhash].js'
  },

  htmlPluginConfig: {
    title: 'My app',
    template: join(paths.src, 'html', 'template.html')
  },

  standardPreLoader: {
    enforce: 'pre',
    test: /\.js$/,
    include: paths.src,
    use: {
      //corrige erro de lint ao usar import() dinamico
      loader: 'standard-loader',
      options: {
        parser: 'babel-eslint'
      }
    }
  },

  jsLoader: {
    test: /\.js$/,
    include: paths.src,
    use: {
      loader: 'babel-loader',
      options: {
        "presets": [
          "es2015",
          "stage-0",
          "react"
        ],
        "plugins": [
          "react-hot-loader/babel",
          ["transform-runtime", {
            "helpers": false,
            "polyfill": false,
            "regenerator": true
          }]
        ]
      }

    }
  },

  cssLoader: {
    test: /\.css$/,
    include: paths.src,
    use: ['style-loader', 'css-loader']
  },

  // conf file-loader
  fileLoader: {
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
    include: paths.src,
    use: {
      loader: 'file-loader',
      query: {
        name: 'media/[name].[hash:8].[ext]'
      }
    }
  },

  // conf url-loader
  urlLoader: {
    test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    include: paths.src,
    use: {
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: 'media/[name].[hash:8].[ext]'
      }
    }
  },

  resolve: {
    alias: {
      src: paths.src,
      components: join(paths.src, 'components'),
      utils: join(paths.src, 'utils')
    }
  }
}
