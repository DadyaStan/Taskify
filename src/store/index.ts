import { configureStore } from "@reduxjs/toolkit";
import { tasksApi } from "store/Schedule/Calendar.api";

import taskReducer from "./tasksSlice";

export const store = configureStore ({
    reducer: {
        tasks: taskReducer
    }
    // reducer: {
    //     [tasksApi.reducerPath]: tasksApi.reducer
    // },
    // middleware: getDefaultMiddleware = getDefaultMiddleware().concat(tasksApi.middleware),
});
