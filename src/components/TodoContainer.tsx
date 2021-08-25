import React, { FC } from 'react';
import styled from 'styled-components';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import useTodo from 'hooks/useTodo';

interface Props {}

const TodoContainer: FC<Props> = () => {
  const { todoState, sortedState, setSortedState, chekedCategory, setChekedCategory } = useTodo();

  return (
    <TodoWrap>
      <TodoHeader {...{ todoState, sortedState, setSortedState, chekedCategory, setChekedCategory }} />
      <TodoList />
      <TodoFooter />
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
  margin: 96px auto 32px;
  display: flex;
  flex-direction: column;
`;

export default TodoContainer;
