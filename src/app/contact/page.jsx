"use client";
import { Flex, Box, Text, Stack, HStack } from "@chakra-ui/react";
import React from "react";
import Footer from "@/src/components/Footer";
import { RiInstagramFill, RiMailFill,RiTelegramFill } from "react-icons/ri";
import Link from "next/link";

export default function PPpage() {
  return (
    <Flex direction={"column"} alignItems="center" p="40px">
      <Box m="auto" mt="30px" mb="50px">
        <Text fontSize="4xl" as="b" color='yellow.400'>
          Contact Us
        </Text>
      </Box>
      <Flex w="90vw" direction={['column','row']}>
        <Flex justifyContent='center' alignItems='center' direction='column' bg='gray.900' h='200px' borderRadius='15px' w={['90vw','550px']} mb='30px' mr='30px' >
          <HStack align="center" >
            <Text fontSize={['4xl',"5xl"]} color='yellow.400'>
              <RiMailFill />
            </Text>
            <Text fontSize={['2xl','3xl']}>pixelbattles80@gmail.com</Text>
          </HStack>
        </Flex>
        <Flex justifyContent='center' alignItems='center' direction='column' bg='gray.900' h='200px' borderRadius='15px' w={['90vw','550px']} mb='30px'  mr='30px'>
          <Link href='https://instagram.com/pixelbattles2023?igshid=MzNlNGNkZWQ4Mg==' target="_blank">
          <HStack align="center" >
          <Text fontSize={['4xl',"5xl"]} color='yellow.400'>
              <RiInstagramFill />
            </Text>
            <Text fontSize={['3xl','4xl']}>@pixelbattles2023</Text>
          </HStack>
          </Link>
        </Flex>
        <Flex justifyContent='center' alignItems='center' direction='column' bg='gray.900' h='200px' borderRadius='15px' w={['90vw','550px']} mb='30px' >
         <Link href='https://t.me/+tdiohd5OxAtkMTQ1' target='_blank'>
         <HStack align="center">
            <Text fontSize={['4xl',"5xl"]} color='yellow.400'>
              <RiTelegramFill/>
            </Text>
            <Text fontSize={['3xl','4xl']}>Pixel Battles</Text>
          </HStack></Link>
        </Flex>
      </Flex>
      <Box w="95vw">
        <Footer />
      </Box>
    </Flex>
  );
}
