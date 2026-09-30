import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
 

  return (
    <>
      <div className="container">
        <div className="card">
          <h3>Login</h3>
          <form action="">
            <input type="text" name="email" placeholder="Email Address" />
            <input type="text" name="password" placeholder="Password" />
            <br />
            <input type="submit" defaultValue="Submit" />
          </form>
        </div>
      </div>
    </>
  )
}

export default App
