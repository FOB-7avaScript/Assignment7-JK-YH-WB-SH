import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import { useTodo } from 'hooks/useTodo';

const TodoContainer = () => {
  const { todoState, setTodoState, chekedCategory, setChekedCategory, nextIdState, incrementNextId, toggleTodo, removeTodo, createTodo, changeTodo, tempTodo } =
    useTodo();

  return (
    <TodoWrap>
      <TodoHeader
        nextId={nextIdState}
        createTodo={createTodo}
        incrementNextId={incrementNextId}
        todoState={todoState}
        setTodoState={setTodoState}
        chekedCategory={chekedCategory}
        setChekedCategory={setChekedCategory}
        tempTodo={tempTodo}
      />
      <TodoList todos={todoState} toggleTodo={toggleTodo} changeTodo={changeTodo} removeTodo={removeTodo} setTodoState={setTodoState} />
      <TodoFooter todos={todoState} />
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
