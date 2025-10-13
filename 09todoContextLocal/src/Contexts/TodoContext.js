import {createContext, useContext, useState} from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    toggleComplete: (id) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
});


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
