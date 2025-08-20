# React
## 杂项：
1. 技术对比
    1. 技术对比：https://npmtrends.com/angular-vs-react-vs-svelte-vs-vue
    2. 多少个网站使用react技术：https://trends.builtwith.com/javascript/React
2. 模拟接口
    ```tsx
        function mock() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        status: 200,
                        data: "接口数据模拟成功",
                        timestamp: Date.now()
                    });
                }, 2000);
            });
        }
    ```
3. react触发更新三个条件
   1. state
   2. props
   3. usecontext

## 一、tsconfig
### tsconfig.node.json是面向vite.config.ts
### tsconfig.app.json是面向项目
### ！抑制错误
document.getElementById('root')!：可能为空，抑制错误，不然要加if判断
### vite-env.d.ts
"///"引入文件，让ts认识各类文件的dts，css、js、scss等 
## 二、babel
1. 转为ast语法树，再转为ES5
2. babel/core转普通js方法
3. babel/preset-env转为目标版本
4. babel/polyfill将新方法引入到旧版本的浏览器中，实现promise等功能
5. core.js 
6. 需要安装babel/cli库
7. swc使用rust编写速度更快，支持原生typescript
## 三、jsx
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
## 四、state
### 不合并state
```jsx
    setIndex((prev)=>prev+1);
    setIndex((prev)=>prev+1);
```
### Object的...和immer操作
```tsx
    const [person, setPerson] = useState({
        name: 'aaa',
        artwork: {
            title: 'bbb',
            city: 'ccc',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });
    setPerson({
        ...person,
        artwork: {
            ...person.artwork,
            title: e.target.value
        }
    });
    //使用immer
    setPerson(draft => {
        draft.artwork.title = e.target.value;
    });
```
### Array的操作
#### 1.`增加`使用...操作
```tsx
    setArtists([
        ...artists,
        { id: nextId++, name: name }
    ]);
```
#### 2.`删除`使用filter
```tsx
    setArtists(
        artists.filter(a =>
            a.id !== artist.id
        )
    );
```
#### 3.`筛选`使用map
```tsx
    const nextCounters = counters.map((c, i) => {
        if (i === index) {
            return c + 1;
        } else {
            return c;
        }
    });
    setCounters(nextCounters);//更改state
```
#### 4.`插入`数组
```tsx
    let nextId1 = 3;
    const initialArtists = [
        { id: 0, name: 'Marta Colvin Andrade' },
        { id: 1, name: 'Lamidi Olonade Fakeye'},
        { id: 2, name: 'Louise Nevelson'},
    ];
    const nextArtists = [
        // 插入点之前的元素：
        ...artists1.slice(0, insertAt),
        // 新的元素：
        { id: nextId1++, name: name1 },
        // 插入点之后的元素：
        ...artists1.slice(insertAt)
    ];
    setArtists1(nextArtists);
```
#### 5. `倒序`,`排序`等需要map和Immer出新数组
```tsx
    const initialList = [
        { id: 0, title: 'Big Bellies', seen: false },
        { id: 1, title: 'Lunar Landscape', seen: false },
        { id: 2, title: 'Terracotta Army', seen: true },
    ];
    const [myList, setMyList] = useState(initialList);
    setMyList(myList.map(artwork => {
        if (artwork.id === artworkId) {
            // 创建包含变更的*新*对象
            return { ...artwork, seen: nextSeen };
        } else {
            // 没有变更
            return artwork;
        }
    }));
    //使用immer
    const [myList, updateMyList] = useImmer(initialList);
    updateMyList(draft => {
        const artwork = draft.find(a =>
            a.id === artworkId
        );
        artwork.seen = nextSeen;
    });
```
## effect
1. `更新`和`卸载`时先只执行“clear effect”
2. 在ui渲染完执行
    ```tsx
        useEffect(() => {
            console.log('effect')
            return ()=>{
                console.log('clear effect')
            }
        }, []);
    ```
3. 简单effect防抖
    ```tsx
        useEffect(() => {
            console.log('effect')
            const timer= setTimeout(()=>{
                //featch...
            })
            return ()=>{
                clearTimeout(timer)
                console.log('clear effect')
            }
        }, []);
    ```
4. useEffectLayout在UI渲染前执行
    1. 为什么next中不生效？？？？？？？？？？
## hooks
1. `useSyncExternalStore` 将外部数据绑定到react
   1. 切换网络http://localhost:3000/useSyncExternalStore1
2. `useLayoutEffect`1页面渲染前的副作用，effect页面渲染后 http://localhost:3000/useLayoutEffect1
3. `useState`
   1. 数组 http://localhost:3000/useLayoutEffect1
   2. 数组immer
   3. obj
4. `useImperativeHandle`暴露给ref
5. `useTransition`处理长列表的state setList（list）
   1. 将页面渲染放到后台，避免阻塞UI
   2. 如果包裹的值有变化，则阻断之前的，用最新的值渲染
   3. input禁用，输入123，被阻断后只剩下3
6. `useDeferredValue`处理单个state
   1. 用在input输入，输完再出结果，中间过程被延迟了。类似于防抖
7. `useRef`同步即时更新
   1. 保持值改变，但是页面不渲染
      ```tsx
        let ref = useRef(0);
        ref.current = ref.current + 1;
        <p>点击次数{ref.current}！</p>
      ```
   2. 操作DOM
      ```tsx
       const inputRef = useRef(null);
       inputRef.current.focus();
      <input ref={inputRef}/>
      ```
