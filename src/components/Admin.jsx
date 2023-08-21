'use client'
import { Flex, Box, Button, VStack, Text } from "@chakra-ui/react";
import React from "react";
import Formi from "./Form";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { db } from "@/src/app/firebase";
import {
  doc,
  setDoc,
 
} from "firebase/firestore";
import { UserAuth } from "@/src/app/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Admin() {
  const { user } = UserAuth();
  const [loading, setLoading] = React.useState(false);
  const [gameList, setGameList] = React.useState([]);
  const router = useRouter();
  let currentUser = null;

  // if (user) {
  //   currentUser = user.uid;
  // } else {
  //   router.push("/login");
  // }

  const [games, setGames] = React.useState([]);
  // React.useEffect(() => {
  //   // Define the Firestore collection reference
  //   const gamesCollection = collection(db, "games");

  //   // Use getDocs to retrieve data from the "games" collection
  //   const getGames = async () => {
  //     try {
  //       const querySnapshot = await getDocs(gamesCollection);
  //       const gamesData = [];
  //       querySnapshot.forEach((doc) => {
  //         gamesData.push(doc.data());
  //       });
  //       setGames(gamesData);
  //     } catch (error) {
  //       console.error("Error fetching games:", error);
  //     }
  //   };

  //   // Call the function to retrieve the games
  //   getGames();
  // }, []);
  // console.log(games)
  async function saveData(gameData) {
    try {
      const gameDocRef = doc(db, "games", gameData.matchname);
      await setDoc(gameDocRef, gameData);
      console.log(`Successfully added ${gameData.game}`);
    } catch (err) {
      console.error(`Error adding ${gameData.game}:`, err);
    }
  }
  const onSubmit = async (val, { resetForm }) => {
    const gameData = {
      game: val.game,
      matchname: val.matchname,
      map: val.map,
      type: val.type,
      pricePool: val.pricePool,
      entryfee: val.entryfee,
      time: val.time,
    };
    if (currentUser) {
      await saveData(gameData);
      setGameList([...gameList, gameData]);
    }

    resetForm();
    setLoading(true);
  };
  const vaildateSchema = Yup.object({
    game: Yup.string().required("Game is required"),
    matchname: Yup.string().required("Match name is required"),
    map: Yup.string().required("Map is required"),
    type: Yup.string().required("Type is required"),
    pricePool: Yup.string().required("Price pool is required"),
    entryfee: Yup.string().required("Entry fee is required"),
    time: Yup.string().required("Time is required"),
    date: Yup.string().required("Date is required"),
  });
  return (
    <Flex bg="gray.900" justify="center">
      <Box bg="gray.200" p={6} rounded="md" w={"500px"} mt="50px">
        <Formik
          initialValues={{
            game: "pubg",
            matchname: "",
            map: "",
            type: "",
            pricePool: "",
            entryfee: "",
            date: "",
            time: "",
          }}
          validationSchema={vaildateSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <VStack spacing={4} align="flex-start">
                <Field as="select" name="game">
                  <option value="pubg">Pubg</option>

                  <option value="freefire">Freefire</option>
                </Field>

                <Formi
                  label="Match Name"
                  id="matchname"
                  name="matchname"
                  type="text"
                  variant="filled"
                />
                <Formi
                  label="Match Type (Solo / Squad / TDM)"
                  id="type"
                  name="type"
                  type="text"
                  variant="filled"
                />
                <Formi
                  label="Map"
                  id="map"
                  name="map"
                  type="text"
                  variant="filled"
                />
                <Formi
                  label="Prize Pool"
                  id="pricePool"
                  name="pricePool"
                  type="number"
                  variant="filled"
                />
                <Formi
                  label="Entry Fee"
                  id="entryfee"
                  name="entryfee"
                  type="number"
                  variant="filled"
                />
                <Formi
                  label="Date"
                  id="date"
                  name="date"
                  type="date"
                  variant="filled"
                />
                <Formi
                  label="Time"
                  id="time"
                  name="time"
                  type="time"
                  variant="filled"
                />

                <Button type="submit" bg="yellow.400" w="full">
                  Add Match
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
