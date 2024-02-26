import React from 'react'
import { TodoCOmpon } from './components/firstSection';
import { Header } from './components/Header';


export const App:React.FC = () => {
  return (
    <>
      <Header/>
      <TodoCOmpon />

    </>
  )
}
