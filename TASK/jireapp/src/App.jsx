import logo from "./logo.svg";
import "./App.css";
import TaskCreate from "./components/TaskCreate.jsx";
import TaskList from "./components/TaskList.jsx"; //
import { useState } from "react";
function App() {
  const [tasks, setTask] = useState([]);
  const createTask = (title, taskdes) => {
    const createdTask = [
      ...tasks,
      {
        id: Math.round(Math.random() * 9999),
        title,
        taskdes,
      },
    ];
    setTask(createdTask);
  };
  const deleteTaskById = (id) => {
    console.log(id);
    const afterDeletingTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTask(afterDeletingTask);
  };
  const editTaskById = (id, updatedTitle, updatedtaskdes) => {
    console.log(id);
    const UpdatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskdes: updatedtaskdes };
      }
      return task;
    });
    setTask(UpdatedTasks);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        key={tasks.id}
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
