import { createSlice } from '@reduxjs/toolkit';

interface Task {
  text: string;
  completed: boolean;
}

interface RootState {
  tasks: Task[];
}

const initialState: RootState = {
  tasks: [
    { text: "Tarea de ejemplo 1", completed: false },
    { text: "Tarea de ejemplo 2", completed: true },
  ],
};

export const taskSlice = createSlice({
  name: 'tasks',
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
