import { Todo } from "../types";

export const TodoComponent: React.FC<Todo> = ({
  id,
  todo,
  completed,
  userId,
}) => {
  console.log(completed);
  return (
    <div style={{ margin: "20px 0px" }}>
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
};
