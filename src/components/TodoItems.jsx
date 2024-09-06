export default function TodoItems({ item, todos, setTodos }) {
    function handleDelete(item) {
        console.log("deleted buttont clicked", item);
        setTodos(todos.filter((todo) => todo !== item));
        
    }

    return (
        <div className="item">
            <div className="item-name">
                {item}
                <span>
                    <button
                        onClick={() => handleDelete(item)}
                        className="delete-btn"
                    >
                        X
                    </button>
                </span>
            </div>

            <hr />
        </div>
    );
}
