import { Flex,Image} from "@chakra-ui/react";
import React from "react";

export default function BHero() {

  return (
    <Flex w='98vw'>
      <Image src='Bhero.png' alt=''  mx={'auto'} mt={['22%','','','5' ]} height={['','','','90vh']} ml={['0px','auto','auto','auto']} filter= "opacity(70%)"/>
    </Flex>
  
  );
}
