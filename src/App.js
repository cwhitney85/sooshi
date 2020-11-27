import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import User from './Sushi'
import { UserProvider } from './SushiContext'

export const UserContext = React.createContext()

export default function App() {
  // const [count, setCount] = useState(0)


  
  return (
    <UserProvider>
      <div className="container">
        <h1>Soooooooshi</h1>
        <User/>
      </div>
    </UserProvider>
  )
}


