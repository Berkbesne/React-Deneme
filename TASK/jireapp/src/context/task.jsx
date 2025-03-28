import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const TaskContext = createContext();
function Provider({ children }) {
  const [tasks, setTask] = useState([]);
  const createTask = async (title, taskdes) => {
    const response = await axios.post("http://localhost:3001/tasks", {
      title: title,
      taskdes: taskdes,
    });
    console.log(response);
    const createdTask = [...tasks, response.data];
    setTask(createdTask);
  };
  const fetchTask = async () => {
    const response = await axios.get("http://localhost:3001/tasks");
    setTask(response.data);
  };
  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);

    console.log(id + "  silindi");
    const afterDeletingTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTask(afterDeletingTask);
  };
  const editTaskById = async (id, updatedTitle, updatedtaskdes) => {
    const response = await axios.put(`http://localhost:3001/tasks/${id}`, {
      title: updatedTitle,
      taskdes: updatedtaskdes,
    });
    console.log(id);
    const UpdatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskdes: updatedtaskdes };
      }
      return task;
    });
    setTask(UpdatedTasks);
  };
  const SharedValuesAndMethods = {
    tasks,
    createTask,
    fetchTask,
    editTaskById,
    deleteTaskById,
  };
  return (
    <TaskContext.Provider value={SharedValuesAndMethods}>
      {children}
    </TaskContext.Provider>
  );
}
export { Provider };
export default TaskContext;
