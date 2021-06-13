module.exports ={
  extends: ['react-app'],
  rules:{
    // 2的意思是：没有使用就报错
    'react/jsx-uses-react':[2],
    //提示要在JSX文件里手动引入React
    'react/react-in-jsx-scope':[2]
  }
}
