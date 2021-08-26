import React, { FC, useState } from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';

// temp mock data
interface Todo {
  id: number;
  taskName: string;
}

const TODOS_MOCK: Todo[] = [
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
  const [todos, setTodos] = useState<Todo[]>(TODOS_MOCK);
  const [target, setTarget] = useState<number | null>(null);

  const onDragStart = (event: React.DragEvent) => {
    const target = event.target as HTMLElement;
    const id = target.dataset.id;

    setTarget(Number(id));
  };

  const onDragEnd = () => {
    setTarget(null);
  };

  const getDestinationIndex = (event: React.DragEvent, y: number): number => {
    const target = event.target as HTMLElement;

    // 아이템 없는 쪽에 드래그 오버 할 때
    if (target.tagName === 'UL') {
      // 맨 아래
      return todos.length - 1;
    }

    const listTop = event.currentTarget.getBoundingClientRect().top;
    const itemHeight = target.getBoundingClientRect().height;

    return Math.floor((y - listTop) / itemHeight);
  };

  const changeItemOrder = (item: Todo, destination: number): void => {
    const targetFiltedTodos = todos.filter((todo) => todo.id !== target);

    const prevTodos = targetFiltedTodos.slice(0, destination);
    const afterTodos = targetFiltedTodos.slice(destination);

    setTodos([...prevTodos, item, ...afterTodos]);
  };

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();

    const targetIdx: number = todos.findIndex((todo) => todo.id === target);
    const targetItem = todos[targetIdx];
    const destinationIdx = getDestinationIndex(event, event.clientY);

    changeItemOrder(targetItem, destinationIdx);
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
