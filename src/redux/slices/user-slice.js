import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    info: null,
    isLoading: false,
    error: null,
    posts: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserInfoFetch: (state, action) => {
            state.info = null;
            state.error = null;
            state.isLoading = true;
        },
        getUserInfoSuccess: (state, action) => {
            state.info = action.payload;
            state.error = null;
            state.isLoading = false;
        },
        getUserInfoFailure: (state, action) => {
            state.info = null;
            state.error = action.payload;
            state.isLoading = false;
        },
        getUserPostsFetch: (state, action) => {
            state.posts = null;
            state.error = null;
            state.isLoading = true;
        },
        getUserPostsSuccess: (state, action) => {
            state.posts = action.payload;
            state.error = null;
            state.isLoading = false;
        },
        getUserPostsFailure: (state, action) => {
            state.posts = null;
            state.error = action.payload;
            state.isLoading = false;
        },
    }
});

export const { getUserInfoFetch, getUserInfoSuccess, getUserInfoFailure, getUserPostsFetch, getUserPostsSuccess, getUserPostsFailure } = userSlice.actions;

export const usersReducer = userSlice.reducer;