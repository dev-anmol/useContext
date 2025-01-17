import { useContext, useState } from 'react'
import './App.css'
import CountContext from './Context/CountContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <CountContext.Provider value={count}>
              <Count setCount={setCount}/>
          </CountContext.Provider>
      </div>

    </>
  )
}
function Count({setCount}){
  return (
    <>
    <CountRenderer />
    <Buttons setCount = {setCount}/>
    </>
  )
}
function CountRenderer(){
  const count = useContext(CountContext);
  return (
    <>
      <div>{count}</div>
    </>
  )
}
function Buttons({setCount}){
  const count = useContext(CountContext);
  return (
    <>
      <button onClick={()=>{
        setCount(count+1)
      }}>Increment</button>
      <button onClick={()=>{
        setCount(count-1)
      }}>Decrement</button>

    </>
  )
}

export default App
