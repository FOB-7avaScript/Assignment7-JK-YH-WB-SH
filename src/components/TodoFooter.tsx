import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {}

const TodoFooter: FC<Props> = (props) => {
  return (
    <FooterWrap>
      <DisplayLeft className="tasks-left">items left</DisplayLeft>
    </FooterWrap>
  );
};

const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
`;

const DisplayLeft = styled.div`
  color: #33bb77;
  font-size: 18px;
`;

export default TodoFooter;
