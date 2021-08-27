import { Itodo } from 'components/types';

export const loadLocalStorage = (storageKey: string) => {
  const loadedTodoData = localStorage.getItem(storageKey);
  const parsedTodoData = JSON.parse(loadedTodoData!);
  return parsedTodoData;
};

export const saveLocalStorage = (storageKey: string, storageValue: Itodo[]) => {
  const formattedSaveData = JSON.stringify(storageValue);
  const saveToDoData = localStorage.setItem(storageKey, formattedSaveData);
  return saveToDoData;
};
