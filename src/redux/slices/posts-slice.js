import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: null,
    isLoading: false,
    error: null,
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPostsFetch: (state, action) => {
            state.data = null;
            state.error = null;
            state.isLoading = true;
        },
        getPostsSuccess: (state, action) => {
            state.data = action.payload;
            state.error = null;
            state.isLoading = false;
        },
        getPostsFailure: (state, action) => {
            state.data = null;
            state.error = action.payload;
            state.isLoading = false;
        },
    }
});

export const { getPostsFetch, getPostsFailure, getPostsSuccess } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;