import React from "react";
import {
  Box,
  HStack,
  Stack,
  Text,
  Flex,
  chakra,
  Progress,
} from "@chakra-ui/react";
import { Oswald } from "@next/font/google";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500"],
});

import Image from "next/image";
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
  return (
    <Flex
      px="20px"
      bg="rgba(0, 0, 0, 0.70)"
      h="290px"
      m="auto"
      mt='10px'
      py="25px"
      boxShadow="lg"
      borderRadius="15px"
      direction="column"
      alignItems="center"
    >
      <HStack>
        <Img
          src={image}
          alt={alt}
          width="120"
          borderRadius="10px"
          ml={["", "-10"]}
        />
        <Box ml="10px">
          <Text as="b" fontSize={["18"]} color='white'>
            {matchName.toUpperCase()}
          </Text>
          <Box color="gray.400">
            <Text align="center" fontSize={["12px", "15px"]}>
              MAP : {mapName.toUpperCase()} &nbsp; &nbsp;|&nbsp;&nbsp; TIME :{" "}
              {time}
            </Text>
          </Box>
        </Box>
      </HStack>
      <HStack mt="30px">
        <Box
          bg="rgba(0, 0, 0, 0.80)"
          height="80px"
          width={["105px","130px"]}
          borderRadius="10px"
          align="center"
          pt="13px"

          color='white'
        >
          PRIZE POOL :
          <br />
          <Text color='yellow.400'>  &#8377; {prize} </Text>
        </Box>
        <Box
          bg="rgba(0, 0, 0, 0.80)"
          height="80px"
          width={["105px","130px"]}
          borderRadius="10px"
          align="center"
          pt="13px"
          color='white'
        >
          PLATFORM :
          <br />
          <Text color='yellow.400'>  {platform.toUpperCase()} </Text>
        </Box>
        <Box
          bg="rgba(0, 0, 0, 0.80)"
          height="80px"
          width={["105px","130px"]}
          borderRadius="10px"
          align="center"
          pt="13px"
          color='white'
        >
          ENTRY FEE :
          <br />
         <Text color='yellow.400'> &#8377; {entryFee}</Text>
        </Box>
      </HStack>
      <Box w={["95%","90%"]} py="20px">
        <Progress
          colorScheme="yellow"
          borderRadius="10px"
          value={80}
        />
        <Flex py='10px' color="gray.400" >SPOTS LEFT : &nbsp;<Text color='yellow.400'>{spots}</Text></Flex>
      </Box>
      
    </Flex>
  );
}
