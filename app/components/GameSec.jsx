import React from "react";
import { Oswald } from "@next/font/google";
import { Flex, Box, Image } from "@chakra-ui/react";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500"],
});
export default function GameSec() {
  return (
    <Flex bgColor="white" justify="center" width="100vw" h="100%">
      <Flex m={["5", "10"]} flexDirection={["column",'column','row','row']}>
        <Box>
          <Box mt="10px" mb='15px' display={['block','none']}>
            <Box fontSize="25" color="#cdb206">
              <h1 className={oswald.className}>BGMI</h1>
            </Box>
            <Box
              mt="10px"
              width="230px"
              fontSize="17"
              color="black"
              fontWeight="medium"
              fontFamily="fantasy"
            >
              <p>
                Join the thrilling action of BGMI tournaments and fight your way
                to victory.
              </p>
            </Box>
          </Box>
          <Image
            src="pubg1.jpg"
            alt="pubg"
            height={["", "65vh"]}
            borderRadius="30px"
            filter="grayscale(100%)"
            width={["98%", "95%", "95%", "480px", "480px"]}
          />
          <Box mt="35px"  display={['none','block']}>
            <Box fontSize="25" color="#cdb206" >
              <h1 className={oswald.className}>BGMI</h1>
            </Box>
            <Box
              mt="10px"
              width="230px"
              fontSize="17"
              color="black"
              fontWeight="medium"
              fontFamily="fantasy"
            >
              <p>
                Join the thrilling action of BGMI tournaments and fight your way
                to victory.
              </p>
            </Box>
          </Box>
        </Box>
        <Box ml={['','','',"5"]} mt={['10','','0','0']}>
          <Image
            src="ff.jpg"
            alt="ff"
            height={["", "65vh"]}
            borderRadius="30px"
            filter="grayscale(100%)"
            width={["98%", "95%", "95%", "480px", "480px"]}
          />
          <Box mt="35px">
            <Box fontSize="25" color="#cdb206">
              <h1 className={oswald.className}>FREEFIRE</h1>
            </Box>
            <Box
              mt="10px"
              width="230px"
              fontSize="17"
              color="black"
              fontWeight="medium"
              fontFamily="fantasy"
            >
              <p>
                Step into the world of Free Fire and battle it out to be the
                last one standing.
              </p>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
