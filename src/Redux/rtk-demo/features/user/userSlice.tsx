import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state for the slice
const initialState = {
    users: [],
    loading: false,
    error: ''
};

// Define the async thunk to fetch users
export const fetchUsers = createAsyncThunk("fetchDataUser", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
});

// Create the slice
const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
                state.error = '';
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.users = [];
                state.error = action.error.message;
            });
    }
});

export default userSlice.reducer