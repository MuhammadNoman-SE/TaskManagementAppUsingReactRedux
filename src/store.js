import { createStore, combineReducers } from "redux";
import {todos} from './todos/reducers.js';

const todoReducer = {todos};
const rootStore =  combineReducers(todoReducer);

export const configureStore  = () => createStore(rootStore);
