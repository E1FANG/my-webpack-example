import {JsxDemo} from './jsx-demo.jsx';
import {x,cc} from  './ts-demo.ts'
import {a} from './a'
import {b} from './b'
import {TsxDemo} from './tsx-demo.tsx';
import 'src/scss-demo.scss'
import vars from 'src/scss-export.scss'
import LessVars from 'src/less-vars.less'
import 'src/less-demo.less'
import React from 'react'
import {shared} from './share';

console.log(shared);
console.log(React);

console.log(vars);
console.log(LessVars);

console.log(JsxDemo);
console.log(x,cc);
console.log(TsxDemo);

const fn1 = ()=>{
  const str = 'hi'
  console.log(str)
  console.log(a);
  console.log(b);
  console.log(Promise.resolve("test promise"));
}
fn1()
