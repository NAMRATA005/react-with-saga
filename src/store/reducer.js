import { ADD_TASK, REMOVE_TASK_BY_ID, USER_FETCH_FAILED } from './types';

const initialState = {
    taskList: [{id:1,task:"brighter than sunshine"}],
    showError: false,
  }

  export default (state = initialState, action) => {
    const { type, payload } = action
  
    switch (type) {
      case ADD_TASK: {
        const newState = { taskList :[...state.taskList,payload], showError: false }
        console.log(payload,'payload');
        console.log(newState,'newState');
        return newState
      }
  
      default: return state
    }
  }