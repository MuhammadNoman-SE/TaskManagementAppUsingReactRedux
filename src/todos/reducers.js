import {ADD_TODO, REMOVE_TODO, MARK_ASCOMPLETE} from './actions.js';


export const todos = (state= [], action) => {
    const {type, payload}   = action;
        switch ( action.type) {
            case ADD_TODO:
                
                {
                   const {text} = action.payload;
                   const newTodo = {text, isCompleted:false};
                    return state.concat(newTodo);
                };
        case REMOVE_TODO:{
            const {text} = action.payload;
             return state.filter(todo =>  {
                if(todo.text !== text)
                    return todo;
             });

        }
        case MARK_ASCOMPLETE:{
            const {text} = action.payload;
return state.map(todo => {
    if(todo.text === text)
    return {...todo, isCompleted:true};
    return todo;
});
        }
            default:
                return state;
                break;
        }
    };
