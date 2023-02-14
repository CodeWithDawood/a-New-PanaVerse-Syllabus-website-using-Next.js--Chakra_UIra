
"use client"

import { Flex } from '@chakra-ui/layout'
import { Box , Spacer , Center } from '@chakra-ui/react'
import {Menu , Button , MenuButton , MenuList , MenuItem} from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import Link from 'next/link'


export default function Footer() {
  return (
    <div>
<Box  h={"90"} bg={"#76E4F7"}>
<Flex align={{ base: 'center' }} direction={{   base: 'column', md: 'row', lg: 'row' }} >
    <Box   w='180px' h='70' > <Image src={logo}  alt="logo of PIAIC"></Image>  </Box>
    <Spacer />
    <Box  mt={{base: '10' , md: '4' , lg: '4'}} w='450px' borderRadius={"2xl"} h='10' bg='#FFFFFF'> <Center  fontWeight={"700"} fontSize={"2xl"}>  <h1 >@ 2023 PIAIC. ALL RIGHTS RESERVED</h1> </Center> </Box>
    <Spacer />
    <Box mr={"20"} mt={"4"} borderRadius={"2xl"}  w='180px' h='10' >
       <Menu > 
          <MenuButton bgColor={{base :'#F7FAFC'}}   fontWeight={"700"} bg={"#FFFFFF"} as={Button} > Detailed Course Syllabus</MenuButton>
          <MenuList>
    <MenuItem><Center fontWeight={"700"} fontSize={"md"}> <Link   href="/metaverse"> <h1 >Web 3 and Metaverse Specialization</h1></Link> </Center></MenuItem>
    <MenuItem><Center fontWeight={"700"} fontSize={"md"}> <Link   href="/Ai"> <h1 >Artificial Intelligence (AI) and Deep Learning Specialization</h1></Link> </Center></MenuItem>
    <MenuItem><Center fontWeight={"700"} fontSize={"md"}> <Link   href="/Cloud"> <h1 >Cloud-Native Computing Specialization</h1></Link> </Center></MenuItem>
    <MenuItem><Center fontWeight={"700"} fontSize={"md"}> <Link   href="/Iot"> <h1 >Ambient Computing and IoT Specialization</h1></Link> </Center></MenuItem>
    <MenuItem><Center fontWeight={"700"} fontSize={"md"}> <Link   href="/Bioinformatics"> <h1 >Genomics and Bioinformatics Specialization</h1></Link> </Center></MenuItem>
    <MenuItem><Center fontWeight={"700"} fontSize={"md"}> <Link   href="/Network"> <h1 >Network Programmability and Automation Specialization</h1></Link> </Center></MenuItem>
  </MenuList>
          </Menu> 
           </Box>
</Flex>

</Box>

    </div>
  )
}


