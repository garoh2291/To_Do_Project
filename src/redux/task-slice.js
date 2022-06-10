import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTasksRequest } from "../api";
import { BACKEND_URL } from "../data";

export const setTasksAsync = createAsyncThunk(
  "tasks/setTasksAsync",
  function (query, { rejectWithValue, dispatch }) {
    getTasksRequest(query)
      .then((data) => {
        if (data.error) {
          throw new Error("Problem with server");
        }
        dispatch(setTasks({ data }));
      })
      .catch((error) => {
        return rejectWithValue(error.message);
      });
  }
);

export const removeMultitapleTasksThunk = createAsyncThunk(
  "tasks/removeMultitapleTasksThunk",
  function (batchDelTasks, { rejectWithValue, dispatch }) {
    fetch(`${BACKEND_URL}/task`, {
      method: "PATCH",
      body: JSON.stringify({
        tasks: batchDelTasks,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw new Error("Problem with server");
        }
        dispatch(removeMultitapleTasks({ batchDelTasks }));
      })
      .catch((error) => {
        return rejectWithValue(error.message);
      });
  }
);

export const addTaskThunk = createAsyncThunk(
  "tasks/addTasksThunk",
  function ({ newTaskObj, onSubmitCallback }, { dispatch, rejectWithValue }) {
    fetch("https://todo-list-tco.herokuapp.com/task", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newTaskObj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw data.error;
        }
        console.log("sdsk");
        dispatch(addTask({ data }));
      })
      .catch((error) => {
        return rejectWithValue(error.message);
      });
    onSubmitCallback();
  }
);

export const editTaskThunk = createAsyncThunk(
  "tasks/editTaskThunk",
  function (
    { editFormData, onSubmitCallback, _id },
    { dispatch, rejectWithValue, getState }
  ) {
    fetch(`${BACKEND_URL}/task/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw data.error;
        }
        dispatch(editTask({ data }));
      })
      .catch((error) => {
        return rejectWithValue(error.message);
      });
    onSubmitCallback();
  }
);

export const deleteTaskThunk = createAsyncThunk(
  "tasks/deleteTaskThunk",
  function (_id, { dispatch, rejectWithValue }) {
    fetch(`https://todo-list-tco.herokuapp.com/task/${_id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Cant delete");
        }
        dispatch(deleteTask({ _id }));
      })
      .catch((error) => {
        return rejectWithValue(error.message);
      });
  }
);

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: null,
    forms: [],
    status: null,
    error: null,
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
      const newTask = action.payload.data;
      const tasks = [...state.tasks, newTask];
      return {
        ...state,
        tasks,
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
  extraReducers: {
    [setTasksAsync.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [setTasksAsync.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.error = null;
    },
    [setTasksAsync.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
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
