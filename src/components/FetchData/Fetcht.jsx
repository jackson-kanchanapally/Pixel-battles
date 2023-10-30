"use client";
import React from "react";
import { db } from "@/src/app/firebase";
import { collection, getDocs } from "firebase/firestore";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Input,
  Flex,
} from "@chakra-ui/react";
export default function Fetcht() {
  const [games, setGames] = React.useState([]);
  const [solof, setSolof] = React.useState([]);
  React.useEffect(() => {
    const registeredCollection = collection(db, "registered");

    const getGames = async () => {
      try {
        const querySnapshot = await getDocs(registeredCollection);
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
  }, []);
  const [matchna, setMatchna] = React.useState("");
  const [Utr, setUtr] = React.useState("");

  const handleInputMatch = (event) => {
    setMatchna(event.target.value.toUpperCase());
  };
  const handleInputUtr = (event) => {
    setUtr(event.target.value.toUpperCase());
  };
  React.useEffect(() => {
    const filterSolo = games?.filter(
      (item) =>
        item.matchName.toUpperCase().trim() === matchna.trim() &&
        item.utr.toUpperCase() === Utr
    );
    setSolof(filterSolo);
  }, [games, Utr, matchna]);
  return (
    <Box p="50px">
      <Flex gap="5">
        <Input
          type="text"
          placeholder="Match Name"
          value={matchna}
          onChange={handleInputMatch}
        />
        <Input
          type="text"
          placeholder="UTR"
          value={Utr}
          onChange={handleInputUtr}
        />
      </Flex>
      <TableContainer>
        <Table variant="simple" marginTop="30px">
          <Thead>
            <Tr>
              <Th>UTR</Th>
              <Th>Username</Th>
              <Th>Contact Number</Th>
              <Th>payment status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {solof &&
              solof.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.utr}</Td>
                  <Td>{item.username}</Td>
                  <Td>{item.phno}</Td>
                  <Td bg="green.500">
                    {item.paymentDone.toString().toUpperCase()}
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
