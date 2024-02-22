export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

export interface TodosResponse {
  limit: number;
  skip: number;
  todos: Todo[];
  total: number;
}

export type Filter = {
  limit: number;
  skip: number;
};
