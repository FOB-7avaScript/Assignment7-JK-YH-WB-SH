import { Itodo } from 'components/types';

export const loadLocalStorage = (storageKey: string) => {
  const localStorageData = JSON.parse(localStorage.getItem(storageKey)!) || [];
  return localStorageData;
};

export const saveLocalStorage = (storageKey: string, storageValue: Itodo[]) => {
  const formattedSaveData = JSON.stringify(storageValue);
  const saveToDoData = localStorage.setItem(storageKey, formattedSaveData);
  return saveToDoData;
};
