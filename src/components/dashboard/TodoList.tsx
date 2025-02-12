import React, {useReducer} from "react";
import {IoMdClose} from "react-icons/io";
import {MdDone} from "react-icons/md";
import {formatDate} from "../../services/shared-service";
import {TodoType} from "../../types/TodoType";

type TodoAction =
    | {type: "ADD_TODO"; title: string; member: string; date: Date;}
    | {type: "TOGGLE_TODO"; id: number;}
    | {type: "DELETE_TODO"; id: number;};

const todoReducer = (state: TodoType[], action: TodoAction): TodoType[] => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: state.length + 1,
                    title: action.title,
                    member: action.member,
                    date: action.date,
                    completed: false,
                },
            ];
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
        const title = (event.currentTarget.elements.namedItem("title") as HTMLInputElement).value.trim();
        const member = (event.currentTarget.elements.namedItem("member") as HTMLInputElement).value.trim();
        const dateString = (event.currentTarget.elements.namedItem("date") as HTMLInputElement).value.trim();

        if (title && member && dateString) {
            dispatch({
                type: "ADD_TODO",
                title,
                member,
                date: new Date(dateString),
            });
            event.currentTarget.reset();
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit} className="w-full flex justify-between gap-4">
                <input type="text" name="title" placeholder="Title..." className="border px-2 py-1 w-full rounded" />
                <input type="text" name="member" placeholder="Member" className="border px-2 py-1 w-full rounded" />
                <input type="date" name="date" className="border px-2 py-1 w-full rounded" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                    Add Todo
                </button>
            </form>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        onClick={() => dispatch({type: "TOGGLE_TODO", id: todo.id})}
                        className={`flex justify-between w-full items-center mb-2 py-2 ${todo.completed ? " bg-gray-400" : "bg-slate-200"
                            }`}>
                        <div className="size-10 flex items-center justify-center">{todo.completed && <MdDone />}</div>
                        <span className={todo.completed ? "line-through" : ""}>
                            {todo.title} - {todo.member} - {formatDate(todo.date)}
                        </span>
                        <button
                            onClick={() => dispatch({type: "DELETE_TODO", id: todo.id})}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-auto">
                            <IoMdClose />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
