import React, { useEffect, useState } from "react";

const TodoTask = () => {
  const [todo, setdoTask] = useState([]);

  useEffect(() => {
    fetchTodoTaks();
  }, []);

  const fetchTodoTaks = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((TodoTaskData) => {
        const sortedData = TodoTaskData.sort((a, b) => a.userId - b.userId);
        setdoTask(sortedData);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <h1> Todays TodoTask</h1>
        <ul>
          {todo.map((taks) => (
            <li key={taks.id}>
              <strong>{taks.userId}</strong>
              <br />
              <strong>{taks.title}</strong> <br />
              <strong>Status : {taks.Completed ? "Yes" : "NO"}</strong>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoTask;
