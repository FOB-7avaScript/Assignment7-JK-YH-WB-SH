import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {}

const TodoList: FC<Props> = (props) => {
  return (
    <ListWrap>
      <StyledUl>
        <TodoItem>
          <div>
            <input type="checkbox" />
            <label>something</label>
          </div>
          <div>
            <button>
              <i className="fas fa-trash-alt" />
            </button>
            <button>
              <i className="fas fa-star" />
              <i className="far fa-star" />
            </button>
          </div>
        </TodoItem>
        <TodoItem>
          <div>
            <input type="checkbox" />
            <label>something</label>
          </div>
          <div>
            <button>
              <i className="fas fa-trash-alt" />
            </button>
            <button>
              <i className="fas fa-star" />
              <i className="far fa-star" />
            </button>
          </div>
        </TodoItem>
      </StyledUl>
    </ListWrap>
  );
};

const TodoItem = styled.li`
  display: flex;
  padding: 20px 15px;
  justify-content: space-between;

  & + & {
    border-top: 1px solid #eeeeee;
  }
`;

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
