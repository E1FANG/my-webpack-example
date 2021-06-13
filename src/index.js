import {a} from './a'
import {b} from './b'
import {JsxDemo} from './jsx-demo.jsx';

console.log(JsxDemo);
const fn1 = ()=>{
  const str = 'hi'
  console.log(str)
  console.log(a);
  console.log(b);
  console.log(Promise.resolve("test promise"));
}
fn1()
