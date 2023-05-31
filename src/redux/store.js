import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { rootWatcher } from './sagas/root-saga';
import { commentsReducer } from './slices/comments-slice';
import { postsReducer } from './slices/posts-slice';
import { usersReducer } from './slices/user-slice';


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        user: usersReducer,
        comments: commentsReducer,
    },
    middleware: (getDefaultmiddleware) => getDefaultmiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootWatcher);