import React from "react";
import { FaTwitter, FaFacebook, FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
import {
  Box,
  Flex,
  Divider,
  Text,
  HStack,
  Image,
  IconButton,
} from "@chakra-ui/react";
export default function Footer() {
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
            <Text fontSize="15">Contact</Text>
          </Box>
          <Box pb={["8px"]}>
            {" "}
            <Text fontSize="15">Terms</Text>
          </Box>
        </Box>
      </Flex>
      <Divider orientation="horizontal" color="white" width="70%" m="auto" />
      <Flex m="20px" alignItems="center" direction="column" >
        <HStack>
          <Image src="as.jpg" width="250px" alt="pixel battles" mb="10px" />
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
