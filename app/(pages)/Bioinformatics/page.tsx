"use client"
import React from 'react'
import {Box , Text , StackDivider ,CardBody ,Stack , Heading,Divider, ChakraProvider, Flex, Card, CardHeader, Center } from '@chakra-ui/react'
import Navone from '@/app/components/Navone'
import Link from 'next/link'
import Footer from '@/app/components/Footer'

export default function page() {
  return (
    <div> 
      <ChakraProvider>

<Navone></Navone>
<br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
    
<Divider/>
<br />

<Box  bg={"#B2F5EA"}>
<Heading textAlign={"center"} size='md'>Genomics and Bioinformatics Specialization</Heading>
<br />
<Heading color={"blue"} textAlign={"center"} size='md'> <Link href={"https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit"}>  Detailed Course Syllabus </Link> </Heading>


</Box>
<br />
<Flex align={"center"} direction={{base:'column' , md:'row' , lg:'row'}}>
<Card w={{base:'100%' , md:'50%' , lg:'50%'}}>
  <Card>
<CardHeader>
  <Center>
    <Heading size={"sm"}>
    Quarter I (Core)
    </Heading>
  </Center>

  <Center>
    <Heading size={"sm"}>
    CS-101: Object-Oriented Programming using TypeScript
    </Heading>
  </Center>
  <Center> <Text pt='2' fontSize='sm'>
Duration: 13 Weeks
</Text>
</Center>
</CardHeader>
<br />

<CardBody>
  <Stack divider={<StackDivider />} spacing='4'>
    <Box>
    <ul>
    <li>Learn the fundamentals of Object-Oriented programming using JavaScript and TypeScript.</li>
    <li>Understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.</li>
    <li>Learn HTML by Hira Khan (Watch Recorded Videos) using the playlist "Learn HTML by Hira Khan".</li>
    <li>Learn CSS Intro by Hira Khan (Watch Recorded Videos) using the playlist "Learn CSS Intro by Hira Khan".</li>
    <li>Complete Web 3 Assignments included in the Web 3 User Guide on "Web 3.0 and Metaverse Theory".</li>
    <li>Explore TypeScript Presentation to understand the fundamentals of TypeScript.</li>
    <li>Learn to work with Node.js using "Getting Started Exercises with TypeScript and Node.js" from panaverse/typescript-node-projects.</li>
    <li>Take the "Fundamentals of JavaScript and Node.js Quiz" to evaluate your knowledge on background, variables, data types, operators, modules, and loops.</li>
    <li>Understand the concepts of Concurrency, Callbacks, Promises, async/await, and Event loop from chapter 13 of JavaScript from Beginner to Professional.</li>
    <li>Master the asynchronous with the article "JavaScript promises, mastering the asynchronous" on codingame.com.</li>
    <li>Learn new features in ECMAScript 2022 and 2021 with the article "New JavaScript Features in ECMAScript 2022 and 2021" on dev.to.</li>
  </ul>

    </Box>
  </Stack>
</CardBody>
</Card>
<br />
<Card>
<CardHeader>
  <Center>
    <Heading size={"sm"} >

    Quarter II (Core)

    </Heading>
  </Center>

  <Center>
    <Heading size={"sm"}>
    W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
    </Heading>
  </Center>
  <Center> <Text pt='2' fontSize='sm'>
Duration: 13 Weeks
</Text>
</Center>
</CardHeader>
<br />

<CardBody>
  <Stack divider={<StackDivider />} spacing='4'>
    <Box>
      <ul>
    <li><Heading size={"sm"}> Objective: Teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, participants will be able to develop and deploy web platforms like Facebook, Shopify, etc.
Technologies covered: Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF)</ Heading> </li>
<li> Course outline includes: </li>
<li> Next.js 13 Web Development </li>
<li> UI/UX Design with Figma, TailwindCSS, and Chakra UI </li>
<li> API Routes with Next.js </li>
<li> APIs with Next.js and tRPC </li>
<li> SQL and Prisma </li>
<li> AWS Application Composer </li>
<li> Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) </li>
<li> Web 2.0 Projects </li>
<li> Resources for the course include: </li>
<li> Next 13 Official Documentation </li>
<li> Latest Learn React Official Website </li>
<li> Learn Next.js 13 Learning Repo </li>
 <li> CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items </li>
