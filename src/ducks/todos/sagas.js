import { call, takeLatest } from "redux-saga/effects";
import todoDuck from ".";

function* logActionSaga(action) {
  yield call(console.log, `${DUCK_NAME}.saga.logAction::`, action);
}

export default function* sagaWatcher() {
  yield takeLatest(Object.keys(todoDuck.actions), logActionSaga);
}
