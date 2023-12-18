import { useReducer } from "react";

// declaring Type information.

type Todo = {
    name: string,
    status: boolean,
    id: number
}

type ActionType = {
    type: string,
    payload: string | number | Todo
}

interface StateType {
    toDoList: Todo[]
}

interface Reducertype { (state: StateType, action: ActionType): StateType }

// Initial state for the reducer function.

const initialState: StateType = {
    toDoList: [{ name: 'drink water', status: true, id: 1702844138587 }, { name: "exercise", status: false, id: 1702844156580 }],
}

// deckaring reducer function.

const reducer: Reducertype = (state = initialState, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                toDoList: [...state.toDoList, action.payload as Todo]
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
            return state;
    }
}

// creating ToDo component

const ToDo: React.FC = () => {
    // using useReducer for state management.
    const [state, dispatch] = useReducer(reducer, initialState)

    // declaring a formhandler funtion
    type FormSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => void;
    const handleFormSubmit: FormSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement)
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
                    <li key={todo.id}>
                        {todo.name}
                        <input type="checkbox" checked={todo.status} onChange={() => { dispatch({ type: "toggle", payload: todo.id }) }} />
                        <button onClick={() => dispatch({ type: "remove", payload: todo.id })}>delete</button>
                    </li>
                ))}
            </ul >
        </>
    )
}

export default ToDo;