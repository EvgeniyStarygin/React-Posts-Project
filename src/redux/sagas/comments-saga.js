import { call, delay, put, takeEvery } from "@redux-saga/core/effects";
import { GET_POST_COMMENTS_ACTION } from "../../constants/actions";
import { loadComments } from "../load-data";
import { getCommentsFailure, getCommentsSuccess } from "../slices/comments-slice";

function* commentsWorker({ payload }) {
    yield delay(500);
    try {
        const response = yield loadComments(payload);
        if (response.status === 200) {
            const comments = yield response.data;
            yield put(getCommentsSuccess(comments));
        }
        else {
            const error = yield response.data;
            yield put(getCommentsFailure(error));
        }
    } catch (err) {
        yield put(getCommentsFailure(err.code));
    }
}

export function* commentsWatcher() {
    yield takeEvery(GET_POST_COMMENTS_ACTION, commentsWorker);
}

