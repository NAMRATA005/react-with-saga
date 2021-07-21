import { all } from 'redux-saga/effects'
import { watchFetchUser } from './store/saga';

export default function* rootSaga() {
  yield all([
    watchFetchUser(),
  ])
}
