import React from 'react'
import MatchPubg from './MatchPubg'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react'
  import Image from "next/image";
import bgimg from "@/public/pubgback.jpg";
import bgimg2 from "@/public/pubgback2.jpg";
import pubg1 from "@/public/pubg1.jpg";
import pubgsquad from "@/public/pubgsquad.jpg";
import pubgsolo from "@/public/pubgsolo.jpg";
import pubgstdm from "@/public/pubgtdm.jpg";
import Footer from "../Footer";
export default function PopMatch() {
  return (
    <Popover>
   <PopoverTrigger>
   <MatchPubg
    image={pubgsolo}
    alt="hello"
    matchName="Solo asdf asdf asdfas"
    mapName="erangel"
    time="12:00"
    entryFee="100"
    platform="mobile"
    prize="1000"
    spots="100"
  ></MatchPubg>
   </PopoverTrigger>
   <PopoverContent>
      <PopoverArrow />
      <PopoverHeader>Header</PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
      </PopoverBody>
      <PopoverFooter>This is the footer</PopoverFooter>
    </PopoverContent>
  </Popover>
  )
}
