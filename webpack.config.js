const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')

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
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          {
            loader: 'css-loader',
            options: {
              modules:{
                compileType: 'icss',
              }
            }
          },
          // 将 Sass 编译成 CSS
          {
            loader: 'sass-loader',
            options: {
              additionalData:`
              @import "src/scss-vars.scss";
              `,
              sassOptions:{
                includePaths:[__dirname]
              }
            }
          }
        ],
      }
    ]
  }
}
