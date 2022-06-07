import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    forms: [],
  },
  reducers: {
    setTasks(state, action) {
      const taskFromBackend = action.payload.data;
      return {
        ...state,
        tasks: taskFromBackend,
      };
    },
    removeMultitapleTasks(state, action) {
      const deletedTasks = action.payload.batchDelTasks;
      console.log(deletedTasks);
      const tasks = state.tasks.filter(
        (task) => !deletedTasks.includes(task._id)
      );
      return {
        ...state,
        tasks,
      };
    },
    addTask(state, action) {
      //   const tasks = action.payload.data;
      return {
        ...state,
        tasks: action.payload.data,
      };
    },
    editTask(state, action) {
      const editedTask = action.payload.data;
      console.log(editedTask);
      const tasks = state.tasks.map((task) => {
        if (task._id === editedTask._id) {
          return editedTask;
        }
        return task;
      });
      return {
        ...state,
        tasks,
      };
    },
    deleteTask(state, action) {
      const deletedTaskId = action.payload._id;
      const tasks = state.tasks.filter((task) => task._id !== deletedTaskId);
      return {
        ...state,
        tasks,
      };
    },
  },
});

export const {
  setTasks,
  removeMultitapleTasks,
  addTask,
  editTask,
  deleteTask,
} = taskSlice.actions;

export default taskSlice.reducer;
