import React from "react";
import BHero from "./BHero";
import { Box, Flex, Text, Button, Spacer } from "@chakra-ui/react";
import { Oswald } from "@next/font/google";
import GameSec from "./GameSec";
import Exp from "./Exp";
import Tab from "./Table";
import Quc from "./Quic";
import Pp from "./Pp";
import Footer from "./Footer";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500"],
});
export default function BxHome() {
  return (
    <Flex >
      <Box pos="absolute" height='100%' >
     <Box>
     <BHero/>
     </Box>
        <Box
          pos="relative"
          bottom={["350", "300", "300", "500"]}
          left={["10", "10", "10", "185"]}
          fontSize={["30", "30", "52", "52"]}
          fontWeight={"bold"}
          width='70%'
          color='white'
        >
          <div className={oswald.className}>
            <p>Welcome to PixelBattles, Your Ultimate</p>
            <p>Gaming Battlefield</p>
          </div>
          <Button
            color="black"
            bgColor="#fff41f"
            rounded="none"
            mt={["10", "10", "20", "60"]}
          >
            PLAY NOW
          </Button>
        </Box>
      </Box>
      <Box pos="relative" top={["600px","900px"]}>
  
        
      <Box>
      <GameSec />
      </Box>
        <Exp/>
        <Tab/>
        <Quc/>
       <Pp/>
      <Footer/>
      </Box>
    </Flex>
  );
}
