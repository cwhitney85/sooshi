import React, { useContext, useState } from 'react'
// import { UserContext } from './App'

const UserContext = React.createContext()
const UserUpdateContext = React.createContext()

export function useCount() {
  return useContext(UserContext)
}

export function useCountUpdate() {
  return useContext(UserUpdateContext)
}

export function UserProvider({ children }){
  const [count, setCount] = useState(0)
  
  function incCount() {
    setCount(prevCount => prevCount + 1)
  }


  return (
    <UserContext.Provider value={count}>
      <UserUpdateContext.Provider value={incCount}>
        { children }
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  )
}