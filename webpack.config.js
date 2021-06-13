const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  mode:'production',
  plugins: [
    new ESLintPlugin({
      extensions:['.js','.jsx','ts','tsx'] // 不加.jsx就不会检查jsx文件了
    })
  ],
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
      }
    ]
  }
}
