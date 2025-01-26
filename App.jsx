import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  return (
    <>
     <div>
      the count is {count}
     </div>
     <button onClick={() =>{setCount(count**100)}}>update count</button>
    </>
  )
}

export default App
