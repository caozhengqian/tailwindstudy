"use client";
import {Suspense, useState, use, useEffect, useDeferredValue} from 'react';
function mock(req) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: 200,
                data: req,
                timestamp: Date.now()
            });
        }, 2000);
    });
}
export default  function UseDeferredValue1(){
    const [query, setQuery] = useState('');
    const deferQuery = useDeferredValue(query);
    console.log(deferQuery,'==',query);
    return(
        <div>
            <label>
                Search albums:
                <input value={query} onChange={e => {
                    setQuery(e.target.value);
                }}
                className={"border-2 border-gray-500"}
                />
            </label>
        </div>
    )
}
