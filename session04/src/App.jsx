import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardUser from './baitap01/CardUser'
import ToggleInfo from './baitap02/ToggleInfo'
import UserForm from './baitap03/UserForm'
import CounText from './baitap04/CounText'
import TodoApp from './baitap05/TodoApp'
import RandomNumberGenerator from './baitap06/RandomNumberGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/*  <CardUser/> */}
   {/*   <ToggleInfo/> */}
  {/*  <UserForm/> */}
  {/* <CounText/> */}
 {/* <TodoApp/>  */}
 <RandomNumberGenerator/> 
    </>
  )
}

export default App
