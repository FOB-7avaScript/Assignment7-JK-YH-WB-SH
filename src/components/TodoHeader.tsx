import moment from 'moment';
import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { Itodo } from './types';

interface Props {
  todoState: Itodo[];
  sortedState: Itodo[];
  chekedCategory: string | null;
  setSortedState: React.Dispatch<React.SetStateAction<Itodo[]>>;
  setChekedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

const TodoHeader: FC<Props> = ({ todoState, sortedState, chekedCategory, setSortedState, setChekedCategory }) => {
  const [dueDate, setDueDate] = useState<moment.Moment | null>(moment());
  const [focused, setFocused] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [notImportantTodo, setNotImportantTodo] = useState<Itodo[]>([]);

  const handleSelectBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    const copyTodo = [...sortedState];

    if (value === 'newest') {
      copyTodo.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
      setSortedState(copyTodo);
    }
    if (value === 'oldest') {
      copyTodo.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
      setSortedState(copyTodo);
    }
  };

  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.currentTarget;
    if (checked) {
      setChecked(true);
      const filteredImportantTodos = sortedState.filter((todo: Itodo) => todo.isImportant);
      const filterednotImportantTodos = sortedState.filter((todo: Itodo) => !todo.isImportant);
      setNotImportantTodo(filterednotImportantTodos);
      setSortedState(filteredImportantTodos);
    } else {
      setChecked(false);
      setSortedState((prev) => prev.concat(notImportantTodo));
    }
  };

  const showRelatedTodo = (category: string | null) => {
    switch (category) {
      case 'all':
        setSortedState(todoState);
        break;
      case 'todo':
        setSortedState(todoState.filter((todo: Itodo) => todo.status === 0));
        break;
      case 'inProgress':
        setSortedState(todoState.filter((todo: Itodo) => todo.status === 1));
        break;
      case 'done':
        setSortedState(todoState.filter((todo: Itodo) => todo.status === 2));
        break;
      default:
    }
  };

  const handleMenuCategory = (e: React.MouseEvent<HTMLLIElement>) => {
    const { textContent } = e.currentTarget;
    if (textContent === chekedCategory) return;
    setChecked(false);
    setChekedCategory(textContent);
    showRelatedTodo(textContent);
  };

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
        {menuCategories.map((category) => (
          <li onClick={handleMenuCategory}>{category}</li>
        ))}
      </TabWrap>
      <ControlBox>
        <div>
          <input type="checkbox" id="important" checked={checked} onChange={handleCheckBox} />
          <label htmlFor="important">중요 항목만 보기</label>
        </div>
        <div>
          <select onChange={handleSelectBox}>
            <option value="newest">최신순</option>
            <option value="oldest">오래된순</option>
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

const menuCategories = ['all', 'todo', 'inProgress', 'done'];

export default TodoHeader;
