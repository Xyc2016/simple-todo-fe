
export interface ITodo {
  id: number;
  title: string;
  content: string;
  done: boolean;
}

export interface IFullResponse<T>  {
  code: number;
  msg: string;
  data: T;
}
