import { useState } from "react";
import { ToDo } from "./ToDo.1";
export type Todo = {
    name: string,
    status: boolean,
    id: number
}
interface StateType {
    toDoList: Todo[]
}
export const initialState: StateType = {
    toDoList: [{ name: 'drink water', status: true, id: 1702844138587 }, { name: "exercise", status: false, id: 1702844156580 }],
}
export function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                toDoList: [...state.toDoList, action.payload]
            }
        case 'toggle':
            return {
                ...state,
                toDoList: state.toDoList.map(toDo => toDo.id === action.payload ? { ...toDo, status: !toDo.status } : toDo)
            }

        case 'remove':
            return {
                ...state,
                toDoList: state.toDoList.filter(toDo => toDo.id !== action.payload)
            }

        default:
            break;
    }
}
export default ToDo;