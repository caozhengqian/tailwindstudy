'use client';
import { useLayoutEffect,useEffect } from 'react';

export default function ScrollLayout() {
    const srollHandler = (e: React.UIEvent<HTMLDivElement>) => {
        const scrolltop = e.currentTarget.scrollTop;
        window.history.replaceState(null, '', `?top=${scrolltop}`);

    };
    // useEffect(() => {
    useLayoutEffect(() => {
        const top = window.location.search.split('=')[1];
        if (top) {
            const container = document.getElementById('container');
            container?.scrollTo(0, Number(top));
        }
    }, []);
    return(
        <div onScroll={srollHandler} id="container" style={{ height: '400px', overflowY: 'auto' }}>
            {Array(1000)
                .fill(0)
                .map((item, index) => {
                    return <div key={index}>{index}</div>;
                })}
        </div>
    )

}
