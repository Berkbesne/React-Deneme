import { useState } from "react";
import TaskCreate from "./TaskCreate";
import { useContext, useEffect } from "react";
import TaskContext from "../context/task.jsx";
function TaskShow({ task, onUpdate }) {
  const { deleteTaskById, editTaskById } = useContext(TaskContext);
  const [ShowEdit, setShowEdit] = useState(false);
  console.log(task);
  const handleDeleteClick = () => {
    //onDelete(task.id);
    deleteTaskById(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!ShowEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedtaskdes) => {
    setShowEdit(false);
    //onUpdate(id, updatedTitle, updatedtaskdes);
    editTaskById(id, updatedTitle, updatedtaskdes);
  };

  return (
    <div className="task-show">
      {ShowEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3>Görevler</h3>
          <p>{task.title}</p>
          <h3>Yapılacaklar</h3>
          <p>{task.taskdes}</p>

          <div>
            <button className="Silme" onClick={handleDeleteClick}>
              Silme
            </button>
            <button className="Düzenleme" onClick={handleEditClick}>
              Düzenle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
