import { useState } from "react";
import "../App.css";
import { useContext, useEffect } from "react";
import TaskContext from "../context/task.jsx";
function TaskCreate({ task, taskformUpdate, onUpdate }) {
  const { deleteTaskById, editTaskById, createTask } = useContext(TaskContext);
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskdes, setTaskdes] = useState(task ? task.taskdes : "");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTaskChange = (e) => {
    setTaskdes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskformUpdate) {
      onUpdate(task.id, title, taskdes);
      //editTaskById(task.id, title, taskdes);
    } else {
      if (!title.trim()) {
        alert("Başlık boş olamaz!");
        return;
      }
      createTask(title, taskdes);
      //onCreate(title, taskdes);
    }
    setTitle("");
    setTaskdes("");
  };

  return (
    <div>
      {taskformUpdate ? (
        <div className="task-update">
          <h3>Lütfen Görevi Düzenleyiniz</h3>
          <form className="task-from">
            <label className="task-label">Başlık Düzenleyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Görevi Düzenleyiniz</label>
            <textarea
              value={taskdes}
              onChange={handleTaskChange}
              className="task-input"
            ></textarea>
            <button
              className="task-button update-button"
              onClick={handleSubmit}
            >
              DÜZENLEYİN
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Görev Ekleyiniz</h3>
          <form className="task-from">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Görev Giriniz</label>
            <textarea
              value={taskdes}
              onChange={handleTaskChange}
              className="task-input"
            ></textarea>
            <button className="task-button" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
