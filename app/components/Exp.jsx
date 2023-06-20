import React from 'react'
import { Box, Flex, Text, Button, Spacer } from "@chakra-ui/react";
import { Oswald } from "@next/font/google";
import GameSec from "./GameSec";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500"],
});
export default function Exp() {
  return (
    
       
    <Flex justify='center' mx='270px'  >
    <Box>
      <Box color="#fbe23d" fontSize='35' mt='50px'>
        <h1 className={oswald.className}>Experience Adrenaline-Fueled Action</h1>
      </Box>
      <Box fontSize='28' color='gray.300' width='700px' mt='10'>
        <p className={oswald.className}>
        PixelBattles brings you an intense gaming platform, featuring the best of BGMI and Free Fire tournaments. Compete for cash prizes and prove you're the ultimate champion in the world of esports.
        </p>
      </Box>
    </Box>
    <Spacer/>
    <Box mt='50px'>asdgfsddadg</Box>
  </Flex>
  )
}
