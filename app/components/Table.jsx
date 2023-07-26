import React from "react";
import { Oswald } from "@next/font/google";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500"],
});
import { HStack, Stack, Box, Text } from "@chakra-ui/react";
export default function Tab() {
  return (
    <Stack px={["4%", "270px"]} my="10%">
      <Box color="#cdb206" fontSize={['15',"20"]}>
        <h1 className={oswald.className}>WINNERS</h1>
      </Box>
      <HStack>
        <Box color="white" fontSize={['15',"18"]}>
          <Text>asdf</Text>
        </Box>
        <Box color="white" fontSize={['15',"18"]} ml="70%" align="right">
          <Text align="right">asdf</Text>
        </Box>
      </HStack>
      <HStack>
        <Box color="white" fontSize={['15',"18"]}>
          <Text>asdf</Text>
        </Box>
        <Box color="white" fontSize={['15',"18"]} ml="70%" align="right">
          <Text>asdf</Text>
        </Box>
      </HStack>

      <HStack>
        <Box color="white" fontSize={['15',"18"]}>
          <Text>asdf</Text>
        </Box>
        <Box color="white" fontSize={['15',"18"]} ml="70%" align="right">
          <Text>asdf</Text>
        </Box>
      </HStack>

      <HStack>
        <Box color="white" fontSize={['15',"18"]}>
          <Text>asdf</Text>
        </Box>
        <Box color="white" fontSize={['15',"18"]} ml="70%" align="right">
          <Text>asdf</Text>
        </Box>
      </HStack>
    </Stack>
  );
}
