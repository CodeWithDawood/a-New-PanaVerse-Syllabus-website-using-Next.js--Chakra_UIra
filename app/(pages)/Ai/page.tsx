"use client"
import React from 'react'
import {Box ,  Text , StackDivider ,CardBody ,Stack , Heading,Divider, ChakraProvider,  Flex, Card, CardHeader, Center } from '@chakra-ui/react'
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
<Heading textAlign={"center"} size='md'>Artificial Intelligence (AI) and Deep Learning Specialization</Heading>
<br />
<Heading color={"blue"} textAlign={"center"} size='md'> <Link href={"https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit"}>  Detailed Course Syllabus </Link> </Heading>


</Box>
<br />
<Flex align={"center"} direction={{base:'column' , md:'row' , lg:'row'}}>
<Card w={{base:'100%' , md:'50%' , lg:'50%'}}>
  <Card>
<CardHeader>
  <Center>
    <Heading size={"sm"} >
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
    AI-351: Developing Planet-Scale Intelligent APIs and Python Programming
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
    <li>Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep learning's potential, difficulties, and effects as well as equip you to take part in the creation of cutting-edge AI technology.</li>
<li>We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAI’s powerful models and Next.js 13.</li>
<li>We'll conclude the course by learning about basic programming concepts using Python, such as lists, dictionaries, classes, functions, and loops, and practice writing clean and readable code with exercises for each topic. We'll also learn how to make your programs interactive and how to test your code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.10+ that will have you writing programs, solving problems, and making things that work in no time. In this quarter we will also learn Git, the distributed version control system. We will also review Git-based GitHub services.</li>
</ul>
<li>Course Outline:</li>

<li>Introduction to Machine Learning, Data Science, and AI</li>
<li>AI for Everyone<br />https://www.coursera.org/learn/ai-for-everyone</li>
<li>AI for Everyone Quiz in Week 3<br />Total Questions: 60, Total Time: 75 minutes</li>
<li>Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models<br />We will cover GPT-4, ChatGPT, etc. and Next.js 13<br/>https://openai.com/api/<br />https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45</li>
<li>Python Crash Course for TypeScript Developers<br />Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming 2nd Edition<br />https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5</li>

    </Box>
  </Stack>
</CardBody>
</Card>
<br />
<Card pb={"960px"}>
<CardHeader>
  <Center>
    <Heading size={"sm"}>
  Quater V
    </Heading>
  </Center>

  <Center>
    <Heading size={"sm"}>
    AI-361: Deep Learning and MLOps
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
    <li>Course Outline: 
<ul>
<li>Deep Learning with Tensorflow<br />Deep Learning with Python, Second Edition 2nd Edition<br />https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2</li>
<li>Machine Learning Engineering for Production (MLOps) using Terraform for CDK<br />A Comprehensive Guide to MLOps Terraform: Infrastructure As Code(IaC)<br />https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351</li>
<li>MLOps leveraging AWS SageMaker and Terraform<br />https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce</li>
</ul></li>

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
