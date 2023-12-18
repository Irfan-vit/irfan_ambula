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
    toDoList: [{ name: 'drink water', status: true, id: 1702844138587 }, { name: "exercise", status: false, id }],
}
function reducer() {

}
const ToDo: React.FC = () => {
    // const [dispatch, state] = useReducer(state = initialState, reducer)
    type FormSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => void;
    const handleFormSubmit: FormSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const response: Todo = { name: formData.get('todo') + '' ?? "", status: false }
        dispatch({
            type: "add",
            payload: response,
            id: Date.now()
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
                {initialState.toDoList.map(todo => (
                    <li>
                        {todo.name}
                        <input type="checkbox" checked={todo.status} onClick={() => { dispatch({ type: "toggle", payload: todo.name }) }} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ToDo;