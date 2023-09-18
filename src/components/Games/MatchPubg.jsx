// import React from "react";
// import {
//   Box,
//   HStack,
//   Stack,
//   Text,
//   Flex,
//   chakra,
//   Progress,
//   Button,
//   Image,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
// } from "@chakra-ui/react";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,

// } from "@chakra-ui/react";
// import { Oswald } from "@next/font/google";
// const oswald = Oswald({
//   subsets: ["latin"],
//   weight: ["500"],
// });

// // import Image from "next/image";
// import RegisterForm from "../RegisterForm";
// export default function MatchPubg({
//   image,
//   alt,
//   matchName,
//   time,
//   mapName,
//   prize,
//   platform,
//   spots,
//   type,
//   gameMap,
//   entryfee,
//   dat
// }) {
//   const Img = chakra(Image, {
//     shouldForwardProp: (prop) =>
//       ["width", "height", "src", "alt"].includes(prop),
//   });
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   return (
//     <Flex
//       px="20px"
//       bg="rgba(0, 0, 0, 0.50)"
//       // bg='gray.900'
//       // h={["210px", "290px"]}
//       h={["168px", "255px"]}
//       m="auto"
//       mt="10px"
//       py={["15px","25px"]}
//       w="100%"
//       boxShadow="lg"
//       borderRadius="15px"
//       direction="column"
//       alignItems="center"
//     >
//       <HStack>
//         <Img
//           src={image}
//           alt={alt}
//           width={["85px", "120px"]}
//           borderRadius="10px"
//           ml={["34px", "-10"]}
//         />
//         <Box ml={["8px","10px" ]} w='290px'>
//           <Text as="b" fontSize={["12px", "18"]} color="white" >
//             {matchName?.toUpperCase()}
//           </Text>
//           <Box color="gray.400"  w='290px'>
//             <Text fontSize={["9px", "15px"]}>
//               MAP : {mapName}&nbsp;|&nbsp;TIME :
//               {time}&nbsp;|&nbsp;{dat}
//             </Text>
//           </Box>
//         </Box>
//       </HStack>
//       <HStack mt={["10px", "20px"]}>
//         <Box
//           bg="rgba(0, 0, 0, 0.80)"
//           height={["50px", "70px"]}
//           pt={["17px", "15px"]}
//           fontSize={["9px", "14px"]}
//           width={["65px", "110px"]}
//           borderRadius="10px"
//           align="center"
//           color="white"
//         >
//           PRIZE POOL :
//           <br />
//           <Text color="yellow.400"> &#8377; {prize} </Text>
//         </Box>
//         <Box
//           bg="rgba(0, 0, 0, 0.80)"
//            height={["50px", "70px"]}
//           pt={["17px", "15px"]}
//           fontSize={["9px", "14px"]}
//           width={["65px", "110px"]}
//           borderRadius="10px"
//           align="center"
//           color="white"
//         >
//           PLATFORM :
//           <br />
//           <Text color="yellow.400"> {platform.toUpperCase()} </Text>
//         </Box>
//         <Box
//           bg="rgba(0, 0, 0, 0.80)"
//            height={["50px", "70px"]}
//           pt={["17px", "15px"]}
//           fontSize={["9px", "14px"]}
//           width={["65px", "110px"]}
//           borderRadius="10px"
//           align="center"
//           color="white"
//         >
//           ENTRY FEE :
//           <br />
//           <Text color="yellow.400"> &#8377; {entryfee}</Text>
//         </Box>
//         <Box
//           // bg="rgba(0, 0, 0, 0.80)"
//            height={["50px", "70px"]}
//           pt={["17px", "15px"]}
//           fontSize={["9px", "14px"]}
//           width={["65px", "110px"]}
//           borderRadius="10px"
//           align="center"
//           color="white"
//           mt={['-32px','-30px']}
//         >
//           <Popover placement='auto' >
//             <PopoverTrigger>
//               <Button  height={["48px", "70px"]} width={["65px", "110px"]} fontSize={['15px','18px']} color='white' bg='black' isDisabled={spots==0?true:false}>{spots==0?"Full":"Join"}</Button>
//             </PopoverTrigger>
//             <PopoverContent w={['60vw',"400px"]} borderRadius="10px">
//               <RegisterForm type={type}  mapName={mapName} entryfee={entryfee} matchName={matchName}/>
//             </PopoverContent>
//           </Popover>
//         </Box>
//       </HStack>
//       {spots&&<Box w={["100%", "90%"]} py={["8px", "20px"]}>
//         <Progress
//           colorScheme="yellow"
//           borderRadius="10px"
//           bg="gray.800"
//           value={100-spots}
//           size={["xs", "sm"]}
//         />
//         <Flex py="10px" fontSize={["10px","13px"]} color="gray.400">
//           SPOTS LEFT : &nbsp;<Text color="yellow.400">{spots}</Text>
//         </Flex>
//       </Box>}
//     </Flex>
//   );
// }
import React from "react";
import {
  Box,
  HStack,
  Stack,
  Text,
  Flex,
  chakra,
  Progress,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,

} from "@chakra-ui/react";
import { Oswald } from "@next/font/google";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500"],
});

