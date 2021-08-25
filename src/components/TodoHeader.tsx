import moment from 'moment';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { Status } from './types';

interface Props {}

const TodoHeader: FC<Props> = (props) => {
  const [dueDate, setDueDate] = useState<moment.Moment | null>(moment());
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <HeaderWrap>
      <HeaderForm>
        <Input type="text"></Input>
        <StyledSingleDatePicker
          date={dueDate} // momentPropTypes.momentObj or null
          onDateChange={(date) => setDueDate(date)} // PropTypes.func.isRequired
          focused={focused} // PropTypes.bool
          onFocusChange={({ focused }) => setFocused(focused)} // PropTypes.func.isRequired
          id="your_unique_id" // PropTypes.string.isRequired,
        />
        <CircleButton>
          <i className="fas fa-plus-circle"></i>
        </CircleButton>
      </HeaderForm>
      <TabWrap>
        <li>전체</li>
        {Object.values(Status).map((el) => (
          <li>{el}</li>
        ))}
      </TabWrap>
      <ControlBox>
        <div>
          <input type="checkbox" id="important" />
          <label htmlFor="important">중요 항목만 보기</label>
        </div>
        <div>
          <select>
            <option>최신순</option>
            <option>오래된순</option>
          </select>
        </div>
      </ControlBox>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
`;

const HeaderForm = styled.form`
  display: flex;
  padding: 40px 40px 40px 30px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #dddddd;
  width: 70%;
  outline: none;
  font-size: 14px;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 12px;
  }
`;

const CircleButton = styled.button`
  background: #ffffff;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  left: 50%;
  transform: translate(50%, 0%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  .fa-plus-circle {
    color: #33bb77;
  }
`;

const StyledSingleDatePicker = styled(SingleDatePicker)`
  .DateInput {
    height: 50px;
    background: inherit;
  }
`;

const TabWrap = styled.ul`
  display: flex;
  justify-content: space-around;
  li {
    flex: 1;
    padding: 15px;
    background-color: #33bb77;
    text-align: center;
    cursor: pointer;
    color: #ffffff;
  }
`;

const ControlBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

export default TodoHeader;
