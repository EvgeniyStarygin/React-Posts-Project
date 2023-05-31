import { call, delay, put, takeEvery } from "@redux-saga/core/effects";
import { GET_POSTS_ACTION } from "../../constants/actions";
import { loadPosts } from "../load-data";
import { getPostsFailure, getPostsSuccess } from "../slices/posts-slice";


function* postsWorker() {
    yield delay(500);
    try {
        const response = yield call(loadPosts);
        if (response.status === 200) {
            const posts = yield response.data;
            yield put(getPostsSuccess(posts));
        }
        else {
            const error = yield response.data;
            yield put(getPostsFailure(error));
        }
    } catch (err) {
        yield put(getPostsFailure(err.code));
    }
}

export function* postsWatcher() {
    yield takeEvery(GET_POSTS_ACTION, postsWorker);
}


