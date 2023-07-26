import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Spacer,
  HStack,
  Stack,
  Image,
} from "@chakra-ui/react";
import { Oswald } from "@next/font/google";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500"],
});
export default function Quc() {
  return (
    <Stack width={["100%", "100%"]} px={["4%", "270px"]} my={["15%", "5%"]}>
     
   <HStack>
      <Box width={["100%", "70%"]}>
        <Box color="#cdb206" fontSize={["25", "30", "35", "35"]}>
          <h1 className={oswald.className}>Quick and Easy Setup</h1>
        </Box>
        <Box display={['block','none']} pt='35px'>
        <Image src="qe.png" alt="wr" width="100vw" />
      </Box>
   <Box color="gray.300" width={["100%", "100%"]} mt="10" pos="relative">
          <Box>
            <Text as="b" fontSize={["20px"]}>
              1. Register
            </Text>
            <Text fontSize={["17px"]} pl={"22px"} mt={["4px"]}>
              Join with minimal bucks and earn maximum.{" "}
            </Text>
          </Box>
          <Box pt={["20px"]} width={["75%","100%"]}>
            <Text as="b" fontSize={["20px"]}>
              2. Go Play!
            </Text>
            <Text fontSize={["17px"]} pl={"22px"} mt={["4px"]}>
              Jump into the action and compete for incredible cash prizes.
            </Text>
          </Box>
        </Box>
  
      </Box>

      <Spacer />
      <Box pl="40" display={['none','block']}>
        <Image src="qe.png" alt="wr" width="800px" />
      </Box>
      </HStack>
  
    </Stack>
  );
}
