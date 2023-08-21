import React from "react";
import { Box, Spacer, HStack, Image } from "@chakra-ui/react";
import { Oswald } from "@next/font/google";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500"],
});
export default function Exp() {
  return (
    <HStack width={["100%", "98vw"]} px={["4%", "270px"]} my={["15%", "5%"]}>
      <Box width={["100%", "100%"]}>
        <Box color="#cdb206" fontSize={["25", "30", "35", "34"]}>
          <h1 className={oswald.className}>
            Experience Adrenaline-Fueled Action
          </h1>
        </Box>
        <Box
          fontSize={["17", "22", "23", "23"]}
          color="gray.300"
          width={["100%", "100%"]}
          mt="10"
          pos="relative"
        >
          <p className={oswald.className}>
            PixelBattles brings you an intense gaming platform, featuring the
            best of BGMI and Free Fire tournaments. Compete for cash prizes and
            prove you&apos;re the ultimate champion in the world of esports.
          </p>
        </Box>
      </Box>

      <Spacer />
      <Box display={["none", "block"]} pt="50px" width="600px" pl="40">
        <Image src="exp.png" alt="exp" />
      </Box>
    </HStack>
  );
}
