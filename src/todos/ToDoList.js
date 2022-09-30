import React  from "react";
import ToDoListItem from './ToDoListItem.js';
import NewTodoForm from './NewTodoForm.js';
import './ToDoList.css';
import {connect} from 'react-redux';
import {removeToDo, markAsComplete} from './actions.js';

const ToDoList = ({todos, onRemoveToDo, onMarkAsComplete}) => (
<div className="list-wrapper">
    <NewTodoForm/>
    {todos.map( todo => <ToDoListItem key={todo.text} todo={todo} onRemoveToDo={onRemoveToDo} onMarkAsComplete={onMarkAsComplete}/>)}
</div>
);

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onRemoveToDo: text => {
            dispatch(removeToDo(text))
        },
        onMarkAsComplete: text => {
            dispatch(markAsComplete(text))
        },  
});

export default connect(mapStateToProps, mapDispatchToProps) (ToDoList); 