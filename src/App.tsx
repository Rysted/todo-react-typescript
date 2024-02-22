import { useEffect, useState } from "react";
import { TodoComponent } from "./components/Todo";
import { Todo } from "./types";

export interface AppState {
  filter: {
    limit: number;
    skip: number;
  };
  data: {
    limit: number;
    skip: number;
    todos: Todo[];
    total: number;
  };
}

export const App = () => {
  const [data, setData] = useState<AppState["data"] | null>(null);

  useEffect(() => {
    const limit = 5;
    const skip = 0;

    const getData = async () => {
      const response = await fetch(
        `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`
      );
      const data: AppState["data"] = await response.json();
      setData(data);
    };

    getData();
  }, []);

  const handleNext = () => {
    if (data) {
      const { limit, skip, total } = data;
      if (skip + limit < total) {

        const newSkip = skip + limit;
        fetchData(newSkip);
      }
    }
  };

  const handlePrev = () => {
    if (data) {
      const { limit, skip } = data;
      if (skip - limit >= 0) {
        const newSkip = skip - limit;
        fetchData(newSkip);
      }
    }
  };

  const fetchData = async (skip: number) => {
    const limit = 5;
    const response = await fetch(
      `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`
    );
    const newData: AppState["data"] = await response.json();
    setData(newData);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h1>Todo List</h1>
        {data ? <TodoComponent todos={data.todos} /> : <div>No more todos</div>}
      </div>

      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default App;
