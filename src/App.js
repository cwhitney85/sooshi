import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default function App() {
  const [count, setCount] = useState(0)
  console.log(count)
  const [food, setFood] = useState('Sushi')

  function incCount() {
    setCount(prevCount => prevCount + 1)
  }
  return (
    <div className="container">
      <h1>Soooooooshi</h1>
      <h4>{food} Ordered: {count}</h4>
      <Button onClick={incCount}>Order Sushi</Button>
    </div>
  )
}


