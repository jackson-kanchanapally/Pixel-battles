import { Image ,Flex} from "@chakra-ui/react";
import React from "react";

export default function BHero() {
  return (
    <Flex>
      <Image src='Bhero.png' alt='hero'  m={'auto'} mt={['22%','','','5' ]}height={['','','','90vh']} ml={['-28px','auto','auto','auto']} filter= "opacity(70%)"/>
    </Flex>
  
  );
}
