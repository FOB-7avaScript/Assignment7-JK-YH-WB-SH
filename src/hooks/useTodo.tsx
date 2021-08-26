import React, { useState, useEffect } from 'react';

import { Itodo } from 'components/types';

let initialTodos: Itodo[] = [];
let initialTemp: Itodo[] = [];

export const useTodo = () => {
  const [todoState, setTodoState] = useState(initialTodos);
  const [sortedState, setSortedState] = useState<Itodo[]>(initialTodos);
  const [temp, setTemp] = useState(JSON.parse(localStorage.getItem('temp')!) || []);
  const [nextIdState, setNextIdState] = useState(0);
  const [chekedCategory, setChekedCategory] = useState<string | null>('');

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [todoState]);

  const incrementNextId = () => {
    setNextIdState(nextIdState + 1);
  };

  const changeTodo = (id: number) => {
    const newTodo = todoState.map((todo) => (todo.id === id ? (todo.status === 2 ? { ...todo, status: 0 } : { ...todo, status: todo.status + 1 }) : todo));
    setTodoState(newTodo);
    setTemp(newTodo);
  };

  const toggleTodo = (id: number) => {
    const newTodo = todoState.map((todo) => (todo.id === id ? { ...todo, isImportant: !todo.isImportant } : todo));
    setTodoState(newTodo);
    setTemp(newTodo);
  };

  const removeTodo = (id: number) => {
    const newTodo = todoState.filter((todo: Itodo) => todo.id !== id).map((todo: Itodo, index: number) => ({ ...todo, id: index }));
    setTodoState(newTodo);
    setTemp(newTodo);
    setNextIdState(nextIdState - 1);
  };

  const createTodo = (todo: Itodo) => {
    const newTodo = todoState.map((todo: Itodo, index: number) => ({ ...todo, id: index }));
    setTodoState(newTodo);
    const nextId = todoState.length;
    setTodoState((prevState) =>
      prevState.concat({
        ...todo,
        id: nextId,
      }),
    );
    setTemp(newTodo.concat({ ...todo, id: nextId }));
  };

  const loadData = () => {
    let data: any = localStorage.getItem('todos');
    let _temp: any = localStorage.getItem('temp');
    if (_temp === null || _temp === undefined || data === undefined || data === null) {
      data = JSON.stringify([]);
      _temp = JSON.stringify([]);
    }
    initialTodos = JSON.parse(data);
    initialTemp = JSON.parse(_temp);

    if (initialTodos.length === 0) {
      return setTodoState(temp);
    }
    if (initialTodos && initialTodos.length >= 1) {
      setNextIdState(initialTodos.length);
      initialTodos = initialTodos.map((todo: Itodo, index: number) => ({ ...todo, id: index }));
      return setTodoState(temp);
    }
    setTodoState(initialTodos);
  };

  const saveData = () => {
    const newTodo = todoState.map((todo: Itodo, index: number) => ({ ...todo, id: index }));
    localStorage.setItem('todos', JSON.stringify(newTodo));
    localStorage.setItem('temp', JSON.stringify(temp));
  };

  return {
    todoState,
    nextIdState,
    incrementNextId,
    changeTodo,
    toggleTodo,
    removeTodo,
    createTodo,
    sortedState,
    setSortedState,
    setTodoState,
    chekedCategory,
    setChekedCategory,
  };
};
