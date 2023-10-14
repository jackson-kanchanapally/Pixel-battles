"use client";
import { Flex, Box, Button, VStack, Text } from "@chakra-ui/react";
import React from "react";
import Formi from "./Form";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { db, st } from "@/src/app/firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { UserAuth } from "@/src/app/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Admin() {
  const { user } = UserAuth();
  const [loading, setLoading] = React.useState(false);
  const [gameList, setGameList] = React.useState([]);
  const router = useRouter();
  let currentUser = null;

  if (user) {
    currentUser = user.uid;
  }
  const [games, setGames] = React.useState([]);

  async function saveData(gameData) {
    try {
      const gameDocRef = doc(db, "games", gameData.matchname);

      await setDoc(gameDocRef, gameData);
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
      date: val.date,
      spots: 100,
      upiid: val.upiid,
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
    upiid: Yup.string().required("Upi id is required")
  });
  return (
    <Flex bg="gray.900" justify="center" color="gray.900">
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
            date: "",
            // upiQr: null,
            upiid: "",
          }}
          validationSchema={vaildateSchema}
          onSubmit={onSubmit}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <VStack spacing={4} align="flex-start">
                <Field
                  style={{ backgroundColor: "white", color: "black" }}
                  as="select"
                  name="game"
                >
                  <option
                    value="pubg"
                    style={{ backgroundColor: "white", color: "black" }}
                  >
                    Pubg
                  </option>

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
                <Formi
                  label="upi Id"
                  id="upiid"
                  name="upiid"
                  type="text"
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
