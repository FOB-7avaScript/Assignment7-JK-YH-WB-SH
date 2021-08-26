import React, { useState, useEffect } from 'react';
import { Itodo, Status } from 'components/types';

let initialTodos: Itodo[] = [];

export const useTodo = () => {
  const [todoState, setTodoState] = useState<Itodo[]>(initialTodos);
  const [sortedState, setSortedState] = useState<Itodo[]>(initialTodos);
  const [temp, setTemp] = useState<Itodo[]>(initialTodos);
  const [nextIdState, setNextIdState] = useState(0);
  const [chekedCategory, setChekedCategory] = useState<string | null>('all');
  console.log('temp', temp);
  console.log('sortedState', sortedState);
  console.log('todoState', todoState);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
    filterTodo(chekedCategory);
  }, [todoState, chekedCategory]);

  const incrementNextId = () => {
    setNextIdState((prev) => prev + 1);
  };

  const changeTodo = (id: number) => {
    setTodoState((prevState) =>
      prevState.map((todo) => (todo.id === id ? (todo.status === 2 ? { ...todo, status: 0 } : { ...todo, status: todo.status + 1 }) : todo)),
    );
    setSortedState((prevState) =>
      prevState.map((todo) => (todo.id === id ? (todo.status === 2 ? { ...todo, status: 0 } : { ...todo, status: todo.status + 1 }) : todo)),
    );
  };

  const toggleTodo = (id: number) => {
    setTodoState((prevState) => prevState.map((todo) => (todo.id === id ? { ...todo, isImportant: !todo.isImportant } : todo)));
    setSortedState((prevState) => prevState.map((todo) => (todo.id === id ? { ...todo, isImportant: !todo.isImportant } : todo)));
  };

  const removeTodo = (id: number) => {
    setTodoState((prevState) => prevState.filter((todo: Itodo) => todo.id !== id).map((todo: Itodo, index: number) => ({ ...todo, id: index })));
    setSortedState((prevState) => prevState.filter((todo: Itodo) => todo.id !== id).map((todo: Itodo, index: number) => ({ ...todo, id: index })));
    setNextIdState(nextIdState - 1);
  };

  const createTodo = (todo: Itodo) => {
    const nextId = todoState.length;
    setTodoState((prevState) =>
      prevState.concat({
        ...todo,
        id: nextId,
      }),
    );
    setSortedState((prevState) =>
      prevState.concat({
        ...todo,
        id: nextId,
      }),
    );
  };

  const loadData = () => {
    let todos: any = localStorage.getItem('todos');
    // let temp: any = localStorage.getItem('temp');
    if (todos === undefined && todos === null) {
      todos = JSON.stringify([]);
      // temp = JSON.stringify([]);
    }
    todos = JSON.parse(todos);
    // temp = JSON.parse(temp);
    if (initialTodos && initialTodos.length >= 1) {
      setNextIdState(initialTodos.length);
      initialTodos = initialTodos.map((todo: Itodo, index: number) => ({ ...todo, id: index }));
    }
    setTodoState(initialTodos);
    setSortedState(initialTodos);
    // setTemp(initialTodos);
  };

  const saveData = () => {
    localStorage.setItem('todos', JSON.stringify(sortedState));
    // localStorage.setItem('temp', JSON.stringify(temp));
  };

  const filterTodo = (category: string | null) => {
    switch (category) {
      case 'all':
        setSortedState(todoState);
        break;
      case 'ToDo':
        setSortedState(todoState.filter((todo: Itodo) => todo.status === Status.ToDo));
        // setTemp(todoState.filter((todo: Itodo) => todo.status !== Status.ToDo));
        break;
      case 'Doing':
        setSortedState(todoState.filter((todo: Itodo) => todo.status === Status.Doing));
        // setTemp(todoState.filter((todo: Itodo) => todo.status !== Status.Doing));
        break;
      case 'Done':
        setSortedState(todoState.filter((todo: Itodo) => todo.status === Status.Done));
        // setTemp(todoState.filter((todo: Itodo) => todo.status !== Status.Done));
        break;
      default:
        break;
    }
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
    filterTodo,
  };
};
