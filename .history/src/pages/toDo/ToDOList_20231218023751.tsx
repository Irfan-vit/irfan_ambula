const ToDoList: React.FC = ({}) =>
function ToDoList(state: any, dispatch) {
    return <ul>
        {state.toDoList.map(todo => (
            <li key={todo.id}>
                {todo.name}
                <input type="checkbox" checked={todo.status} onChange={() => { dispatch({ type: "toggle", payload: todo.id }); }} />
                <button onClick={() => dispatch({ type: "remove", payload: todo.id })}>delete</button>
            </li>
        ))}
    </ul>;
}
