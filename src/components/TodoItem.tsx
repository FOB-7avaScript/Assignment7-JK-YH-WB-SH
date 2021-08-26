import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  onDragStart: () => void;
  onDragEnd: () => void;
  onDragOver: () => void;
  isDragging: boolean;
}

const TodoItem: FC<Props> = ({ children, ...props }) => {
  return (
    <ItemBlock {...props} draggable="true">
      <div>
        <input type="checkbox" />
        <label>{children}</label>
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
    </ItemBlock>
  );
};

export default TodoItem;

const ItemBlock = styled.li<{ isDragging: boolean }>`
  display: flex;
  padding: 20px 15px;
  justify-content: space-between;

  ${({ isDragging }) =>
    isDragging &&
    `
    background: #ededed;
  `}

  & + & {
    border-top: 1px solid #eeeeee;
  }
`;
