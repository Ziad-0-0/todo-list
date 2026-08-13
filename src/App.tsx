import { useState } from "react";
import "./App.css";
import { AddTask } from "./components/AddTask";
import { Head } from "./components/Head";
import type { Todo } from "./types/todo";
import { TodoItem } from "./components/TodoItem";
import { TodoBoxFooter } from "./components/TodoBoxFooter";

function App() {
    // const [todos, setTodos] = useState<Todo[]>([]);
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
    const [them, setThem] = useState("dark");
    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });
    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };
    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            ),
        );
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const clearTodos = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    return (
        <>
            <section
                className={them === "dark" ? "main-sec dark" : "main-sec light"}
            >
                <div className="to-do-list">
                    <Head them={them} setThem={setThem} />
                    <AddTask onAdd={addTodo} />
                    <div className="todo-items-box">
                        {filteredTodos.length > 0 ? (
                            <div className="todo-items">
                                {filteredTodos.map((todo) => (
                                    <TodoItem
                                        key={todo.id}
                                        todo={todo}
                                        deletTodo={deleteTodo}
                                        toggleTodo={toggleTodo}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p className="not-found-message">
                                you don't have any todos
                            </p>
                        )}
                        <TodoBoxFooter
                            todosLength={
                                todos.filter((todo) => !todo.completed).length
                            }
                            clearTodos={clearTodos}
                            setFilter={setFilter}
                            filter={filter}
                        />
                    </div>
                    <div className="status mobile">
                        <button
                            className={
                                filter === "all" ? "all active-btn" : "all"
                            }
                            onClick={() => setFilter("all")}
                        >
                            All
                        </button>
                        <button
                            className={
                                filter === "active"
                                    ? "active active-btn"
                                    : "active"
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
                </div>
            </section>
        </>
    );
}

export default App;