<li> Chakra UI Docs </li>
<li> Designing and Prototyping Interfaces with Figma by Fabio Staiano </li>
<li> Figma Design Kit for TailwindCSS </li>
<li> Chakra UI Figma Kit </li>
<li> Build a tRPC CRUD API Example with Next.js </li>
<li> Stop building REST APIs for your Next.js apps, use tRPC instead </li>
<li> SQL For Beginners Video Tutorial </li>
<li> Database Management Systems and SQL – Tutorial for Beginners </li>
<li> Modern CSS with Tailwind, Second Edition by Noel Rappin </li>
<li> <Heading size={"sm"}> What is AWS Application Composer? </Heading> </li>                                             
<li> Event-driven apps with AWS Application Composer </li>
<li> AWS Free Tier </li>
 <li> Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps </li>
<li> <Heading size={"sm"}> Next.js Projects </Heading> </li>
<li> Styling Next.js Projects using TailwindCSS and Chakra UI </li>
<li> Todo Full-Stack App </li>
<li>Build a Twitter Clone </li> 
</ul>
    </Box>
  </Stack>
</CardBody>
</Card>
<br />
<Card>
<CardHeader>
  <Center>
    <Heading size={"sm"}>
    Quarter III (Core)
    </Heading>
  </Center>

  <Center>
    <Heading size={"sm"}>
    $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development
    </Heading>
  </Center>
  <Center> <Text pt='2' fontSize='sm'>
Duration: 13 Weeks
</Text>
</Center>
</CardHeader>
<br />

<CardBody>
  <Stack divider={<StackDivider />} spacing='4'>
    <Box>
   <ul>
   <li>Earn While You Learn Projects</li>
<li>Build Full-Stack Next.js 13 Jamstack Templates</li>
<li>You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.</li>
<li>The Template Standard: <a href="https://github.com/panaverse/panaverse-template-standard">https://github.com/panaverse/panaverse-template-standard</a></li>
<li>Build QraphQL APIs</li>
<li>You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.</li>
   </ul>

    </Box>
  </Stack>
</CardBody>
</Card>

</Card>



<Card  w={{base:'100%' , md:'50%' , lg:'50%'}}>
<Card>
<CardHeader>
  <Center>
    <Heading size={"sm"}>
    Quarter IV
    </Heading>
  </Center>

  <Center>
    <Heading size={"sm"}>
    Bio-351: Python for Biologists
    </Heading>
  </Center>
  <Center> <Text pt='2' fontSize='sm'>
Duration: 13 Weeks
</Text>
</Center>
</CardHeader>
<br />

<CardBody>
  <Stack divider={<StackDivider />} spacing='4'>
    <Box>
   
<li>
This course will focus on learning the basics of the Python programming language through genomics examples.

Textbook: https://www.pythonforbiologists.org/ 
</li>
    </Box>
  </Stack>
</CardBody>
</Card>
<br />
<Card pb={"1800"}>
<CardHeader>
  <Center>
    <Heading size={"sm"}>
Quater V
    </Heading>
  </Center>

  <Center>
    <Heading size={"sm"}>
    Bio-361: Bioinformatics with Python
    </Heading>
  </Center>
  <Center> <Text pt='2' fontSize='sm'>
Duration: 13 Weeks
</Text>
</Center>
</CardHeader>
<br />

<CardBody>
  <Stack divider={<StackDivider />} spacing='4'>
    <Box>
   <li>
   Course Description: 

In this course we will discover modern, next-generation sequencing libraries from the powerful Python ecosystem to perform cutting-edge research and analyze large amounts of biological data.

Textbook: 
https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1 
   </li>

    </Box>
  </Stack>
</CardBody>
</Card>


</Card>

</Flex>

<br />
<Footer></Footer>

      </ChakraProvider>
    </div>
  )
}
