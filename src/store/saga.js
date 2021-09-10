import { takeEvery, put, call } from 'redux-saga/effects';
import { USER_FETCH_REQUESTED } from './types';
import { addTask, fetchUserFailed } from './actions';
import { delay } from 'redux-saga/effects'

export function* fetchUser(action) {
    try {
      const { task } = action.payload
      const addTaskAction = addTask(task)
      yield put(addTaskAction)
    } catch (e) {
        console.log("failed");
    }
  }
  
  export function* watchFetchUser() {
    // delay(4000);
    console.log("test")
    yield takeEvery(USER_FETCH_REQUESTED, fetchUser)
  }
  