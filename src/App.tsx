import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ExpandableComponent maxChar = {10}>
      
    </ExpandableComponent>
    </>
  )
}

export default App
