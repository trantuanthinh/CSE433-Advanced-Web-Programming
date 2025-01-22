import React, {useReducer} from "react";
import {TodoType} from "../../types/TodoType";

type TodoAction =
    | {type: "ADD_TODO"; text: string; completed: boolean;}
    | {type: "TOGGLE_TODO"; id: number; completed: boolean;}
    | {type: "DELETE_TODO"; id: number;};

const todoReducer = (state: TodoType[], action: TodoAction) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, {id: state.length + 1, text: action.text, completed: false}];
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.id);
        case "TOGGLE_TODO":
            return state.map((todo) => (todo.id === action.id ? {...todo, completed: !todo.completed} : todo));
        default:
            throw new Error("Unhandled action type");
    }
};

export default function TodoList() {
    const [todos, dispatch] = useReducer(todoReducer, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const text = (event.currentTarget.elements.namedItem("new-todo") as HTMLInputElement).value.trim();
        if (text) {
            dispatch({type: "ADD_TODO", text, completed: false});
            event.currentTarget.reset(); // Clear input field
        }
    };

    return (
        <>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit} className="w-full flex justify-between gap-4">
                <input
                    type="text"
                    name="new-todo"
                    placeholder="Add a new todo"
                    className="border px-2 py-1 w-full rounded"
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                    Add Todo
                </button>
            </form>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex justify-between w-full items-center mb-2 py-2">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => dispatch({type: "TOGGLE_TODO", id: todo.id, completed: !todo.completed})}
                            className="mr-2"
                        />
                        <span className={todo.completed ? "line-through" : ""}>{todo.text}</span>
                        <button
                            onClick={() => dispatch({type: "DELETE_TODO", id: todo.id})}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-auto">
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
