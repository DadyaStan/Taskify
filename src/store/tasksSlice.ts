import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        loading: false,
        error: null,
    },
    reducers: {
        renderTasks(state, action) {
            state.tasks.push() // Сделаем подгрузку АПИ и пушим её сюда "<JSON[]>"
        },
        createTask(state, action) {},
        updateTask(state, action) {},
        removeTask(state, action) {}
    }
});

// getTaskList
// createTask
// chagneStatusTask
// removeTask

export const {renderTasks, createTask, updateTask, removeTask} = tasksSlice.actions;
export default tasksSlice.reducer;