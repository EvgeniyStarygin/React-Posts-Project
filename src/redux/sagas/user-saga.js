import { call, delay, put, takeEvery } from "@redux-saga/core/effects";
import { GET_USER_INFO_ACTION, GET_USER_POSTS_ACTION } from "../../constants/actions";
import { loadUserInfo, loadUserPosts } from "../load-data";
import { getUserInfoFailure, getUserPostsFailure, getUserPostsSuccess, getUserInfoSuccess } from "../slices/user-slice";

function* userInfoWorker({ payload }) {
    yield delay(500);
    try {
        const response = yield loadUserInfo(payload);
        if (response.status === 200) {
            const user = yield response.data;
            yield put(getUserInfoSuccess(user));
        }
        else {
            const error = yield response.data;
            yield put(getUserInfoFailure(error));
        }
    } catch (err) {
        yield put(getUserInfoFailure(err.code));
    }
}

function* userPostsWorker({ payload }) {
    yield delay(500);
    try {
        const response = yield loadUserPosts(payload);
        if (response.status === 200) {
            const posts = yield response.data;
            yield put(getUserPostsSuccess(posts));
        }
        else {
            const error = yield response.data;
            yield put(getUserPostsFailure(error));
        }
    } catch (err) {
        yield put(getUserPostsFailure(err.code));
    }
}


export function* userWatcher() {
    yield takeEvery(GET_USER_INFO_ACTION, userInfoWorker);
    yield takeEvery(GET_USER_POSTS_ACTION, userPostsWorker);
}

