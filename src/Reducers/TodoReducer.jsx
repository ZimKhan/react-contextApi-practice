import { ADD_TODO, DEL_NAME } from '../ActionTypes/TodoActionTypes'

const TodoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        name: action.payload,
      }
    case DEL_NAME:
      return {
        ...state,
        name: action.payload,
      }

    default:
      return state
  }
}

export default TodoReducer
