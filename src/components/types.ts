export enum Status {
  NOT_STARTED = 0,
  ONGOING = 1,
  FINISHED = 2,
}

export interface Itodo {
  id: number;
  taskName: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
  isImportant: boolean;
}
