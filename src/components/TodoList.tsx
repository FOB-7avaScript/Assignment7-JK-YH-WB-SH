import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {}

const TodoList: FC<Props> = (props) => {
  return (
    <ListWrap>
      <StyledUl>
        <TodoItem>
          <FlexContainer>
            <FlexBox>
              <input type="checkbox" />
            </FlexBox>
            <FlexBox>
              <div>
                <label>something</label>
              </div>
              <div>time</div>
            </FlexBox>
            <FlexBox>badge</FlexBox>
          </FlexContainer>
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
          <FlexContainer>
            <FlexBox>
              <input type="checkbox" />
            </FlexBox>
            <FlexBox>
              <div>
                <label>something</label>
              </div>
              <div>time</div>
            </FlexBox>
            <FlexBox>badge</FlexBox>
          </FlexContainer>
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
  padding: 4px;
  text-align: center;
`;

export default TodoList;
