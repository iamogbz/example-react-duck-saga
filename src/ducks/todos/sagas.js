import { call, takeLatest } from "redux-saga/effects";
import { ADD_TODO, DUCK_NAME, TOGGLE_TODO } from "./constants";

function* logActionSaga(action) {
  yield call(console.log, `${DUCK_NAME}.saga.logAction ::`, action);
}

export default function* sagaWatcher() {
  yield takeLatest([ADD_TODO, TOGGLE_TODO], logActionSaga);
}
