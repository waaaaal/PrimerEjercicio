import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../interfaces/Task";
import { RootState } from "../../interfaces/RootState";

const initialState: RootState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleTask: (state, action) => {
      const taskToToggle = state.tasks[action.payload];
      if (taskToToggle) {
        taskToToggle.completed = !taskToToggle.completed;
      }
    },
  },
});

export const { addTask, toggleTask } = taskSlice.actions;

export default taskSlice.reducer;
