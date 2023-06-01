import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    isLoading: false,
    error: null,
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        getCommentsFetch: (state, action) => {
            state.isLoading = true;
        },
        getCommentsSuccess: (state, action) => {
            const comments = action.payload;
            comments.forEach((comment) => state.data.push(comment))
            state.error = null;
            state.isLoading = false;
        },
        getCommentsFailure: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        deleteComments: (state, action) => {
            state.data = state.data.filter((comment) => comment.postId !== action.payload)
        },
    }
});

export const { getCommentsFetch, getCommentsSuccess, getCommentsFailure, deleteComments } = commentsSlice.actions;

export const commentsReducer = commentsSlice.reducer;