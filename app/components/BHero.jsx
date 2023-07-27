import { Flex,Image} from "@chakra-ui/react";
import React from "react";

export default function BHero() {

  return (
    <Flex w='100vw'>
      <Image src='Bhero.png' alt='hero'  mx={'auto'} mt={['22%','','','5' ]} height={['','','','90vh']} ml={['0px','auto','auto','auto']} filter= "opacity(70%)"/>
    </Flex>
  
  );
}
