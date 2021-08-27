import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { saveLocalStorage, loadLocalStorage } from 'utils/storage';
import { Itodo } from 'components/types';

let initialTodos: Itodo[] = [];
let initialTemp: Itodo[] = [];

export const useTodo = () => {
  const [todoState, setTodoState] = useState<Itodo[]>(initialTodos);
  const [tempTodo, setTempTodo] = useState<Itodo[]>(loadLocalStorage('tempTodos'));
  const [nextIdState, setNextIdState] = useState<number>(0);
  const [chekedCategory, setChekedCategory] = useState<string | null>('All');

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [todoState, tempTodo]);

  const incrementNextId = () => {
    setNextIdState(nextIdState + 1);
  };

  const changeTodo = (id: number) => {
    const newTodos = todoState.map((todo) =>
      todo.id === id
        ? todo.status === 2
          ? { ...todo, status: 0, updatedAt: moment().format('YYYY-MM-DD') }
          : { ...todo, status: todo.status + 1, updatedAt: moment().format('YYYY-MM-DD') }
        : todo,
    );
    setTodoState(newTodos);
    setTempTodo(newTodos);
  };

  const toggleTodo = (id: number) => {
    const newTodos = todoState.map((todo) => (todo.id === id ? { ...todo, isImportant: !todo.isImportant, updatedAt: moment().format('YYYY-MM-DD') } : todo));
    setTodoState(newTodos);
    setTempTodo(newTodos);
  };

  const removeTodo = (id: number) => {
    const newTodos = todoState.filter((todo: Itodo) => todo.id !== id).map((todo: Itodo, index: number) => ({ ...todo, id: index }));
    setTodoState(newTodos);
    setTempTodo(newTodos);
    setNextIdState(nextIdState - 1);
  };

  const createTodo = (todo: Itodo) => {
    const nextId = tempTodo.length;
    const newTodos = todoState.concat({ ...todo, id: nextId });
    const newTempTodos = tempTodo.concat({ ...todo, id: nextId });
    if (chekedCategory === 'All') {
      setTodoState(newTodos);
    }
    setTempTodo(newTempTodos);
  };

  const loadData = () => {
    initialTodos = loadLocalStorage('todos');
    initialTemp = loadLocalStorage('tempTodos');

    if (initialTodos.length === 0) {
      return setTodoState(tempTodo);
    }
    if (initialTodos && initialTodos.length >= 1) {
      setNextIdState(initialTodos.length);
      return setTodoState(tempTodo);
    }
    setTodoState(initialTodos);
  };

  const saveData = () => {
    const sortedTodo = todoState.map((todo: Itodo, index: number) => ({ ...todo, id: index }));
    saveLocalStorage('todos', sortedTodo);
    saveLocalStorage('tempTodos', tempTodo);
  };

  return {
    todoState,
    setTodoState,
    chekedCategory,
    setChekedCategory,
    nextIdState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo,
    changeTodo,
    tempTodo,
  };
};
