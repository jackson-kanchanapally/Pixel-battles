
import React from 'react'
import { Image,useMediaQuery } from '@chakra-ui/react'

export default function Hero() {
    const [isLargerThan375] = useMediaQuery('(min-width: 400px)')
  return (
    <Image src={isLargerThan375?'hero.png':'mobhero.png'} alt='Hero' width='full' h={['80vh','100vh' ]}/>
       
  )
}
