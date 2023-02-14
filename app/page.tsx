"use client"
import { ChakraProvider } from '@chakra-ui/react'
import Dataone from './components/Dataone'
import Footer from './components/Footer'
import Nav from "./components/Nav"

export default function Home() {
  return (
    <ChakraProvider>
    < Nav></Nav>
    <br />
    <br />
    
    <Dataone></Dataone>
    <br />
    <br />
    <br />
    <br />

    <Footer></Footer>
    </ChakraProvider>
    
    
  )
}
