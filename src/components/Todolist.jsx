import { useState } from "react";

function Todolist() {
    const [inputTodos, setInputTodos] = useState("");
    const [todos, setTodos] = useState([]);


    const addTodos = () => {
        if (inputTodos.trim() === "") return;

        setTodos([...todos, inputTodos]);
        setInputTodos("");
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);

    };

    console.log(todos);
    return (
        <>
            <h1>To Do List</h1>
            <input type="text" placeholder="Tambah Aktifitas" onChange={(e) => setInputTodos(e.target.value)} value={inputTodos} />

            <button onClick={addTodos}>Tambah</button>


            <ul>
                {todos.map((item, index) => (
                    <li key={index}>
                        {item}

                        <button onClick={() => deleteTodo(index)}>Hapus</button>
                    </li>
                    // <button onClick="{() => deleteTodo(index)}">Delete</button>;
                ))}
            </ul>
        </>
    );
}

export default Todolist;