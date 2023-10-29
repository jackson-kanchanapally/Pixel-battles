"use client";
import React, { useEffect} from "react";
import {
  Box,
  Flex,
  Text,
  chakra,
  useClipboard,
  Input,
  Button,
  Image,
  HStack,
  Spinner,
} from "@chakra-ui/react";
import { QRCodeCanvas } from "qrcode.react";
import { UserAuth } from "@/src/app/context/AuthContext";
import { Formik, Field, Form } from "formik";
import { collection, getDocs } from "firebase/firestore";
import { db, st } from "@/src/app/firebase";
import { ref, getDownloadURL, listAll, uploadBytes } from "firebase/storage";



export default function Paypage({ upiid, entryfee }) {

  const [games, setGames] = React.useState([]);
  const [players, setPlayers] = React.useState([]);

  React.useEffect(() => {
    const gamesCollection = collection(db, "games");
    const playCollection = collection(db, "registered");

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
    const getPlayers = async () => {
      try {
        const querySnapshot = await getDocs(playCollection);
        const playersData = [];
        querySnapshot.forEach((doc) => {
          playersData.push(doc.data());
        });
        setPlayers(playersData);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    getGames();
    getPlayers();
  }, []);

  const name = "pixelbattles";
  const qrData = `upi://pay?pa=${upiid}&pn=${name}&am=${entryfee}&mc=0000&tr=123456789&tn=test`;
  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={qrData}
      size={200}
      bgColor={"white"}
      level={"H"}
    />
  );
 
  return (
    <Flex bg="gray.900" justify="center" alignContent="center">
      <Flex
        direction="column"
        bg="gray.200"
        borderRadius="10px"
        pt={["10px", "30px"]}
        alignItems="center"
      >
        <Box w="200px" height="200px" bg="gray.300" borderRadius="15px">
      
          {qrcode}
        </Box>
   
        <Text
          textAlign="justify"
          fontSize="12px"
          mx="40px"
          mt="10px"
          mb="20px"
          color="gray.900"
        >
          NOTE: Take a screenshot of the successful payment. Ensure it includes
          the transaction ID, sender&apos;s name, and the exact payment amount
          mentioned, or the payment will be rejected.
        </Text>
      </Flex>
    </Flex>
  );
}
