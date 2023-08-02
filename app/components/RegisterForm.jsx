"use client";
import React from "react";
import { Form, Formik } from "formik";
import { object, string, number, date, InferType } from 'yup';
import {
  Flex,
  Box,
  Text,
  Button,
  HStack,
  VStack,
  Heading,
} from "@chakra-ui/react";

import Formi from "@/app/components/Form";
export default function RegisterForm({ type, gameMap, entryfee }) {
  const vaildateSchema = object({
    email: string().email("Invalid email").required("Email is required"),
    username: string().required("Username is required"),
  });
  const onSubmit = async (val, { resetForm }) => {
    alert(val.email + "  " + val.pass);
  };

  return (
    <Flex
      justifyContent="center"
      align="center"
      bg="gray.900"
      m="auto"
      h="100vh"
    >
      {" "}
      <Box bg="gray.200" w={["90vw", "40vw"]} p="50px" borderRadius="10px">
        <Formik
          initialValues={{
            username: "",
            phno: "",
            email: "",
          }}
          validationSchema={vaildateSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <Formi
                label="Username"
                id="username"
                name="username"
                type="text"
                variant="filled"
                color="black"
              />

              <Box mb="10px">
                <Text fontSize="12" p="2" color="gray.400">
                  Copy your game username and paste here*
                </Text>
              </Box>
              <Formi
                label="Phone Number"
                id="phone number"
                name="phone number"
                type="number"
                variant="filled"
                mb="10px"
              />
              <Formi
                label="Email Address"
                id="email"
                name="email"
                type="email"
                variant="filled"
              />
              <Flex mt="10px">
                <VStack>
                  <Box>
                    <Heading fontSize="17px">About Contest :</Heading>
                  </Box>
                  <HStack>
                    {" "}
                    <Box>
                      <Heading fontSize="14px">Type : {type}</Heading>
                    </Box>
                    <Box>
                      <Heading fontSize="14px">Map : {gameMap}</Heading>{" "}
                    </Box>
                  </HStack>
                  <Box>
                    <Heading fontSize="14px">Entry Fee : {entryfee}</Heading>{" "}
                  </Box>
                </VStack>
              </Flex>
              <Flex m="auto">
                <Box>Contest BGMI Solo #1 will start on</Box>{" "}
              </Flex>
              <Button
                _hover={{ bg: "yellow.300" }}
                w="full"
                bg="yellow.400"
                mt="20px"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
