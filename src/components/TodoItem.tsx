import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  onDragStart: (event: React.DragEvent) => void;
  onDragEnd: () => void;
  isTarget: boolean;
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

const ItemBlock = styled.li<{ isTarget: boolean }>`
  display: flex;
  padding: 20px 15px;
  justify-content: space-between;

  ${({ isTarget }) =>
    isTarget &&
    `
    opacity: .65;
    background: #ededed;
  `}

  & + & {
    border-top: 1px solid #eeeeee;
  }
`;
