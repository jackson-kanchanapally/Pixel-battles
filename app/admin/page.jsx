'use client'
import React from 'react'
import Admin from '../components/Admin'

export default function Apage() {
  const [isClient, setIsClient] = React.useState(false)
 
  React.useEffect(() => {
    setIsClient(true)
  }, [])
 
  return (
   <>
   {isClient && <Admin/>}
  
   </>
  )
}
