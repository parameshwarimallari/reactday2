// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let name="parmi";
  let age=21;
  let language="react"
  return(<div className='main'>
<div className='nav'><ul>
  <li>Home</li>
   <li>About</li>
    <li>ContactUs</li>
  </ul></div>

<div>
  <h1>hello my name is{name}</h1>
  <h1>{age} years old</h1>
  <h1>now i am learning {language}</h1>

</div>

  </div>)
}

export default App
