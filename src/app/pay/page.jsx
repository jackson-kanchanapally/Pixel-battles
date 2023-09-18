'use client'
import React from 'react'
import Image from 'next/image'
import { checkout } from '../../checkout'
export default function page() {
  const amt="price_1NrcuuSFhjZre3aBrmu7SOmI"
  return (
    <div style={{color:'white'}}>
    <button 
     onClick={(()=>{
      checkout(
        {
          lineItems:[{price:amt,quantity:1}]
        }
      )
     })}
    >Buy This image</button>
    </div>
  )
}
