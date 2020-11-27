import React from 'react'
import { useCount, useCountUpdate } from './SushiContext'
import { UserContext } from './App'
import Button from 'react-bootstrap/Button'

export default function User() {
  const count = useCount()
  const incCounter = useCountUpdate()
  return (
    <>
    <h4>Sushi Ordered: {count}</h4>
    <Button onClick={incCounter}>Order Sushi</Button>
    </>
  )
}
