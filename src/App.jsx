import { useState } from 'react'
import Home from './Components/views/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home></Home>
    </>
  )
}

export default App
