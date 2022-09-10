import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../../Contexts/TodoContext'
const Header = () => {
  const { name, changeName, delName } = useContext(TodoContext)
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={() => changeName('I am zim')}>Change name</button>

      <button onClick={() => delName('I am deleted')}>Del name</button>
    </div>
  )
}

export default Header
