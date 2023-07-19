import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Replace 'YOUR_ACTION_TYPE' with a descriptive action type, e.g., 'fetchUsers'
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    // Write your fetching logic here and return the fetched data
    const response = await fetch('https://randomuser.me/api/?results=20');
    const data = await response.json();
    return data.results;
  } catch (error) {
    // If an error occurs during the fetch, use `rejectWithValue` to pass the error to the state
    return rejectWithValue(error.message);
  }
});

const initialState = {
  name: '',
  users: [],
  isLoading: true,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default usersSlice.reducer;
