    import React, { useState, useEffect } from "react";
    import "./ToDo.css";

    const API_URL = "https://playground.4geeks.com/todo/users/pablo";
    const ToDo = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    //============== API =====================================
    useEffect(() => {
        obtenerTareas();
    }, []);

    const obtenerTareas = async () => {
        try {
        const response = await fetch(
            "https://playground.4geeks.com/todo/users/juan"
        );
        console.log(response);
        if (response.status == 404) {
            crearUsuario();
            return;
        }
        const data = await response.json();
        console.log(data.todos);
        setTodos(data.todos);
        } catch (error) {
        console.log(error);
        }
    };

    const crearUsuario = async () => {
        try {
        const response = await fetch(
            "https://playground.4geeks.com/todo/users/juan",
            {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            }
        );
        console.log(response);
        } catch (error) {
        console.error(error);
        }
    };

    //=============================CHANGE=============================
    const handleChange = (event) => {
        setNewTodo(event.target.value);
    };

    //==========================SIBMIT================================
    const handleSubmit = async (event) => {
        if (event.key ===  "Enter") {
                    event.preventDefault();

     // if (newTodo.trim() === "") return;

        const updatedTodos = { label: newTodo, done: false };

        try {
            const res = await fetch("https://playground.4geeks.com/todo/todos/juan", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedTodos),
            });
            console.log(res)
            if (res.status == 201) {
            obtenerTareas();
            setNewTodo("");
            } else {
            console.error("Error al guardar tarea");
            }
        } catch (error) {
            console.error("Error al enviar tarea:", error);
        }
        }
    };

    //============================DELETE==============================
    const handleDelete = async (index) => {
        console.log(index)
        try {
        const res = await fetch(`https://playground.4geeks.com/todo/todos/${index}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });
    console.log(res)
        if (res.status == 204) {
            obtenerTareas()
        } else {
            console.error("Error al eliminar tarea");
        }
        } catch (error) {
        console.error("Error al eliminar tarea:", error);
        }
    };

    //==============================HTML==========================================
    return (
        <div className="todo-container">
        <h1 className="todo-title">ToDos</h1>

        <div className="todo-form">
            <input
            type="text"
            placeholder="What needs to be done?"
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
            className="todo-input"
            onKeyDown={(e) => handleSubmit(e)}
            />
        </div>

        <ul className="todo-list">
            {todos.map((todo, index) => (
            <li key={index} className="todo-item">
                <span className="todo-text">{todo.label}</span>
                <button
                onClick={() => handleDelete(todo.id)}
                className="delete-button"
                >
                ×
                </button>
            </li>
            ))}
        </ul>

        <div className="todo-footer">
            <span className="todo-count">
            {todos.length} tarea{todos.length !== 1 && "s"} pendiente
            </span>
        </div>
        </div>
    );
    };

    export default ToDo;
