import React from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
export default function Footer() {
  return (
    <Flex width="50%" justify="center" ml={["20%"]} py={["70px"]} color="white">
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
      <Box width="70%">
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
  );
}
