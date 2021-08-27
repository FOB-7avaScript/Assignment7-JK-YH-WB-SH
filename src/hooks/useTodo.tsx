import React, { useState, useEffect } from 'react';
import { saveLocalStorage, loadLocalStorage } from 'utils/storage';
import { Itodo } from 'components/types';

let initialTodos: Itodo[] = [];
let initialTemp: Itodo[] = [];

export const useTodo = () => {
  const [todoState, setTodoState] = useState<Itodo[]>(initialTodos);
  const [tempTodo, setTempTodo] = useState<Itodo[] | []>(loadLocalStorage('tempTodos'));
  const [nextIdState, setNextIdState] = useState<number>(0);
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
    setTempTodo(newTodo);
  };

  const toggleTodo = (id: number) => {
    const newTodo = todoState.map((todo) => (todo.id === id ? { ...todo, isImportant: !todo.isImportant } : todo));
    setTodoState(newTodo);
    setTempTodo(newTodo);
  };

  const removeTodo = (id: number) => {
    const newTodo = todoState.filter((todo: Itodo) => todo.id !== id).map((todo: Itodo, index: number) => ({ ...todo, id: index }));
    setTodoState(newTodo);
    setTempTodo(newTodo);
    setNextIdState(nextIdState - 1);
  };

  const createTodo = (todo: Itodo) => {
    const nextId = todoState.length;
    const newTodo = todoState.concat({ ...todo, id: nextId });
    setTodoState(newTodo);
    setTempTodo(newTodo);
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
  };
};
