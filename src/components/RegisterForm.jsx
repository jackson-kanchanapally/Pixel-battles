import React from "react";
import { Form, Formik } from "formik";
import { db } from "@/src/app/firebase";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { object, string } from "yup"; // Remove unused imports
import axios from "axios";
import {
  Flex,
  Box,
  Text,
  Button,
  HStack,
  Heading,
  Stack,
} from "@chakra-ui/react";

import Formi from "@/src/components/Form";
import { resolve } from "path";
export default function RegisterForm({ type, entryfee, mapName, matchName }) {
  const [paymentSuccess, setPaymentSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const validateSchema = object({
    email: string().email("Invalid email").required("Email is required"),
    username: string().required("Username is required"),
    phno: string().required("Mobile number is required"),
  });

  const updateSpots = async () => {
    try {
      const spotDocRef = doc(db, "games", matchName);
      const spotsDocSnap = await getDoc(spotDocRef);

      if (!spotsDocSnap.exists) {
        return;
      }

      const spots = spotsDocSnap.data().spots;
      const spotsInt = parseInt(spots);
      const updatedSpots = spotsInt - 1;

      await updateDoc(spotDocRef, {
        spots: String(updatedSpots),
      });

      console.log("Updated spots:", updatedSpots);
      // resolve();
    } catch (error) {
      console.error("Error updating spots:", error);
    }
  };

  const handleStripePayment = async () => {
    try {
      const amt = parseInt(entryfee * 100);
      const { data } = await axios.post(
        "/api/payment",
        {
          priceId: amt,
          name: matchName,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      window.location.assign(data);
      setPaymentSuccess(true);
    } catch (err) {
      console.log("Failed to initiate Stripe payment");
    }
  };
  const ins = async (values) => {
    try {
      const userDocRef = doc(db, "registered", values.username) || null;
      const userData = {
        username: values.username,
        phno: values.phno,
        email: values.email,
        instaid: values.instaid,
      };

      await setDoc(userDocRef, userData);
      console.log(userDocRef);
    } catch (err) {
      console.error("Error creating user doc:", err);
    }
  };
  const onSubmit = async (values) => {
    try {
      setLoading(true);
      await handleStripePayment();
      if (paymentSuccess) {
        await updateSpots();
        await ins(values);
      }
      
      setLoading(false);
    } catch (err) {
      console.error("Submission failed:", err);
    } 
  };

  return (
    <Flex justifyContent="center" align="center">
      <Box
        w={["60vw", "90vw"]}
        p="20px"
        borderRadius="10px"
        bg="gray.800"
        color="gray.100"
      >
        <Formik
          initialValues={{
            username: "",
            phno: "",
            email: "",
            instaid: "",
          }}
          validationSchema={validateSchema}
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
                color="white"
                bg="gray.800"
              />

              <Box mb={["0px", "10px"]}>
                <Text fontSize="12" p="2" color="gray.400">
                  Copy your game username and paste it here*
                </Text>
              </Box>
              <Formi
                label="Instagram ID"
                id="instaid"
                name="instaid"
                type="text"
                variant="filled"
                mb="10px"
                color="white"
                bg="gray.800"
              />
              <Formi
                label="Phone Number"
                id="phno"
                name="phno"
                type="tel"
                variant="filled"
                mb="10px"
                color="white"
                bg="gray.800"
              />
              <Formi
                label="Email Address"
                id="email"
                name="email"
                type="email"
                variant="filled"
                color="white"
                bg="gray.800"
              />
              <Stack mt="15px" color="white">
                <HStack spacing="35px">
                  <Box>
                    <Heading fontSize="13.5px">
                      Type : {type?.toUpperCase()}
                    </Heading>
                  </Box>
                  <Box>
                    <Heading fontSize="14px">
                      Entry Fee : &#8377;{entryfee}
                    </Heading>
                  </Box>
                </HStack>
                <HStack>
                  <Box>
                    <Heading fontSize="13.5px">Map : {mapName}</Heading>
                  </Box>
                </HStack>
              </Stack>
              <Box m="auto" mt="10px" color="white">
                Contest BGMI Solo #1 will start on
              </Box>
              <Button
                _hover={{ bg: "yellow.300" }}
                w="full"
                bg="yellow.400"
                mt="20px"
                type="submit"
                isLoading={loading}
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
