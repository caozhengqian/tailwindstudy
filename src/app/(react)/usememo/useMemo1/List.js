"use client";
import { memo } from 'react';

const List = memo(function List({ items }) {
  console.log('[ARTIFICIALLY SLOW] Rendering <List /> with ' + items.length + ' items');
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // 在 500 毫秒内不执行任何操作以模拟极慢的代码
  }
 
  return (
      <ul>
        {items.map(item => (
            <li key={item.id}>
              {item.completed ?
                  <s>{item.text}</s> :
                  item.text
              }
            </li>
        ))}
      </ul>
  );
});

export default List;
