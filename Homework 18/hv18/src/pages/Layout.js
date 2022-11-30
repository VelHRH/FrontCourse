import React from 'react'
import { Header } from '../components/Header'
import { Navbox } from '../components/Nav/Navbox'

export const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div className="flex mt-20">
        <Navbox />
        {children}
      </div>
      
    </>
  )
}
