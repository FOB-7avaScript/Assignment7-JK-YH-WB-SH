import React, { useState, useEffect } from 'react';
import { Itodo } from 'components/types';

const useTodo = () => {
  const [todoState, setTodoState] = useState<Itodo[]>([]);
  const [sortedState, setSortedState] = useState<Itodo[]>([]);
  const [chekedCategory, setChekedCategory] = useState<string | null>('');

  const getTodoData = async (): Promise<void> => {
    try {
      const fetchApiData = await fetch('/data/data.json');
      const todoData = await fetchApiData.json();
      todoData.sort((a: Itodo, b: Itodo) => a.createdAt.localeCompare(b.createdAt));
      setTodoState(todoData);
      setSortedState(todoData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodoData();
  }, []);

  return { todoState, sortedState, setSortedState, setTodoState, getTodoData, chekedCategory, setChekedCategory };
};

export default useTodo;
