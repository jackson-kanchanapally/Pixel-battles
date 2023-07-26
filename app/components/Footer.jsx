import React from "react";
import { FaTwitter, FaFacebook, FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import { Box, Flex, Divider, Text,HStack, Image } from "@chakra-ui/react";
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
      <Flex m='20px'  alignItems='center' direction='column'>

      <HStack><Image src='as.jpg' width='250px' alt='pixel battles' mb='10px'/></HStack>
        <HStack  spacing='15px' fontSize='30px' mb='30px'>
        <FaTwitter />
        <RiInstagramFill />
        <FaFacebook />
        <FaTelegram />
        </HStack>
      </Flex>
    </Box>
  );
}
