import "./App.css";
import TaskCreate from "./components/TaskCreate.jsx";
import TaskList from "./components/TaskList.jsx"; //
import { useContext, useEffect } from "react";
import TaskContext from "./context/task.jsx";

function App() {
  const { fetchTask } = useContext(TaskContext);
  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div className="App">
      <TaskCreate />
      <h1>Görevler</h1>
      <TaskList />
    </div>
  );
}

export default App;
