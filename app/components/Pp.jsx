import React from "react";
import { Flex, Text, HStack, Stack, Image } from "@chakra-ui/react";
import { Oswald } from "@next/font/google";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500"],
});
export default function Pp() {
  return (
    <Flex bg="white" px={["5", "18%"]} py="5%" direction={["column", "row"]}>
      <Flex
        bg={"#dedede"}
        width={["90vw", "340px"]}
        height={["280px", "320px"]}
        ml={["0", "15px"]}

        mt={["5", ""]}
        borderRadius={["20px","40px"]}
        justify="center"
        align="center"
      >
        <Stack>
          <Image src="count.png" alt="asdf" width="140px" />
          <Text color="#444444" fontSize="40px" mt="-4">
            <span className={oswald.className}>500,000+</span>
          </Text>

          <Text color="#444444" align="center">
            <span className={oswald.className}>Players Competing</span>
          </Text>
        </Stack>
      </Flex>
      <Flex
        bg={"#dedede"}
        width={["90vw", "340px"]}
        height={["280px", "320px"]}
        ml={["0", "15px"]}
        mt={["5", ""]}
        borderRadius={["20px","40px"]}
        justify="center"
        align="center"
      >
        <Stack>
          <Image src="amo.png" alt="asdf" width="140px" />
          <Text color="#444444" fontSize="40px" mt="-4" align="center">
            <span className={oswald.className}>100+</span>
          </Text>

          <Text color="#444444" align="center">
            <span className={oswald.className}>Tournaments Monthly</span>
          </Text>
        </Stack>
      </Flex>
      <Flex
        bg={"#dedede"}
        width={["90vw", "340px"]}
        height={["280px", "320px"]}
        ml={["0", "15px"]}
        mt={["5", ""]}
        borderRadius={["20px","40px"]}
        justify="center"
        align="center"
      >
        <Stack>
          <Image src="pricce.png" alt="asdf" mt="7" width="130px" />
          <Text color="#444444" fontSize="40px" align={"center"}>
            <span className={oswald.className}>$1M+</span>
          </Text>

          <Text color="#444444" align="center">
            <span className={oswald.className}>Total Prize Pool</span>
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
}
