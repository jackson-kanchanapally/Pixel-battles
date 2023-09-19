import React from "react";
import {
  Flex,
  HStack,
  Stack,
  Text,
  chakra,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useMediaQuery,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";
import bgimg from "@/public/ffbgpx.jpg";
import bgimg2 from "@/public/ffbg.jpg";
import ffsolo from "@/public/ffsolo.jpg";
import ff from "@/public/ff.jpg";
import MatchPubg from "./MatchPubg";
import Footer from "../Footer";
export default function Freefire() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const Img = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt"].includes(prop),
  });
  return (
    <Stack>
      <Stack h={["100vh", "100vh"]} overflowX="hidden">
        <Img
          src={isLargerThan800 ? bgimg : bgimg2}
          height="100vh"
          alt="bg"
          width="100vw"
          filter="opacity(40%)"
          position="absolute"
          opacity={["90%", "70%"]}
        />
        <Flex
          justifyContent="center"
          alignContent="center"
          pos="relative"
          // top={["100px", "50px"]}
          m='auto'
        >
          <Heading>Sorry ,We are still working on FreeFire</Heading>
        </Flex>
      </Stack>
      <Footer />
    </Stack>
  );
}
