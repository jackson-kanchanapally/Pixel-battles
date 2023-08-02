import React from "react";
import {
  Box,
  HStack,
  Stack,
  Text,
  Flex,
  chakra,
  Progress,
  Button,
} from "@chakra-ui/react";
import { Oswald } from "@next/font/google";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500"],
});

import Image from "next/image";
import RegisterForm from "../RegisterForm";
export default function MatchPubg({
  image,
  alt,
  matchName,
  time,
  mapName,
  prize,
  platform,
  entryFee,
  spots
}) {
  const Img = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt"].includes(prop),
  });
  const [cli,setCli]=React.useState(false)
  const handle=()=>{
    setCli(!cli);
    <RegisterForm/>
  }
  return (

    <Flex
      px="20px"
      bg="rgba(0, 0, 0, 0.50)"
      h={["210px","290px"]}
      m="auto"
      mt='10px'
      py="25px"
      w='100%'
      boxShadow="lg"
      borderRadius="15px"
      direction="column"
      alignItems="center"
    >
      <HStack>
        <Img
          src={image}
          alt={alt}
          width={['85px',"120px"]}
          borderRadius="10px"
          ml={["", "-10"]}
        />
        <Box ml="10px">
          <Text as="b" fontSize={['12px',"18"]} color='white'>
            {matchName.toUpperCase()}
          </Text>
          <Box color="gray.400">
            <Text align="center" fontSize={["9.5px", "15px"]}>
              MAP : {mapName.toUpperCase()} &nbsp; &nbsp;|&nbsp;&nbsp; TIME :{" "}
              {time}
            </Text>
          </Box>
        </Box>
      </HStack>
      <HStack mt={["15px","30px"]}>
        <Box
          bg="rgba(0, 0, 0, 0.80)"
          height={["62px","80px"]}
          pt={["17px","15px"]}
          fontSize={['11px','14px']}
          width={["80px","130px"]}
          borderRadius="10px"
          align="center"
          
          color='white'
        >
          PRIZE POOL :
          <br />
          <Text color='yellow.400'>  &#8377; {prize} </Text>
        </Box>
        <Box
          bg="rgba(0, 0, 0, 0.80)"
          height={["62px","80px"]}
          pt={["17px","15px"]}
          fontSize={['11px','14px']}
          width={["80px","130px"]}
          borderRadius="10px"
          align="center"
         
          color='white'
        >
          PLATFORM :
          <br />
          <Text color='yellow.400'>  {platform.toUpperCase()} </Text>
        </Box>
        <Box
          bg="rgba(0, 0, 0, 0.80)"
          height={["62px","80px"]}
          pt={["17px","15px"]}
          fontSize={['11px','14px']}
          width={["80px","130px"]}
          borderRadius="10px"
          align="center"
          
          color='white'
        >
          ENTRY FEE :
          <br />
         <Text color='yellow.400'> &#8377; {entryFee}</Text>
        </Box>
       
      </HStack>
      <Box w={["95%","90%"]} py={["10px","20px"]}>
        <Progress
          colorScheme="yellow"
          borderRadius="10px"
          bg='gray.800'
          value={80}
          size={['xs','sm']}
        />
        <Flex py='10px' fontSize={['13px']} color="gray.400" >SPOTS LEFT : &nbsp;<Text color='yellow.400'>{spots}</Text></Flex>
      </Box>
      
    </Flex>
  );
}
