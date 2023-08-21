"use client";
import React from "react";
import { Form, Formik } from "formik";
import { object, string, number, date, InferType } from "yup";
import {
  Flex,
  Box,
  Text,
  Button,
  HStack,
  VStack,
  Heading,
  Spacer,
  Stack,
} from "@chakra-ui/react";

import Formi from "@/src/components/Form";
export default function RegisterForm({ type, gameMap, entryfee,mapName }) {
  const vaildateSchema = object({
    email: string().email("Invalid email").required("Email is required"),
    username: string().required("Username is required"),
    phno:string().required("Mobile number is required")
  });
  const onSubmit = async (val, { resetForm }) => {
    alert(val);
  };

  return (
    <Flex
      justifyContent="center"
      align="center"
    >
      {" "}
      <Box bg="gray.200" w={["60vw", "90vw"]} p="20px" borderRadius="10px">
        <Formik
          initialValues={{
            username: "",
            phno: "",
            email: "",
            instaid:"",
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

              <Box mb={['0px',"10px"]}>
                <Text fontSize="12" p="2" color="gray.400">
                  Copy your game username and paste here*
                </Text>
              </Box>
              <Formi
                label="Instagram ID"
                id="instaid"
                name="instaid"
                type="text"
                variant="filled"
                mb="10px"
                color="black"
              />
              <Formi
                label="Phone Number"
                id="phone number"
                name="phone number"
                type="number"
                variant="filled"
                mb="10px"
                color="black"
              />
              <Formi
                label="Email Address"
                id="email"
                name="email"
                type="email"
                variant="filled"
                color="black"
              />
              <Stack
                mt="15px"
                color="black"
              >
                {" "}
                <HStack spacing='35px'> 
                  <Box>
                    <Heading fontSize="13.5px">Type : {type}</Heading>
                  </Box>

                  <Box color="black" >
                    <Heading color="black" fontSize="14px">
                      Entry Fee : &#8377;{entryfee}
                    </Heading>{" "}
                  </Box>
                </HStack>
             <HStack>
             <Box>
                      <Heading fontSize="13.5px">Map : {mapName}</Heading>{" "}
                    </Box>
             </HStack>
              </Stack>
              <Flex m="auto" mt="10px" color="black">
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
