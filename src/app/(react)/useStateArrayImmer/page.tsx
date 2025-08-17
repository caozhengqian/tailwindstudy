"use client";
import { useState } from 'react';
import { useImmer } from 'use-immer';
let nextId = 3;
const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
];

export default function UserStateArrayImmer() {
    // const [myList, setMyList] = useState(initialList);
    // const [yourList, setYourList] = useState(initialList);
    const [myList, updateMyList] = useImmer(initialList);
    const [yourList, updateYourList] = useImmer(initialList);

    function handleToggleMyList(artworkId, nextSeen) {
        // setMyList(myList.map(artwork => {
        //     if (artwork.id === artworkId) {
        //         // 创建包含变更的*新*对象
        //         return { ...artwork, seen: nextSeen };
        //     } else {
        //         // 没有变更
        //         return artwork;
        //     }
        // }));
        updateMyList(draft => {
            const artwork = draft.find(a =>
                a.id === artworkId
            );
            artwork.seen = nextSeen;
        });
    }

    function handleToggleYourList(artworkId, nextSeen) {
        // setYourList(yourList.map(artwork => {
        //     if (artwork.id === artworkId) {
        //         // 创建包含变更的*新*对象
        //         return { ...artwork, seen: nextSeen };
        //     } else {
        //         // 没有变更
        //         return artwork;
        //     }
        // }));
        updateYourList(draft => {
            const artwork = draft.find(a =>
                a.id === artworkId
            );
            artwork.seen = nextSeen;
        });
    }

    return (
        <>
            <p className={'text-red-500'}>避免使用[...array]浅拷贝</p>
            <h2>我想看的艺术清单：</h2>
            <ItemList
                artworks={myList}
                onToggle={handleToggleMyList} />
            <h2>你想看的艺术清单：</h2>
            <ItemList
                artworks={yourList}
                onToggle={handleToggleYourList} />
        </>
    );
}

function ItemList({ artworks, onToggle }) {
    return (
        <ul>
            {artworks.map(artwork => (
                <li key={artwork.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={artwork.seen}
                            onChange={e => {
                                onToggle(
                                    artwork.id,
                                    e.target.checked
                                );
                            }}
                        />
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
    );
}
