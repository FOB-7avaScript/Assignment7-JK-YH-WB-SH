export enum Status {
  ToDo = 0,
  Doing = 1,
  Done = 2,
}

export interface Itodo {
  id: number;
  taskName: string;
  status: Status;
  dueDate: string | undefined;
  createdAt: string | undefined;
  updatedAt: string | undefined;
  isImportant: boolean;
}
