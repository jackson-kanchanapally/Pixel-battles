import React from "react";
import BHero from "./BHero";
import { Box, Flex, Text, Button, Spacer } from "@chakra-ui/react";
import { Oswald } from "@next/font/google";
import GameSec from "./GameSec";
import Exp from "./Exp";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500"],
});
export default function BxHome() {
  return (
    <Flex justify="center">
      <Box pos="absolute" height='100%'>
        <BHero />
        <Box
          pos="relative"
          bottom={["300", "300", "300", "500"]}
          left={["10", "10", "10", "-55"]}
          fontSize={["30", "30", "52", "52"]}
          fontWeight={"bold"}
        >
          <div className={oswald.className}>
            <p>Welcome to PixelBattles, Your Ultimate</p>
            <p>Gaming Battlefield</p>
          </div>
          <Button
            color="white"
            bgColor="rgb(139, 132, 0)"
            rounded="none"
            mt={["10", "10", "20", "60"]}
          >
            PLAY NOW
          </Button>
        </Box>
      </Box>
      <Box pos="relative" top="900px">
  
        
      <Box>
      <GameSec />
      </Box>

      </Box>
    </Flex>
  );
}
