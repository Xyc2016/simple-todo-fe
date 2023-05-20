import request from '../libs/request';
import { ITodo, IFullResponse } from '../types';

export default class TodoService {
  static getTodos = async (page_no: number, page_size: number) => {
    return request.get<IFullResponse<
      {
        todos: ITodo[],
        total: number,
      }
    >>('/todos', {
      params: {
        page_no,
        page_size,
      },
    });
  }
}
