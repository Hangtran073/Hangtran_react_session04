import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorBox from './BaiTap01/ColorBox'
import LoggerCounter from './BaiTap02/LoggerCounter'
import Watch from './BaiTap03/Watch'
import ManagerForm from './BaiTap04/ManagerForm'
import TodoList from './BaiTap06/TodoList'
import ImagePreview from './BaiTap05/ImagePreview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/*  <ColorBox></ColorBox> */}
  {/*    <LoggerCounter></LoggerCounter> */}
  {/* <Watch></Watch> */}
{/*   <ManagerForm></ManagerForm> */}
{/* <TodoList></TodoList> */}
<ImagePreview></ImagePreview>

    </>
  )
}

export default App
