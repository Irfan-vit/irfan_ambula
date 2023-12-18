import { useReducer, useState } from "react";
type Todo = {
    name: string,
    status: boolean,
    id: number
}
interface StateType {
    toDoList: Todo[]
}
const initialState: StateType = {
    toDoList: [{ name: 'drink water', status: true, id: 1702844138587 }, { name: "exercise", status: false, id: 1702844156580 }],
}
function reducer(state, action) {
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
const ToDo: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    type FormSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => void;
    const handleFormSubmit: FormSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const response: Todo = { name: formData.get('todo') + '' ?? "", status: false, id: Date.now() }
        dispatch({
            type: "add",
            payload: response,
        })
    };
    return (
        <>
            <h1>To-Do</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="todo" />
                <button>add</button>
            </form>
            <ul>
                {state.toDoList.map(todo => (
                    <li key=>
                        {todo.name}
                        <input type="checkbox" checked={todo.status} onClick={() => { dispatch({ type: "toggle", payload: todo.id }) }} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ToDo;