import { call, takeLatest } from "redux-saga/effects";
import todoDuck from ".";

function* logActionSaga(action) {
  yield call(console.log, `${todoDuck.name}.saga.logAction::`, action);
}

export default function* sagaWatcher() {
  yield takeLatest(todoDuck.actionTypes, logActionSaga);
}
