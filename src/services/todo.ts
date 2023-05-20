import request from '../libs/request';
import { ITodo } from '../types';

export class TodoService {
  static getTodos = async (page_no: number, page_size: number)=> {
    return request.get<ITodo>('/todos', {
      params: {
        page_no,
        page_size,
      },
    });
  }
}
