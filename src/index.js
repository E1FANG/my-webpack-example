import {JsxDemo} from './jsx-demo.jsx';
import {x} from  './ts-demo.ts'
import {a} from './a'
import {b} from './b'

console.log(JsxDemo);
console.log(x);

const fn1 = ()=>{
  const str = 'hi'
  console.log(str)
  console.log(a);
  console.log(b);
  console.log(Promise.resolve("test promise"));
}
fn1()
