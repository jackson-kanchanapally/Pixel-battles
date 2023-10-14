import React from "react";
import { Form, Formik, ErrorMessage } from "formik";
import { db,st } from "@/src/app/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { object, string } from "yup";
import {useRouter} from 'next/navigation'
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
import Paypage from "../components/Paypage";
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
  } catch (error) {
    console.error("Error updating spots:", error);
  }
};
const uploadQR = async (pdfData, filename, userUID) => {
  const storageRef = ref(st, `paymentDone/${userUID}${filename}`);
  const metadata = {
    contentType: "image/jpeg",
  };
  try {
    await uploadBytes(storageRef, pdfData, metadata);
  } catch (err) {
    console.log("error ", err);
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
      paymentDone:true
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
  const [paymentSuccess, setPaymentSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const validateSchema = object({
    email: string().email("Invalid email").required("Email is required"),
    username: string().required("Username is required"),
    phno: string().required("Mobile number is required"),
    paySc: string().required(
      "*Please pay the entry fee and Upload the screen shot"
    ),
  });



  const onSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);
      console.log(values.paySc);
      const filename = `${values.username}.jpg`;
      setLoading(false);
      await uploadQR(values.paySc, filename, matchName);
      await ins(values)
      await updateSpots()
      resetForm()
      router.push("/success")
    } catch (err) {
      console.error("Submission failed:", err);
    }
  };

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
            instaid: "",
            paySc: null,
            paymentDone: false,
          }}
          validationSchema={validateSchema}
          onSubmit={onSubmit}
        >
          {({setFieldValue}) => (
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
                <Stack mt="20px">
                  <Paypage upiid={upiid} entryfee={entryfee}/>
                  <Button
                    as="label"
                    htmlFor="paySc"
                    bg="gray.600"
                    mt="20px"
                    mb="20px"
                  >
                    Submit the Screenshot
                  </Button>
                  <input
                    type="file"
                    id="paySc"
                    name="paySc"
                    style={{ display: "none" }}
                    onChange={(event) => {
                      setFieldValue("paySc", event.target.files[0]);
                    }}
                  />
                  <ErrorMessage name="paySc">
                    {(msg) => (
                      <div>
                        <Text color="red.500" fontSize="sm">
                          {msg}
                        </Text>
                      </div>
                    )}
                  </ErrorMessage>
                </Stack>
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
