import React from "react";
import { Oswald } from "@next/font/google";
import Link from "next/link";
import { Flex, Box, Image } from "@chakra-ui/react";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500"],
});
export default function GameSec() {
  return (
    <Flex bgColor="white" justify="center" width="100vw" h="100%">
      <Flex m={["5", "10"]} flexDirection={["column", "column", "row", "row"]}>
        <Box>
          <Link href="/game/pubg">
            <Box
              mt="10px"
              mb="15px"
              display={["block", "none"]}
              ml={["30px", "0"]}
            >
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
                  Join the thrilling action of BGMI tournaments and fight your
                  way to victory.
                </p>
              </Box>
            </Box>
          </Link>
          <Link href="/game/pubg">
            <Image
              src="pubg1.jpg"
              alt="pubg"
              height={["", "65vh"]}
              borderRadius="30px"
              filter="grayscale(100%)"
              m={["auto", "0"]}
              width={["85%", "85%", "95%", "480px", "480px"]}
            />
          </Link>
          <Box mt="35px" display={["none", "block"]}>
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
        </Box>

        <Box ml={["", "", "", "5"]} mt={["10", "", "0", "0"]}>
          {" "}
          <Link href="/game/freefire">
            <Image
              src="ff.jpg"
              alt="ff"
              height={["", "65vh"]}
              borderRadius="30px"
              filter="grayscale(100%)"
              m={["auto", "0"]}
              width={["85%", "85%", "95%", "480px", "480px"]}
            />
          </Link>
          <Link href="/game/freefire">
            <Box mt="35px" ml={["30px", "0"]}>
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
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}
