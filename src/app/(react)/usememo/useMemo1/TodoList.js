"use client";
import { useMemo } from 'react';
import List from './List.js';
import { filterTodos } from './utils.js'

export default function TodoList({ todos, theme, tab }) {
  console.log('执行了')
  console.time('filter array');
  // const visibleTodos = useMemo(
  //     () => filterTodos(todos, tab),
  //     [todos, tab]
  // );
  const visibleTodos =filterTodos(todos, tab)

  console.timeEnd('filter array');

  return (
      <div className={theme}>
        <p><b>Note: <code>List</code> is artificially slowed down!</b></p>
        <List items={visibleTodos} />
      </div>
  );
}
