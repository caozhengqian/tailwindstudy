'use client';
import { useState } from 'react';
import { useImmer } from 'use-immer';
//...增加和filter删除数组
let nextId = 0;
//map筛选数组
let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 },
];
//map替换数组中的元素
let initialCounters = [
    0, 0, 0
];
//...和slice插入数组
let nextId1 = 3;
const initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
];
export default function UseStateArray() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);
    const [shapes, setShapes] = useState(initialShapes);
    const [counters, setCounters] = useState(initialCounters);
    const [name1, setName1] = useState('');
    const [artists1, setArtists1] = useState(initialArtists);
    //map筛选数组
    function handleClick() {
        const nextShapes = shapes.map(shape => {
            if (shape.type === 'square') {
                // 不作改变
                return shape;
            } else {
                // 返回一个新的圆形，位置在下方 50px 处
                return {
                    ...shape,
                    y: shape.y + 50,
                };
            }
        });
        // 使用新的数组进行重渲染
        setShapes(nextShapes);
    }
    //map替换数组中的元素
    function handleIncrementClick(index) {
        const nextCounters = counters.map((c, i) => {
            if (i === index) {
                // 递增被点击的计数器数值
                return c + 1;
            } else {
                // 其余部分不发生变化
                return c;
            }
        });
        setCounters(nextCounters);
    }
    function handleClick1() {
        const insertAt = 1; // 可能是任何索引
        console.log(...artists1.slice(0, insertAt))
        console.log(...artists1.slice(insertAt))
        const nextArtists = [
            // 插入点之前的元素：
            ...artists1.slice(0, insertAt),
            // 新的元素：
            { id: nextId1++, name: name1 },
            // 插入点之后的元素：
            ...artists1.slice(insertAt)
        ];
        setArtists1(nextArtists);
        setName1('');
    }
    return (
        <>
            <p className={"border-t-2 border-t-red-500"}>...增加/filter删除</p>
            <input
                value={name}
                className="border-2 border-gray-500"
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                setArtists([
                    ...artists,
                    { id: nextId++, name: name }
                ]);
            }}>...添加</button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>
                        {artist.name}
                        <button onClick={() => {
                            setArtists(
                                artists.filter(a =>
                                    a.id !== artist.id
                                )
                            );
                        }}>
                            filter/删除
                        </button>
                    </li>
                ))}
            </ul>
            <div className={`border-t-2 border-t-red-500 p-10 mt-10`}>
                <button onClick={handleClick} className={'border-2 border-gray-500'}>
                    2-1:map筛选数组、所有圆形向下移动！
                </button>
                {shapes.map(shape => (
                    <div
                        key={shape.id}
                        style={{
                            background: 'purple',
                            position: 'absolute',
                            left: shape.x,
                            top: shape.y,
                            borderRadius:
                                shape.type === 'circle'
                                    ? '50%' : '',
                            width: 20,
                            height: 20,
                        }} />
                ))}
            </div>
            <p >2-2map替换数组</p>
            <ul className={"p-8"}>
                {counters.map((counter, i) => (
                    <li key={i}>
                        {counter}
                        <button className={"border-2 border-gray-500"} onClick={() => {
                            handleIncrementClick(i);
                        }}>点击+1</button>
                    </li>
                ))}
            </ul>
            <div className={`border-t-2 border-gray-500 p-10 mt-10`}>
                <p>...和slice插入数组：</p>
                <input
                    value={name1}
                    onChange={e => setName1(e.target.value)}
                />
                <button onClick={handleClick1}>
                    插入
                </button>
                <ul>
                    {artists1.map(artist => (
                        <li key={artist.id}>{artist.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
