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
          top={["100px", "50px"]}
        >
          <Tabs
            variant="unstyled"
            h={["80vh", "80vh"]}
            w={["90vw", "580px"]}
            bg="rgba(255, 255, 255, 0.08)"
            borderRadius="10px"
          >
            <Flex
              justifyContent="center"
              // bg="rgba(0, 0, 0, 0.20)"
              borderRadius="10px"
              direction="column"
            >
              <HStack ml={["25px", "0px"]}>
                {" "}
                <Img
                  src={ff}
                  height={["60px", "70px"]}
                  alt="bg"
                  width={["60px", "70px"]}
                  borderRadius="10px"
                  position="absolute"
                  ml={["15px", "80px"]}
                />
                <Text
                  m="auto"
                  color="white"
                  py="40px"
                  fontSize={["16px", "18px"]}
                >
                  FREE FIRE
                </Text>
              </HStack>
              <Flex
                justify={"center"}
                alignItems={"center"}
                m="auto"
                fontSize={"30px"}
                color="gray.100"
                fontWeight="bold"
              >
                <Text p="80px" mt="40px">
                  Sorry !! We are still working on free fire
                </Text>
              </Flex>
            </Flex>
          </Tabs>
        </Flex>
      </Stack>
      <Footer />
    </Stack>
  );
}
