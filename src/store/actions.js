import {
    ADD_TASK,
    REMOVE_TASK_BY_ID,
    USER_FETCH_REQUESTED,
    USER_FETCH_FAILED,
  } from './types'

  export const addTask = (task) => {
    const id = new Date().getTime()
    return {
      type: ADD_TASK,
      payload: {
        id,
        task,
      },
    }
  }