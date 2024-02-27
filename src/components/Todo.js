import { useEffect, useState } from "react";

const TodoTask = () => {
  const [toDo, setToDo] = useState([]);

  useEffect(() => {
    fetchTodoTask();
  }, []);

  const fetchTodoTask = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((TodoTaskData) => {
        const sortedData = TodoTaskData.sort((a, b) => a.userId - b.userId);
        setToDo(sortedData);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <h1> Todays TodoTask</h1>
        <ul>
          {toDo.map((task) => (
            <li key={task.id}>
              <strong>{task.userId}</strong>
              <br />
              <strong>{task.title}</strong> <br />
              <strong>Status : {task.Completed ? "Yes" : "NO"}</strong>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoTask;
