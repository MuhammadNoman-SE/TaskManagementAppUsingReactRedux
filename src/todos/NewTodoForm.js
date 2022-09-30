import React, {useState} from "react";
import  './NewTodoForm.css';
import {addToDo} from './actions';
import {connect} from 'react-redux';

const NewTodoForm =({todos, onAddToDo})=>{
    const [inputValue, setInputValue] = useState('');
    return (
    <div className="new-todo-form">
        <input type="text" 
        name="newToDotext" 
        className="new-todo-input"
        placeholder="New To Do"
        onChange={e => setInputValue(e.target.value)} 
        value={inputValue}/>
        <button className="new-todo-button" onClick={() => {
            var isDuplicate = todos.some(todo => todo.text === inputValue);
            if(!isDuplicate)
            {    
                onAddToDo(inputValue);            
                setInputValue('');
            }
        }}>Create To Do</button>
    </div>
    );
    };

const mapStateToProps = state => ({
    todos : state.todos
});

const mapDispatchToProps = dispatch => ({
    onAddToDo : (text) =>{dispatch(addToDo(text))}
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);