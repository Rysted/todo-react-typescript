import { useEffect, useState } from "react";
import { TodoComponent } from "./components/Todo";
import { Filter, TodosResponse, Todo } from "./types";

export const App: React.FC = () => {
  const [filter, setFilter] = useState<Filter>({ limit: 5, skip: 0 });
  const [data, setData] = useState<TodosResponse | null>(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://dummyjson.com/todos?limit=${filter.limit}&skip=${filter.skip}`
      );
      const data: TodosResponse = await response.json();

      setData(data);
    };

    getData();
  }, [filter]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleNext = () => {
    setFilter((prev) => {
      if (prev.skip + 5 >= data.total) {
        alert("No more todos");
        return prev;
      }

      return {
        ...prev,
        skip: prev.skip + 5,
      };
    });
  };

  const handlePrev = () => {
    setFilter((prev) => {
      if (prev.skip <= 0) {
        alert("No more todos");
        return prev;
      }

      return { ...prev, skip: prev.skip - 5 };
    });
  };

  return (
    <>
      <div>
        <h1>Todo List</h1>
        {data ? (
          data?.todos?.map((todo: Todo) => (
            <TodoComponent
              key={todo.id}
              id={todo.id}
              todo={todo.todo}
              completed={todo.completed}
              userId={todo.userId}
            />
          ))
        ) : (
          <div>No more todos</div>
        )}
      </div>

      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default App;