// import Image from "next/image";
import RegisterForm from "../RegisterForm";
export default function MatchPubg({
  image,
  alt,
  matchName,
  time,
  mapName,
  prize,
  platform,
  spots,
  type,
  gameMap,
  entryfee,
  dat
}) {
  const Img = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt"].includes(prop),
  });
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex
      px="20px"
      bg="rgba(0, 0, 0, 0.50)"
      // bg='gray.900'
      // h={["210px", "290px"]}
      h={["168px", "255px"]}
      m="auto"
      mt="10px"
      py={["15px","25px"]}
      w="100%"
      boxShadow="lg"
      borderRadius="15px"
      direction="column"
      alignItems="center"
    >
      <HStack>
        <Img
          src={image}
          alt={alt}
          width={["85px", "120px"]}
          borderRadius="10px"
          ml={["34px", "-10"]}
        />
        <Box ml={["8px","10px" ]} w='290px'>
          <Text as="b" fontSize={["12px", "18"]} color="white" >
            {matchName?.toUpperCase()}
          </Text>
          <Box color="gray.400"  w='290px'>
            <Text fontSize={["9px", "15px"]}>
              MAP : {mapName}&nbsp;|&nbsp;TIME :
              {time}&nbsp;|&nbsp;{dat}
            </Text>
          </Box>
        </Box>
      </HStack>
      <HStack mt={["10px", "20px"]}>
        <Box
          bg="rgba(0, 0, 0, 0.80)"
          height={["50px", "70px"]}
          pt={["17px", "15px"]}
          fontSize={["9px", "14px"]}
          width={["65px", "110px"]}
          borderRadius="10px"
          align="center"
          color="white"
        >
          PRIZE POOL :
          <br />
          <Text color="yellow.400"> &#8377; {prize} </Text>
        </Box>
        <Box
          bg="rgba(0, 0, 0, 0.80)"
           height={["50px", "70px"]}
          pt={["17px", "15px"]}
          fontSize={["9px", "14px"]}
          width={["65px", "110px"]}
          borderRadius="10px"
          align="center"
          color="white"
        >
          PLATFORM :
          <br />
          <Text color="yellow.400"> {platform.toUpperCase()} </Text>
        </Box>
        <Box
          bg="rgba(0, 0, 0, 0.80)"
           height={["50px", "70px"]}
          pt={["17px", "15px"]}
          fontSize={["9px", "14px"]}
          width={["65px", "110px"]}
          borderRadius="10px"
          align="center"
          color="white"
        >
          ENTRY FEE :
          <br />
          <Text color="yellow.400"> &#8377; {entryfee}</Text>
        </Box>
        <Box
          // bg="rgba(0, 0, 0, 0.80)"
           height={["50px", "70px"]}
          pt={["17px", "15px"]}
          fontSize={["9px", "14px"]}
          width={["65px", "110px"]}
          borderRadius="10px"
          align="center"
          color="white"
          mt={['-32px','-30px']}
        >
         <Button onClick={onOpen}  height={["48px", "70px"]} width={["65px", "110px"]} fontSize={['15px','18px']} color='white' bg='black' isDisabled={spots==0?true:false}>{spots==0?"Full":"Join"}</Button>

         <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registration Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <RegisterForm type={type}  mapName={mapName} entryfee={entryfee} matchName={matchName}/>
          </ModalBody>

        </ModalContent>
      </Modal>
        </Box>
      </HStack>
      {spots&&<Box w={["100%", "90%"]} py={["8px", "20px"]}>
        <Progress
          colorScheme="yellow"
          borderRadius="10px"
          bg="gray.800"
          value={100-spots}
          size={["xs", "sm"]}
        />
        <Flex py="10px" fontSize={["10px","13px"]} color="gray.400">
          SPOTS LEFT : &nbsp;<Text color="yellow.400">{spots}</Text>
        </Flex>
      </Box>}
    </Flex>
  );
}
