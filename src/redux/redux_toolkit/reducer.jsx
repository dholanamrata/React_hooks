import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    task: [],
}


const combineReducersAction = createSlice({

    name: "todo",
    initialState,
    reducers: {
        addtodo: (state, action) => {
            state.task.push({ id: Date.now(), text: action.payload })
        },
        deletetodo: (state, action) => {
            state.task = state.task.filter((x) => x.id !== action.payload)
        },
        edittodo: (state, action) => {
            const { id, text } = action.payload;
            const todoIndex = state.task.findIndex((x) => x.id === id);
            if (todoIndex !== -1) {
                state.task[todoIndex].text = text;
            }
        }
    }
})
export const { addtodo, deletetodo, edittodo } = combineReducersAction.actions
const allreducers = combineReducersAction.reducer
export default allreducers;