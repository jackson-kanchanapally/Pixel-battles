"use client";
import React from "react";
import { FaTelegramPlane,FaInstagram } from "react-icons/fa";
import {
  Flex,
  Box,
  Heading,
  Button,
  ButtonGroup,
  IconButton,
  Spacer,
  Image,
} from "@chakra-ui/react";
const Nav = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" bg="gray.900">
      <Box p="2">
        <Image  pl='10%' src='logo.png' width={[
          '180px',
          '180px',
          '250px',
          '250px',
        ]} alt='Pixel Battles'/>
      </Box>

      <Spacer />
      <IconButton
        variant="none"
        colorScheme="teal"
        aria-label="Call Sage"
        fontSize="20px"
        icon={<FaTelegramPlane />}
      />
      <IconButton
        variant="none"
        colorScheme="teal"
        aria-label="Call Sage"
        fontSize="20px"
        icon={<FaInstagram />}
      />

      <ButtonGroup gap="2"></ButtonGroup>
    </Flex>
  );
};
export default Nav;
