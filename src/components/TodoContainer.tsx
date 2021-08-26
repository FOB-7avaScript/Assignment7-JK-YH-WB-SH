import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import { useTodo } from 'hooks/useTodo';

interface Props {}

const TodoContainer: FC<Props> = () => {
  const {
    todoState,
    sortedState,
    setSortedState,
    chekedCategory,
    setChekedCategory,
    nextIdState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo,
    changeTodo,
    filterTodo,
  } = useTodo();

  return (
    <TodoWrap>
      <TodoHeader
        nextId={nextIdState}
        createTodo={createTodo}
        incrementNextId={incrementNextId}
        todoState={todoState}
        sortedState={sortedState}
        setSortedState={setSortedState}
        chekedCategory={chekedCategory}
        setChekedCategory={setChekedCategory}
        filterTodo={filterTodo}
      />
      <TodoList todos={sortedState} toggleTodo={toggleTodo} changeTodo={changeTodo} removeTodo={removeTodo} />
      <TodoFooter todos={sortedState} />
    </TodoWrap>
  );
};

const TodoWrap = styled.div`
  width: 70%;
  height: 800px;

  min-width: 360px;
  max-width: 700px;

  position: relative;
  background: white;
  border-radius: 30px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);
  margin: 0px auto;
  display: flex;
  flex-direction: column;
`;

export default TodoContainer;
