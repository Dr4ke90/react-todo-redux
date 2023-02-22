import { createSlice } from "@reduxjs/toolkit";


export const todosSlice = createSlice({
    name: 'todos',
    initialState : {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            return ({
                ...state,
                todos: [
                    ...state.todos,
                    action.payload,
                ]})
        },
        deleteTodo: (state, action) => {
            return ({
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            })
        },
        editTodo: (state,action) => {
            return ({
                ...state, 
                todos: state.todos.map((todo) => (
                    todo.id === action.payload.id ? {...todo, todo:action.payload.value} : todo
                ))
            })
        },
    }
})

export const {addTodo, deleteTodo, editTodo} = todosSlice.actions;

export const todosState = (state) => state.todos;

export default todosSlice.reducer;