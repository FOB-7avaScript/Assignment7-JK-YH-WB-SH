export enum Status {
  NOT_STARTED,
  ONGOING,
  FINISHED,
}

export interface Itodo {
  id: number;
  taskName: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
  isImportant: boolean;
}
