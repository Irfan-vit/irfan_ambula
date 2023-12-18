const ToDo: React.FC = () => {
    type FormSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => void;
    function handleFormSubmit(e): FormSubmitHandler {
        e.preventDefault();
    }
    return (
        <>
            <h1>To-Do</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" />
                <button>add</button>
            </form>
        </>
    )
}

export default ToDo;