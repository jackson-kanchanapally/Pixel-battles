import React from "react";
import { FaTwitter, FaFacebook, FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
import logo from "@/public/as.jpg"
import {
  Box,
  Flex,
  Divider,
  Text,
  HStack,
  IconButton,
  chakra
} from "@chakra-ui/react";
import Image from 'next/image'
export default function Footer() {
  const Img = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt"].includes(prop),
  });
  return (
    <Box>
      <Flex
        width="50%"
        justify="center"
        ml={["20%"]}
        py={["70px"]}
        color="white"
        direction={["column", "row"]} 
      >
        <Box width="60%">
          <Box pb={["10px"]}>
            {" "}
            <Text as="b" fontSize="18">
              Games
            </Text>
          </Box>
          <Box pb={["8px"]}>
            {" "}
            <Text fontSize="15">BGMI</Text>
          </Box>
          <Box pb={["8px"]}>
            {" "}
            <Text fontSize="15">Free Fire</Text>
          </Box>
          <Box pb={["8px"]}>
            {" "}
            <Text fontSize="15">Tournaments</Text>
          </Box>
        </Box>
        <Box width="70%" mt={["10", "0"]}>
          <Box pb={["10px"]}>
            {" "}
            <Text as="b" fontSize="18">
              Support
            </Text>
          </Box>
          <Box pb={["8px"]}>
            {" "}
            <Text fontSize="15">FAQ</Text>
          </Box>
          <Box pb={["8px"]}>
            {" "}
            <Link href='/contact'>
            <Text fontSize="15">Contact</Text>
            </Link>
          </Box>
          <Box pb={["8px"]}>
            {" "}
            <Link href='/privacypolicy' ><Text fontSize="15">Privacy Policy</Text></Link>
          </Box>
          <Box pb={["8px"]}>
            {" "}
            <Link href='/terms' ><Text fontSize="15">Terms</Text></Link>
          </Box>
          <Box pb={["8px"]}>
            {" "}
            <Link href='/refundpolicy' ><Text fontSize="15">Refund Policy</Text></Link>
          </Box>
        </Box>
      </Flex>
      <Divider orientation="horizontal" color="white" width="70%" m="auto" />
      <Flex m="20px" alignItems="center" direction="column" >
        <HStack>
          <Img src={logo} width="250px" alt="pixel battles" mb="10px" />
        </HStack>
        <HStack spacing="15px" fontSize="30px" mb="30px" >
          <Link href="#" target="_blank" >
            <IconButton size="30px" bg="none" icon={<FaTwitter />} color='white'/>
          </Link>
          <Link href="https://www.instagram.com/pixelbattles2023/" target="_blank">
            <IconButton size="30px" bg="none" icon={<RiInstagramFill />} color='white'/>
          </Link>
          <Link href="#" target="_blank">
            <IconButton size="30px" bg="none" icon={<FaFacebook />} color='white'/>
          </Link>
          <Link href="#" target="_blank">
            <IconButton size="30px" bg="none" icon={<FaTelegram />} color='white'/>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
