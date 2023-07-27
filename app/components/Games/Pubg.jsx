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
import bgimg from "@/public/pubgback.jpg";
import bgimg2 from "@/public/pubgback2.jpg";
import pubg1 from "@/public/pubg1.jpg";
import pubgsqd from "@/public/pubgsqd.jpg";
import pubgsolo from "@/public/pubgsoloo.jpg";
import pubgstdm from "@/public/pubgtdm.jpg";
import MatchPubg from "./MatchPubg";
export default function Pubg() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const Img = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt"].includes(prop),
  });
  return (
    <Stack h="100vh" overflowX="hidden">
      <Img
        src={isLargerThan800 ? bgimg : bgimg2}
        height="100%"
        alt="bg"
        width="100vw"
        filter="opacity(40%)"
        position="absolute"
        opacity="30%"
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
          w={['400px','580px']}
          bg="rgba(255, 255, 255, 0.08)"
          borderRadius="10px"
        >
          <Flex
            justifyContent="center"
            // bg="rgba(0, 0, 0, 0.20)"
            borderRadius="10px"
            direction="column"
          >
            <HStack ml={['25px','0px']}>
              {" "}
              <Img
                src={pubg1}
                height={["50px", "70px"]}
                alt="bg"
                width={["50px", "70px"]}
                borderRadius="10px"
                position="absolute"
                ml={["20px", "80px"]}
              />
              <Text m="auto" py="40px" pl='15px' fontSize={["15px", "18px"]}>
                BATTLEGROUNDS MOBILE INDIA
              </Text>
            </HStack>
            <TabList
              // bg="rgba(0, 0, 0, 0.80)"
              width={["400px", "600px"]}
              borderRadius="10px"
              color='white'
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
              <MatchPubg
                image={pubgsolo}
                alt="hello"
                matchName="Solo asdf asdf asdfas"
                mapName="erangel"
                time="12:00"
                entryFee='100'
                platform='mobile'
                prize='1000'
                spots='100'
              />
            </TabPanel>
            <TabPanel>
            <MatchPubg
                image={pubgsqd}
                alt="hello"
                matchName="Solo asdf asdf asdfas"
                mapName="erangel"
                time="12:00"
                entryFee='100'
                platform='mobile'
                prize='1000'
                spots='100'
              />
            </TabPanel>
            <TabPanel>
            <MatchPubg
                image={pubgstdm}
                alt="hello"
                matchName="Solo asdf asdf asdfas"
                mapName="erangel"
                time="12:00"
                entryFee='100'
                platform='mobile'
                prize='1000'
                spots='100'
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Stack>
  );
}
