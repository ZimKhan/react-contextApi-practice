import { createContext, useReducer, useState } from 'react'
import TodoReducer from '../Reducers/TodoReducer'
import { ADD_TODO, DEL_NAME } from '../ActionTypes/TodoActionTypes'
// Creating context
const TodoContext = createContext()

// Using context provider through component
const TodoContextState = (props) => {
  // Initial state
  const initialState = {
    todos: [],
    name: 'mabias',
  }

  //   UseReducer
  const [state, dispatch] = useReducer(TodoReducer, initialState)

  // Actions creator funcs
  const changeName = (name) => {
    dispatch({ type: ADD_TODO, payload: name })
  }
  const delName = (del) => {
    dispatch({ type: DEL_NAME, payload: del })
  }
  //   testing git
  //
  return (
    <div>
      <TodoContext.Provider value={{ name: state.name, changeName, delName }}>
        {props.children}
      </TodoContext.Provider>
    </div>
  )
}

export { TodoContext, TodoContextState }
