export const TodoItem = ({ todo, deletTodo, toggleTodo }) => {
    return (
        <>
            <div className="todo-item">
                <div className="text">
                    <input
                        type="checkbox"
                        name=""
                        id={`todo-${todo.id}`}
                        onChange={() => {
                            toggleTodo(todo.id);
                        }}
                        checked={todo.completed}
                    />
                    <label htmlFor={`todo-${todo.id}`}>{todo.text}</label>
                </div>
                <button
                    className="delete-btn"
                    onClick={() => {
                        deletTodo(todo.id);
                    }}
                >
                    <img src="icon-cross.svg" alt="" />
                </button>
            </div>
        </>
    );
};
