import { useReducer } from "react";
import { reducer, initialState, Todo } from "./ToDo";

export const ToDo: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    type FormSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => void;
    const handleFormSubmit: FormSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const response: Todo = { name: formData.get('todo') + '' ?? "", status: false, id: Date.now() };
        dispatch({
            type: "add",
            payload: response,
        });
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
                        <input type="checkbox" checked={todo.status} onChange={() => { dispatch({ type: "toggle", payload: todo.id }); }} />
                        <button onClick={() => dispatch({ type: "remove", payload: todo.id })}>delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
};
