import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Fragment } from 'react'

import Header from './components/Header'

let prem = "prem"

let isLog = false;

function App() {

  let arr1 = [1, () => { }]
  let [a, b] = arr1
  let [count, setCount] = useState(0)

  function handleIncrease() {
    count += 1
    console.log(count)
  }
  function handledecrease() {
    count -= 1
    console.log(count)
  }
  return (
    // <Fragment key={0}> 
    //   <p>{prem}</p>
    //   <label htmlFor=""></label>
    //   <input type="text" />
    //   {
    //     isLog && <p>welcome</p>
    //   }
    // </Fragment>
    <>


      <Header />
      <h1>Counter App - {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handledecrease}>Decrese</button>
    </>
  )
}

export default App
