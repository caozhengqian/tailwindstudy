# 技术对比
技术对比：https://npmtrends.com/angular-vs-react-vs-svelte-vs-vue
多少个网站使用react技术：https://trends.builtwith.com/javascript/React
# 
## tsconfig
### tsconfig.node.json是面向vite.config.ts
### tsconfig.app.json是面向项目
### ！抑制错误
document.getElementById('root')!：可能为空，抑制错误，不然要加if判断
### vite-env.d.ts
"///"引入文件，让ts认识各类文件的dts，css、js、scss等 
## babel
1. 转为ast语法树，再转为ES5
2. babel/core转普通js方法
3. babel/preset-env转为目标版本
4. babel/polyfill将新方法引入到旧版本的浏览器中，实现promise等功能
5. core.js 
6. 需要安装babel/cli库
7. swc使用rust编写速度更快，支持原生typescript
## jsx
1. jsx = js+html，js中编辑html
### 事件
1. 正确：<button onClick={() => fun('a')}>  <button onClick={fun}>
2. 错误（绑定时执行）:<button onClick={fun()}>
### 判断两种方法
1. 三目运算：{isPacked ? name + ' ✅' : name}
2. 与运算符：{name} {isPacked && '✅'}
### 循环
#### 循环三步走
1. 定义数组：const list = ['a','b'];
2. 定义循环ui：const listUI = list.map(item => <li key>{item}</li>);
3. 使用：return <ul>{listItems}</ul>;
#### 注意两种写法
1. item => <li key>{item}</li>
2. 使用{}要加return：item =>{ return <li>{item}</li>} 
### css
#### 1.cssInJs
```jsx
const styles={color:'red'}
<div style={styles}>
```
#### 2.动态class
className={`card${a}`}
#### 3.直接使用
style={{color:'red'}}
### 直接渲染html
```tsx
const value:string = '<p>aaa</p>';
<div dangerouslySetInnerHTML={{ __html: value }} />
```
