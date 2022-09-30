import React  from "react";
import  "./ToDoListItem.css";

const ToDoListItem = ({todo,onRemoveToDo, onMarkAsComplete}) => (
    <div className="todo-item-container">
        <h3 >
            {todo.text}
        </h3>
        <div className="buttons-container">
        <button className="complete-button"
        disabled={todo.isCompleted}
        onClick={() => onMarkAsComplete(todo.text)}
        >
            Mark as Complete
        </button>
        <button className="remove-button"
        onClick={() => onRemoveToDo(todo.text)}
        >
            Remove
        </button>
        </div>
    </div>
);
export default ToDoListItem;