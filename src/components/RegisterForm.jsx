import React from "react";
import { Form, Formik, ErrorMessage } from "formik";
import { db,st } from "@/src/app/firebase";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { object, string } from "yup";
import UTRex from '@/public/UTRex.jpg'
import Image from "next/image";
import {useRouter} from 'next/navigation'
import {
  Flex,
  Box,
  Text,
  Button,
  HStack,
  Heading,
  Stack,
  chakra
} from "@chakra-ui/react";

import Formi from "@/src/components/Form";
import Paypage from "../components/Paypage";
const updateSpots = async (matchName) => {
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
  } catch (error) {
    console.error("Error updating spots:", error);
  }
};
const ins = async (values) => {
  try {
    const userDocRef = doc(db, "registered",  values.matchName, "users", values.username) || null;
    const userData = {
      username: values.username,
      phno: values.phno,
      email: values.email,
      instaid: values.instaid,
      paymentDone:true,
      matchName:values.matchName,
      utr:values.utr
    };
    await setDoc(userDocRef, userData);
  } catch (err) {
    console.error("Error creating user doc:", err);
  }
};
export default function RegisterForm({
  type,
  entryfee,
  mapName,
  matchName,
  upiid,
}) {
  const router=useRouter()
  const [loading, setLoading] = React.useState(false);
  const validateSchema = object({
    email: string().email("Invalid email").required("Email is required"),
    username: string().required("Username is required"),
    phno: string().required("Mobile number is required"),
    utr: string().required("UTR number is required"),
  });
  const onSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);
      await ins(values)
      await updateSpots(matchName)
      resetForm()
      router.push("/success")
    } catch (err) {
      console.error("Submission failed:", err);
    }
  };
  const Img = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt"].includes(prop),
  });
  return (
    <Flex justifyContent="center" align="center">
      <Box
        w={["90vw", "90vw"]}
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
            // instaid: "",
            paymentDone: false,
            utr:"",
            matchName:matchName
          }}
          validationSchema={validateSchema}
          onSubmit={onSubmit}
        >
          {({setFieldValue}) => (
            <Form>
              <Formi
                label="Pubg Username"
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
              {/* <Formi
                label="Instagram ID"
                id="instaid"
                name="instaid"
                type="text"
                variant="filled"
                mb="10px"
                color="white"
                bg="gray.800"
              /> */}
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
                    Entry Fee: {entryfee != 0 ? `\u20B9 ${entryfee}` : "Free Match"}
                    </Heading>
                  </Box>
                </HStack>
                <HStack>
                  <Box>
                    <Heading fontSize="13.5px">Map : {mapName}</Heading>
                  </Box>
                </HStack>
              {entryfee!=0?  <Stack mt="20px">
                  <Paypage upiid={upiid} entryfee={entryfee}/>
                  <Formi
                      label="UTR number"
                      id="utr"
                      name="utr"
                      type="text"
                      variant="filled"
                      color="white"
                      bg="gray.800"
                  />
                    <Box >
                    {/* <Img w="80%" m="auto" src={UTRex} alt="utr"/> */}
                    <Text my="20px">Note: Copy the UTR number on the complition of the payment and paste here</Text>
                    </Box>
                </Stack>:""}
              </Stack>
              <Box m="auto" mt="10px" color="white">
                {/* Contest BGMI Solo #1 will start on */}
              </Box>
              <Button
                _hover={{ bg: "yellow.300" }}
                w="full"
                bg="yellow.400"
                mt="0px"
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
