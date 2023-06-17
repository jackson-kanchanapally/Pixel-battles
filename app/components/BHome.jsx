"use client";
import { Flex, Box, Image, Spacer } from "@chakra-ui/react";

const BHome = () => {
  return (
    <Flex flexDirection={"row"} justify="center" align="center" wrap="wrap">
      <Flex
        bg="gray.900"
        boxShadow="dark-lg"
        rounded="lg"
        _hover={{
          boxShadow: "lg",
          cursor: "pointer",
          filter: "opacity(50%)" 
        }}
        width="420px"
        h="500px"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={"pubg1.jpg"} alt={"pubg"} borderRadius='15px'  width={["90%","420px"]}
        h={["90%","500px"]} />
      </Flex>

      <Flex
        ml={["0", "0", "30px", "40px"]}
        bg="gray.900"
        width="420px"
        h="500px"
        boxShadow="dark-lg"
        rounded="md"
        justifyContent="center"
        alignItems="center"
        _hover={{
          boxShadow: "lg",
          cursor: "pointer",
          filter: "opacity(50%)" 
        }}
      >
        <Image src={"ff.jpg"} alt={"freefire"} borderRadius='15px'  width={["90%","420px","420px","420px"]}
        h={["90%","500px"]}/>
      </Flex>
    </Flex>
  );
};
export default BHome;
