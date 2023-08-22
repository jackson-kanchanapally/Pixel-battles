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
  Spinner,
} from "@chakra-ui/react";

import Link from "next/link";
import Image from "next/image";
import bgimg from "@/public/pubgback.jpg";
import bgimg2 from "@/public/pubgback2.jpg";
import pubg1 from "@/public/pubg1.jpg";
import pubgsquad from "@/public/pubgsquad.jpg";
import pubgsolo from "@/public/pubgsolo.jpg";
import pubgstdm from "@/public/pubgtdm.jpg";
import MatchPubg from "./MatchPubg";
import Footer from "../Footer";
import PopMatch from "./PopMatch";
import { db } from "@/src/app/firebase";
import {
  collection,
  getDocs,
} from "firebase/firestore";
export default function Pubg() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const Img = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt"].includes(prop),
  });
  function formatDate(inputDate) {
    const dateObj = new Date(inputDate);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
  
    return `${month} ${day}`;
  }
  const [games, setGames] = React.useState([]);
  const [solof, setSolof] = React.useState([]);
  const [sqdf, setSqdf] = React.useState([]);
  const [tdmf, setTdmf] = React.useState([]);
  React.useEffect(() => {
    const gamesCollection = collection(db, "games");

    const getGames = async () => {
      try {
        const querySnapshot = await getDocs(gamesCollection);
        const gamesData = [];
        querySnapshot.forEach((doc) => {
          gamesData.push(doc.data());
        });
        setGames(gamesData);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    getGames();
    const filterSolo = games?.filter((item) => item.type === "solo");
    setSolof(filterSolo);
    const filterSqd = games?.filter((item) => item.type === "squad");
    setSqdf(filterSqd);

    const filterTdm = games?.filter((item) => item.type === "tdm");
    setTdmf(filterTdm);
  }, [games]);

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
            h={["100%", "100%"]}
            w={["90vw", "580px"]}
            // bg="rgba(255, 255, 255, 0.08)"
            bg="gray.800"
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
      
                {solof?
                  (
                    solof.map((game, index) => (
                      <MatchPubg
                        key={index}
                        image={`/pubg${game.type}.jpg`}
                        alt="hello"
                        matchName={game.matchname?.toUpperCase()}
                        time={game.time}
                        entryfee={game.entryfee}
                        platform="mobile"
                        prize={game.pricePool}
                        spots={game.spots}
                        type={game.type?.toUpperCase()}
                        gameMap={game?.map}
                        mapName={game.map?.toUpperCase()}
                        dat={formatDate(game.date)}
                      ></MatchPubg>
                    ))
                  ):(
                    <Spinner size='lg' color='yellow.400' ml='45%' mt='20%' mb='20%'/>
                  )}
              </TabPanel>
              <TabPanel>
                {sqdf ?
                  sqdf.map((game, index) => (
                    <MatchPubg
                      key={index}
                      image={`/pubg${game.type}.jpg`}
                      alt="hello"
                      matchName={game.matchname?.toUpperCase()}
                      time={game.time}
                      entryfee={game.entryfee}
                      platform="mobile"
                      prize={game.pricePool}
                      spots={game.spots}
                      // onClick={<RegisterForm />}
                      type={game.type?.toUpperCase()}
                      gameMap={game.map}
                      mapName={game.map?.toUpperCase()}
                      dat={formatDate(game.date)}
                    />
                  )):
                  (
                    <Spinner size='lg' color='yellow.400' ml='45%' mt='20%' mb='20%'/>
                  )}
              </TabPanel>
              <TabPanel>
                {tdmf ?
                  tdmf.map((game, index) => (
                    <MatchPubg
                      key={index}
                      image={`/pubg${game.type}.jpg`}
                      alt="hello"
                      matchName={game.matchname?.toUpperCase()}
                      time={game.time}
                      entryfee={game.entryfee}
                      platform="mobile"
                      prize={game.pricePool}
                      spots={game.spots}
                      dat={formatDate(game.date)}
                      type={game.type?.toUpperCase()}
                      gameMap={game.map}
                      mapName={game.map?.toUpperCase()}
                    />
                  ))
                :(
                  <Spinner size='lg' color='yellow.400' ml='45%' mt='20%' mb='20%'/>
                )
                }
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Stack>
      <Footer />
    </Stack>
  );
}
