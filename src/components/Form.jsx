import { useState } from "react";

export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState("");

    function handleTextInput(e) {
        setTodo(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTodos((todos) => [...todos, todo]);
        setTodo("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter todo item..."
                value={todo}
                onChange={handleTextInput}
            />
            <button type="submit">Add</button>
        </form>
    );
}
