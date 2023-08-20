import { Flex, Box, Button, VStack } from "@chakra-ui/react";
import React from "react";
import Formi from "./Form";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
export default function Admin() {
  const vaildateSchema = Yup.object({
    game: Yup.string().required("Game is required"),
    matchname: Yup.string().required("Match name is required"),
    map: Yup.string().required("Map is required"),
    type: Yup.string().required("Type is required"),
    pricePool: Yup.string().required("Price pool is required"),
    entryfee: Yup.string().required("Entry fee is required"),
    time: Yup.string().required("Time is required"),
  });
  return (
    <Flex bg="gray.900" justify="center">
      <Box bg="gray.200" p={6} rounded="md" w={"500px"} mt="50px">
        <Formik
          initialValues={{
            game: "pubg",
            matchname: "",
            map: "",
            type:"",
            pricePool: "",
            entryfee: "",
            time: "",
          }}
          validationSchema={ vaildateSchema}
          onSubmit={(values) => console.log(values)}
        >
          {(props) => (
            <Form>
              <VStack spacing={4} align="flex-start">
             
                <Field as="select" name="game">
                  <option value="pubg" >Pubg</option>

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
