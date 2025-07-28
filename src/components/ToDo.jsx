    import React, { useState, useEffect } from "react";
    import "./ToDo.css";

    const ToDo = () => {
    const [todos, setTodos] = useState(() => {
        const storeTodos = localStorage.getItem("todos");
        return storeTodos ? JSON.parse(storeTodos) : [];
    });

    const [newTodo, setNewTodo] = useState("");

    const handleChange = (event) => {
        setNewTodo(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTodo.trim() === "") return;
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    const handleDelete = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="todo-container">
        <h1 className="todo-title">ToDos</h1>

        <form onSubmit={handleSubmit} className="todo-form">
            <input
            type="text"
            placeholder="What needs to be done?"
            value={newTodo}
            onChange={handleChange}
            className="todo-input"
            />
        </form>

        <ul className="todo-list">
            {todos.map((todo, index) => (
            <li key={index} className="todo-item">
                <span className="todo-text">{todo}</span>
                <button
                onClick={() => handleDelete(index)}
                className="delete-button"
                >
                ×
                </button>
            </li>
            ))}
        </ul>

        <div className="todo-footer">
            <span className="todo-count">
            {todos.length} item{todos.length !== 1 && "s"} left
            </span>
        </div>
        </div>
    );
    };

    export default ToDo;
