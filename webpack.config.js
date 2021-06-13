const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')

const cssLoaders = (...loaders)=>[
  'style-loader',
    {
      loader:'css-loader',
      options: {
        modules: {
          compileType: 'icss',
        }
      }
    },
  ...loaders
]

module.exports = {
  mode:'production',
  plugins: [
    new ESLintPlugin({
      extensions:['.js','.jsx','ts','tsx'] // 不加.jsx就不会检查jsx文件了
    })
  ],
  resolve: {
    alias: {
      'src':path.resolve(__dirname,'./src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:[
              ['@babel/preset-env'],
              ['@babel/preset-react',{runtime:'classic'}],
              ['@babel/preset-typescript']
            ]
          }
        }
      },
      {
        test: /\.less$/i,
        use:cssLoaders({
          loader:'less-loader',
          options: {
            additionalData: `
              @import "~src/less-vars.less";
              `,
          }
        })
      },
      {
        test: /\.s[ac]ss$/i,
        use:cssLoaders({
          loader: 'sass-loader',
          options: {
            additionalData:`
              @import "src/scss-vars.scss";
              `,
            sassOptions:{
              includePaths:[__dirname]
            }
          }
        })
      }
    ]
  }
}
