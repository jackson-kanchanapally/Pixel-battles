"use client";
import { Flex, Box, Image ,Text} from "@chakra-ui/react";
import Hero from "./Hero";

const BHome = () => {
  return (
    <>
    <Box >
      <Hero/>
    <Text fontSize='3xl' width='70' align='center'  mt='10' >
    &quot;Drive and compute against the best players in thrilling tournament
</Text>
<Text fontSize='3xl' align='start' ml='22%'>
 put your skills to earn real  
 cash prizes&quot;
 </Text>
  </Box>
 
    <Flex flexDirection={"row"} justify="center" align="center" wrap="wrap" mt='20'>
     
      <Flex
        bg="gray.900"
        boxShadow="dark-lg"
        rounded="lg"
        _hover={{
          boxShadow: "dark-lg",
          cursor: "pointer",
          filter: "opacity(50%)",
          rounded:"lg"
        }}
        width="320px"
        h="400px"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={"pubg1.jpg"} alt={"pubg"} borderRadius='15px'  width={["90%","320px"]}
        h={["90%","400px"]} />
      </Flex>

      <Flex
        ml={["0", "0", "50px", "60px"]}
        bg="gray.900"
        width="320px"
        h="400px"
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
        <Image src={"ff.jpg"} alt={"freefire"} borderRadius='15px'  width={["90%","320px","320px","320px"]}
        h={["90%","400px"]}/>
      </Flex>
    </Flex>
    
    </>
  );
};
export default BHome;
