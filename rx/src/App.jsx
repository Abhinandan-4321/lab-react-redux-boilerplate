import { useState } from 'react'
import './App.css'
import LikeCounter from './LikeCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LikeCounter/>
    </>
  )
}

export default App
