import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllTodos = createAsyncThunk(
  'todo/getAll',
  async (data, thunkAPI) => {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/'
      );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('error with rejected');
    }
  }
);

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  todos: null,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTodos.fulfilled, (state, action) => {
        (state.isLoading = false), (state.todos = action.payload);
        state.isSuccess = true;
      })
      .addCase(getAllTodos.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = false),
          (state.isError = true),
          (state.todos = null),
          (state.message = action.payload);
      });
  },
});

export const {} = todoSlice.actions;

export default todoSlice.reducer;
