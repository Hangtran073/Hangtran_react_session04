import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListCourse from './Component_session02/ListCourse'
import Calculation from './Component_session02/Calculation'
import UserInfo from './Component_session02/UserInfo'
import ColorBox from './Component_session02/ColorBox'
import UserList from './Component_session02/UserList'
import TodoListIndex from './session02_baitap6/TodoListIndex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/*  <ListCourse/> */}
   {/* <Calculation/> */}
   {/* <UserInfo/> */}
  {/*  <ColorBox/> */}
  {/* <UserList/> */}
  <TodoListIndex/>
  


    </>
  )
}

export default App
