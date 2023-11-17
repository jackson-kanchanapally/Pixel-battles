"use client";
import React from "react";

import { Box, Flex, Text, Button, Heading } from "@chakra-ui/react";
import { Oswald } from "@next/font/google";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

import BHero from "@/src/components/BHero";

export default function BxHome() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  return (
    <Flex>
      <Box pos="absolute" height={['100vh',"100%"]}>
        <Box>
          <BHero />
        </Box>
        <Box
          pos="relative"
          bottom={["350", "300", "300", "500"]}
          left={["10", "10", "10", "185"]}
        //  top={['-480']}
          
          fontSize={["30", "30", "52", "52"]}
          fontWeight={"bold"}
          width="75%"
          
        >
          <Box textAlign="center" py={10} px={6} >
            <CheckCircleIcon boxSize={"60px"} color={"green.500"} />
            <Heading as="h2" size="xl" mt={6} mb={4} color="gray.100">
              Congratulations! You&apos;re in for the next Battle!
            </Heading>
            <Text color={"gray.500"} fontSize="lg" mb={6}>
            you will receive your room I&apos;d details before 30 minutes via Email
            </Text>
            <Text color="yellow.500" fontSize="sm">Check your spam list</Text>
            <Button
              size="lg"
              colorScheme="teal"
              color="black"
              bgColor="#fff41f"
              _hover={{ bg: "teal.600" }}
              _active={{ bg: "teal.700" }}
              isLoading={loading}
              onClick={() => {
                setLoading(true);
                router.push("/game/pubg");
              }}
            >
              Start Exploring
            </Button>
          </Box>
        </Box>
      </Box>
   
    </Flex>
  );
}
