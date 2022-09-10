import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TodoContextState } from './Contexts/TodoContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <TodoContextState>
      <App />
    </TodoContextState>
  </React.StrictMode>,
)
