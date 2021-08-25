import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { Itodo, Status } from './types';

interface TodoListProps {
  todos: Itodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  changeTodo: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({ toggleTodo, removeTodo, todos, changeTodo }) => {
  const handleRemove = (id: number, todo: Itodo) => {
    if (window.confirm('삭제하시겠습니까?')) {
      removeTodo(id);
    } else {
      return null;
    }
  };
  return (
    <ListWrap>
      <StyledUl>
        {todos?.map((todo, idx) => (
          <TodoItem key={idx}>
            <FlexContainer>
              <FlexBox>
                <StatusBtn done={todo.status} onClick={() => changeTodo(todo.id)}>
                  {(todo.status === Status.ToDo && <i className="fas fa-stopwatch" />) ||
                    (todo.status === Status.Doing && <i className="fas fa-play-circle" />) ||
                    (todo.status === Status.Done && <i className="fas fa-stop-circle" />)}
                </StatusBtn>
              </FlexBox>
              <FlexBox>
                <div>
                  <Badge done={todo.status}>{Status[todo.status]}</Badge>
                </div>
                <DateDisplay done={todo.status}>{todo.dueDate}</DateDisplay>
              </FlexBox>
              <FlexBox>
                <MainText done={todo.status}>{todo.taskName}</MainText>
              </FlexBox>
            </FlexContainer>
            <div>
              <button onClick={() => handleRemove(todo.id, todo)}>
                <i className="fas fa-trash-alt" />
              </button>
              <button onClick={() => toggleTodo(todo.id)}>{todo.isImportant ? <i className="fas fa-star" /> : <i className="far fa-star" />}</button>
            </div>
          </TodoItem>
        ))}
      </StyledUl>
    </ListWrap>
  );
};

const TodoItem = styled.li`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;

  & + & {
    border-top: 1px solid #eeeeee;
  }
`;

const StyledUl = styled.ul``;

const ListWrap = styled.div`
  flex: 1;
  padding: 0px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FlexBox = styled.div`
  padding: 4px 10px;
  text-align: center;
`;

const StatusBtn = styled.button<{ done: number }>`
  width: 20px;
  padding: 0px;
  i {
    font-size: 20px;
    color: gray;
    ${(props) =>
      props.done === 2 &&
      css`
        color: #dddddd;
      `}
  }
`;

const Badge = styled.div<{ done: number }>`
  border: 2px solid #119955;
  border-radius: 5px;
  padding: 2px;
  font-size: 8px;
  color: #119955;
  margin: 5px;
  ${(props) =>
    (props.done === 1 &&
      css`
        color: #00009b;
        border: 2px solid #00009b;
      `) ||
    (props.done === 2 &&
      css`
        color: #dddddd;
        border: 2px solid #dddddd;
        text-decoration: line-through;
      `)}
`;

const DateDisplay = styled.div<{ done: number }>`
  font-size: 10px;
  font-weight: 700;
  ${(props) =>
    props.done === 2 &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const MainText = styled.span<{ done: number }>`
  ${(props) =>
    props.done === 2 &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

export default TodoList;
