import React, { FC, useState, useRef } from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';

// temp mock data
interface ITodo {
  id: number;
  taskName: string;
}

const TODOS_MOCK: ITodo[] = [
  {
    id: 0,
    taskName: '읽기',
  },
  {
    id: 1,
    taskName: '쓰기',
  },
  {
    id: 2,
    taskName: '비둘기',
  },
  {
    id: 3,
    taskName: '듣기',
  },
  {
    id: 4,
    taskName: '안녕하세요',
  },
  {
    id: 5,
    taskName: '저는',
  },
  {
    id: 6,
    taskName: 'ARrrrrr',
  },
];

interface Props {}

const TodoList: FC<Props> = (props) => {
  const [todos, setTodos] = useState<ITodo[]>(TODOS_MOCK);

  const draggingItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const onDragStart = (index: number) => {
    draggingItem.current = index;
  };

  const onDragEnd = () => {
    draggingItem.current = null;
  };

  const onDragOver = (index: number) => {
    dragOverItem.current = index;

    if (draggingItem.current !== null) {
      changeOrder(draggingItem.current, dragOverItem.current);
    }
  };

  const changeOrder = (source: number, destination: number): void => {
    const sourceItem = todos[source];
    const targetFiltedTodos = todos.filter((todo, index) => index !== source);
    const prevTodos = targetFiltedTodos.slice(0, destination);
    const afterTodos = targetFiltedTodos.slice(destination);

    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;

    setTodos([...prevTodos, sourceItem, ...afterTodos]);
  };

  return (
    <ListWrap>
      <StyledUl>
        {todos.map((todo, idx) => (
          <TodoItem
            key={todo.id}
            onDragStart={() => onDragStart(idx)}
            onDragEnd={onDragEnd}
            onDragOver={() => onDragOver(idx)}
            isDragging={idx === draggingItem.current}
          >
            {todo.taskName}
          </TodoItem>
        ))}
      </StyledUl>
    </ListWrap>
  );
};

const StyledUl = styled.ul`
  height: 200vh;
`;

const ListWrap = styled.div`
  flex: 1;
  padding: 0px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export default TodoList;
