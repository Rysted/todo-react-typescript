import { Todo } from "../types";

interface Props {
  todos: Todo[];
}

export const TodoComponent = ({ todos }: Props) => {
  return todos.map((td) => {
    const { id, todo, completed, userId } = td;

    return (
      <div style={{ margin: "20px 0px" }} key={id}>
        <h2 style={{ fontSize: "16px", margin: "0px" }}>title: {todo}</h2>
        <div style={{ display: "flex", gap: "20px", margin: "0px" }}>
          <p style={{ margin: "0px" }}>Todo id: {id}</p>
          <p style={{ margin: "0px" }}>
            Status: {completed ? "Completed" : "Incompleted"}
          </p>
          <p style={{ margin: "0px" }}>Owner id: {userId}</p>
        </div>
      </div>
    );
  });
};
