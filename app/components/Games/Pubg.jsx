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
  Button,
} from "@chakra-ui/react";

import Link from "next/link";
import Image from "next/image";
import bgimg from "@/public/pubgback.jpg";
import bgimg2 from "@/public/pubgback2.jpg";
import pubg1 from "@/public/pubg1.jpg";
import pubgsqd from "@/public/pubgsqd.jpg";
import pubgsolo from "@/public/pubgsoloo.jpg";
import pubgstdm from "@/public/pubgtdm.jpg";
import MatchPubg from "./MatchPubg";
import Footer from "../Footer";
import PopMatch from "./PopMatch";
export default function Pubg() {
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

        <Link href="/">
          <Button
            left="10px"
            top={["25px", "10px"]}
            color="white"
            opacity="70%"
            bg="black"
            w="100px"
            pos="relative"
          >
            Back
          </Button>
        </Link>
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
                  src={pubg1}
                  height={["50px", "70px"]}
                  alt="bg"
                  width={["50px", "70px"]}
                  borderRadius="10px"
                  position="absolute"
                  ml={["15px", "80px"]}
                />
                <Text
                  m="auto"
                  color="white"
                  py="40px"
                  pl={["38px", ""]}
                  fontSize={["13px", "18px"]}
                >
                  BATTLEGROUNDS MOBILE INDIA
                </Text>
              </HStack>
              <TabList
                // bg="rgba(0, 0, 0, 0.80)"
                width={["90vw", "600px"]}
                borderRadius="10px"
                color="white"
              >
                <Tab
                  w="200px"
                  borderLeftRadius="10px"
                  _selected={{ color: "yellow.400" }}
                >
                  SOLO
                </Tab>
                <Tab w="200px" _selected={{ color: "yellow.400" }}>
                  SQUAD
                </Tab>
                <Tab
                  w="200px"
                  borderRightRadius="10px"
                  _selected={{ color: "yellow.400" }}
                >
                  TDM
                </Tab>
              </TabList>
            </Flex>
            <TabPanels>
              <TabPanel>
                {/* <Link
                  href={{
                    pathname: "/game/pubg/form",
                    query: { matchNumber: "123", gameName: "pubg" },
                  }}
                > */}
                <MatchPubg
                  image={pubgsolo}
                  alt="hello"
                  matchName="Solo asdf asdf asdfas"
                  time="12:00"
                  entryfee="100"
                  platform="mobile"
                  prize="1000"
                  spots="100"
                  // onClick={<RegisterForm />}
                  type="SOLO"
                  gameMap="ERANGLE"
                  mapName="erangle"
                ></MatchPubg>
                {/* </Link>  */}
                {/* <PopMatch/> */}
              </TabPanel>
              <TabPanel>
                <MatchPubg
                  image={pubgsqd}
                  alt="hello"
                  matchName="Squad"
                  time="12:00"
                  entryfee="100"
                  mapName="erangle"
                  platform="mobile"
                  prize="1000"
                  spots="100"
                  type="SQUAD"
                />
              </TabPanel>
              <TabPanel>
                <MatchPubg
                  image={pubgstdm}
                  alt="hello"
                  matchName="Solo asdf asdf asdfas"
                  mapName="erangel"
                  time="12:00"
                  entryfee="100"
                  platform="mobile"
                  prize="1000"
                  spots="100"
                  type="TDM"
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Stack>
      <Footer />
    </Stack>
  );
}
