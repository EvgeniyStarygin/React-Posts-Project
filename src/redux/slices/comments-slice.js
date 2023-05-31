import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: null,
    isLoading: false,
    error: null,
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        getCommentsFetch: (state, action) => {
            state.data = null;
            state.error = null;
            state.isLoading = true;
        },
        getCommentsSuccess: (state, action) => {
            state.data = action.payload;
            state.error = null;
            state.isLoading = false;
        },
        getCommentsFailure: (state, action) => {
            state.data = null;
            state.error = action.payload;
            state.isLoading = false;
        },
    }
});

export const { getCommentsFetch, getCommentsSuccess, getCommentsFailure } = commentsSlice.actions;

export const commentsReducer = commentsSlice.reducer;