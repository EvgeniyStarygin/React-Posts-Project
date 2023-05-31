import { all, fork, spawn } from "@redux-saga/core/effects";
import { commentsWatcher } from "./comments-saga";
import { postsWatcher } from "./posts-saga";
import { userWatcher } from "./user-saga";

export function* rootWatcher() {
    yield all([
        fork(postsWatcher),
        fork(userWatcher),
        fork(commentsWatcher)
    ])
}