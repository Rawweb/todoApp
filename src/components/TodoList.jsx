import TodoItems from "./TodoItems.jsx"

export default function TodoList({todos, setTodos}) {
    return (
        <div className="todo-list">
            {todos.map((item) => (
                <TodoItems
                    key={item}
                    item={item}
                    todos={todos}
                    setTodos={setTodos}
                />
            ))}
        </div>
    );
}
