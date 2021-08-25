import React, { FC, useState } from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';

// temp data
const TODOS_MOCK: any[] = [
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
  const [todos, setTodos] = useState(TODOS_MOCK);
  const [target, setTarget] = useState<number | null>(null);

  const onDragStart = (event: React.DragEvent) => {
    const target = event.target as HTMLElement;
    const id = target.dataset.id;

    setTarget(Number(id));
  };

  const onDragEnd = () => {
    setTarget(null);
  };

  const getDestinationIndex = (y: number): number => {
    // destination login 수정 필요
    return Math.floor((y - 300) / 60);
  };

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();

    const targetIndex: number = todos.findIndex((todo) => todo.id === target);
    const changedTodos = Array.from(todos);
    const [targetItem] = changedTodos.splice(targetIndex, 1);
    const destIndex = getDestinationIndex(event.clientY);

    setTodos([...changedTodos.slice(0, destIndex), targetItem, ...changedTodos.slice(destIndex)]);
  };

  return (
    <ListWrap>
      <StyledUl onDragOver={onDragOver}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} data-id={todo.id} onDragStart={onDragStart} onDragEnd={onDragEnd} isTarget={target === todo.id}>
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
