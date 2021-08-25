export enum Status {
  NOT_STARTED = '예정',
  ONGOING = '진행중',
  FINISHED = '완료',
}

export interface Itodo {
  id: number;
  taskName: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
  isImportant: boolean;
}
