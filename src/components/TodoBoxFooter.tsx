export const TodoBoxFooter = ({
    todosLength,
    clearTodos,
    setFilter,
    filter,
}) => {
    return (
        <>
            <div className="todo-box-footer">
                <div className="itemsLeft"> {todosLength} items Left</div>
                <div className="status">
                    <button
                        className={filter === "all" ? "all active-btn" : "all"}
                        onClick={() => setFilter("all")}
                    >
                        All
                    </button>
                    <button
                        className={
                            filter === "active" ? "active active-btn" : "active"
                        }
                        onClick={() => setFilter("active")}
                    >
                        Active
                    </button>
                    <button
                        className={
                            filter === "completed"
                                ? "completed active-btn"
                                : "completed"
                        }
                        onClick={() => setFilter("completed")}
                    >
                        Completed
                    </button>
                </div>
                <button
                    className="clear"
                    onClick={() => {
                        clearTodos();
                    }}
                >
                    Clear Completed
                </button>
            </div>
        </>
    );
};
