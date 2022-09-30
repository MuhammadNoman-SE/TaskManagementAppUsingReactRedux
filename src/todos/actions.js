export const  ADD_TODO = "ADD_TODO";

export const  REMOVE_TODO = "REMOVE_TODO";

export const  MARK_ASCOMPLETE = "MARK_ASCOMPLETE";

export const addToDo = (text) => ({
    type: ADD_TODO,
    payload: {text}
});

export const removeToDo = (text) => ({
    type: REMOVE_TODO,
    payload: {text}
});

export const markAsComplete = (text) => ({
    type: MARK_ASCOMPLETE,
    payload: {text}
});