import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/taskSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    // Otros reducers pueden ir aquí si los tienes
  },
});

export default store;
