const ToDo: React.FC = () => {
    type FormSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => void;
    const handleFormSubmit: FormSubmitHandler = (e) => {
        e.preventDefault();

    };
    return (
        <>
            <h1>To-Do</h1>
            <form onSubmit={handleFormSubmit}>
                
                <input type="text" name="todo" />
                <button>add</button>
            </form>
        </>
    )
}

export default ToDo;