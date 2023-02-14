"use client"
import Footer from '@/app/components/Footer'
import Navone from '@/app/components/Navone'
import {Divider, Flex , Card , CardHeader ,Center , CardBody , Stack, StackDivider , Box, Heading , Text, ChakraProvider } from '@chakra-ui/react'
import Link from 'next/link'

import React from 'react'


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
<Heading textAlign={"center"} size='md'>Web 3 and Metaverse Specialization</Heading>
<br />
<Heading textAlign={"center"} size='md'>Detailed Course Syllabus</Heading>


</Box>
<Flex align={"center"} direction={{base:'column' , md:'row' , lg:'row'}}>

<Card  w={{base:'100%' , md:'50%' , lg:'50%'}}>
  <CardHeader>
    <Center>
      <Heading size='sm'>Quarter I (Core) </Heading>
      <br />
      
      
       </Center>
       <CardHeader>
    <Center>
      
      <Heading size='sm'> CS-101: Object-Oriented Programming using TypeScript
</Heading>
      
       </Center>
       <Center> <Text pt='2' fontSize='sm'>
       Duration: 13 Weeks
        </Text></Center>
       </CardHeader>
       <Heading size='xs' textTransform='uppercase'>

Course Description: 
</Heading>
<Text pt='2' fontSize='sm'>
We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users. 


        </Text>
      

  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
      
        Course Outline: 
        </Heading>
        <br />
        


        <Heading size='xs' textTransform='uppercase'>
        1.  HTML and CSS (Homework) 
         
        </Heading>
       

 <Text pl={"5"} pt='2' fontSize='md'> Learn HTML by Hira Khan (Watch Recorded Videos) </Text> 
 <Link href={"https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"}> <Text pl={"5"} color="blue" fontSize={"x-small"}>www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6 </Text></Link> 
<br />
<Text pl={"5"} pt='2' fontSize='md'>Learn CSS Intro by Hira Khan (Watch Recorded Videos) </Text> 
 <Link href={"https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"}> <Text pl={"5"} color="blue" fontSize={"x-small"}>www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob </Text></Link> 
<br />
<Heading size='xs' textTransform='uppercase'>
        2.  Web 3.0 and Metaverse Theory 
         
        </Heading>
       

 <Text pl={"5"} pt='2' fontSize='md'> Introduction to Panaverse DAO </Text> 
 <Link href={"https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"}> <Text pl={"5"} color="blue" fontSize={"x-small"}>https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing</Text></Link> 
<br />
<Text pl={"5"} pt='2' fontSize='md'>Web 3.0 User Guide </Text> 
 <Link href={"https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"}> <Text pl={"5"} color="blue" fontSize={"x-small"}>https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing</Text></Link>
<br />
<Text pl={"5"} pt='2' fontSize='md'> Complete Web 3 Assignments included in the Web 3 User Guide</Text>


<Text pl={"5"} pt='2' fontSize='md'>Virtual and Augmented  Metaverse User Guide </Text> 
 <Link href={"https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing "}> <Text pl={"5"} color="blue" fontSize={"x-small"}>https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing </Text></Link>
<br />
 <Heading size='xs' textTransform='uppercase'>
        3.  Fundamentals of Typescript 
         
        </Heading>
       

 <Text pl={"5"} pt='2' fontSize='md'> TypeScript Presentation </Text> 
 <Link href={"https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing "}> <Text pl={"5"} color="blue" fontSize={"x-small"}>https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing </Text></Link> 
<br />
<Text pl={"5"} pt='2' fontSize='md'>Getting Started Exercises with TypeScript and Node.js
 </Text> 
 <Link href={"https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"}> <Text pl={"5"} color="blue" fontSize={"x-small"}>https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md</Text></Link>
 <Text pl={"5"} pt='2' fontSize='md'>Fundamentals of JavaScript and Node.js Quiz
 </Text>
 <Text pl={"5"} pt='2' fontSize='md'>Topics Covered in the Quiz:
 </Text>
 <Text pl={"7"} pt='2' fontSize='md'>A. Background of JavaScript and How to use JavaScript in Browser
 </Text>
 <Text pl={"7"} pt='2' fontSize='md'>B. Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)

 </Text>

<Text pl={"7"} pt='2' fontSize='md'>C.  Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm:

 </Text>
 <Link href={"https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing  "}> <Text pl={"5"} color="blue" fontSize={"x-small"}>https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing  
</Text></Link>


<Text pl={"7"} pt='2' fontSize='md'>D.  How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs:

</Text>
<Link href={"https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing  "}> <Text pl={"5"} color="blue" fontSize={"x-small"}>https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing    
</Text></Link>
<Text pl={"7"} pt='2' fontSize='md'>Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.

</Text>
<Text pl={"7"} pt='2' fontSize='md'>E.  Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)
</Text>
<Text pl={"7"} pt='2' fontSize='md'>F.  Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)
</Text>
<Text pl={"7"} pt='2' fontSize='md'>G.  Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)
</Text>
<Text pl={"7"} pt='2' fontSize='md'>H.  Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)</Text>
       
<Text pl={"7"} pt='2' fontSize='md'>I.  Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)</Text>
 
<Text pl={"7"} pt='2' fontSize='md'>J.  JavaScript promises, mastering the asynchronous</Text>
<Link href={"https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript "}> <Text pl={"5"} color="blue" fontSize={"x-small"}>https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript     
</Text></Link>
<Text pl={"7"} pt='2' fontSize='md'>K.  New JavaScript Features in ECMAScript 2022 and 2021</Text>
<Link href={"https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg "}> <Text pl={"5"} color="blue" fontSize={"x-small"}>https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg      
</Text></Link>
<br />
<Heading size='xs' textTransform='uppercase'>
        4. Object-Oriented Programming with TypeScript
         
        </Heading>
        <Text pt='2' fontSize='md'>Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript</Text>
        <Link href={"https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1"}> <Text  color="blue" fontSize={"x-small"} >  https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1  
</Text></Link>
<br />
<Text pt='2' fontSize='md'>Learning Repository</Text>
        <Link href={"https://github.com/panaverse/learn-typescript "}> <Text  color="blue" fontSize={"x-small"} >https://github.com/panaverse/learn-typescript   
</Text></Link>
<br />
<Text pt='2' fontSize='md'>In Class Companion projects and articles for Learning TypeScript</Text>
        <Link href={"https://www.learningtypescript.com/ "}> <Text  color="blue" fontSize={"x-small"} >https://www.learningtypescript.com/    
</Text></Link>
<br />
<Text pt='2' fontSize='md'>Homework Project</Text>
        <Link href={"https://github.com/panaverse/typescript-node-projects "}> <Text  color="blue" fontSize={"x-small"} >https://github.com/panaverse/typescript-node-projects     
</Text></Link>
<br />
<Text pt='2' fontSize='md'>Fundamentals of TypeScript Quiz</Text>
<Text pt='2' fontSize='md'>TypeScript Professional Proficiency Quiz</Text>
<Heading size='xs' textTransform='uppercase'>
  <br />
5. TypeScript for React
         
        </Heading>
        <Text pt='2' fontSize='md'>Minimal TypeScript Crash Course For React
With Interactive Code Exercises
</Text>
        <Link href={"https://profy.dev/article/react-typescript "}> <Text  color="blue" fontSize={"x-small"} >https://profy.dev/article/react-typescript   
</Text></Link>
<Heading size='xs' textTransform='uppercase'>
  <br />
  <Heading size='xs' textTransform='uppercase'>
  <br />
  Quarter Break Assignments and Quizzes 
         
        </Heading>
 
         
  </Heading>
  <Text pt='2' fontSize='md'>During the Quarter Break, we do the following Assignments: 

</Text>

<Link href={" https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge "}> <Text pl={"8"} color="blue" fontSize={"small"} >1. https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge    
</Text></Link>
<br />
<Link href={" https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app "}> <Text pl={"8"} color="blue" fontSize={"small"} >2. https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app     
</Text></Link>
<br />
<Link href={" https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui "}> <Text pl={"8"} color="blue" fontSize={"small"} >3. https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui 
     
</Text></Link><br />
<Text pl={"8"} fontSize={"small"} >4. Build a Panaverse DAO Syllabus Website using Next.js 13 given the content from the following document:  
     
     </Text>
     <Link href={"https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing "}> <Text pl={"8"} color="blue" fontSize={"small"} >4. https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing  
     
</Text></Link>
<Text pl={"8"}  fontSize={"small"} >The best-developed Website will be hosted on " <Link color={"#4299e1"} href={"www.panaverse.co "}> www.panaverse.co  </Link> " domain.  
     
</Text>
<br />
<Text pl={"8"} fontSize={"small"} >5. Build a new PIAIC Website using Next.js 13 given the content from the current PIAIC Website and from the following document:  
     
     </Text>
     <Link href={"https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing "}> <Text pl={"8"} color="blue" fontSize={"small"} >https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing   
     
</Text></Link>
<Text pl={"8"}  fontSize={"small"} >The best-developed Website will be hosted on " <Link color={"#4299e1"} href={"www.panaverse.co "}> www.panaverse.co  </Link> " domain.  
     
</Text>
<br />

<Text pl={"8"} fontSize={"small"} >After completing the above Five Assignments everyone will appear in the following two Quizzes covering Github and TypeScript:
 
     
     </Text>
<br />
<Heading pl={"9"} size='xs' textTransform='uppercase'>
  
1.  Fundamentals of Version Control with Git Quiz
         
        </Heading>
<br />
<Text pl={"9"} fontSize={"small"} >Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)</Text>
     <Link href={"https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF "}> <Text pl={"9"} color="blue" fontSize={"small"} >https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF 
   
     
</Text></Link>
<br />
<Text pl={"9"} fontSize={"md"} >Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther</Text>
<br />
<Text pl={"9"} fontSize={"md"} >We will also cover these readings:</Text>
<Link href={"https://help.github.com/articles/markdown-basics/ "}> <Text pl={"9"} color="blue" fontSize={"small"} >https://help.github.com/articles/markdown-basics/  
</Text></Link>

<Link href={"http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github "}> <Text pl={"9"} color="blue" fontSize={"small"} >http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github   
</Text></Link>

<Link href={"http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences"}> <Text pl={"9"} color="blue" fontSize={"small"} >http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences   
</Text></Link>

<Link href={"https://git-scm.com/book/en/v2/Git-Branching-Rebasing"}> <Text pl={"9"} color="blue" fontSize={"small"} >https://git-scm.com/book/en/v2/Git-Branching-Rebasing   
</Text></Link>

<Link href={"http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches "}> <Text pl={"9"} color="blue" fontSize={"small"} >http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches    
</Text></Link>
<br />
<Text pl={"9"}>For practice:<Link href={" https://try.github.io/levels/1/challenges/1"}> https://try.github.io/levels/1/challenges/1</Link> 
</Text>

<br />
<Text pl={"9"} fontSize={"md"} >Homework:
</Text>
     <Link href={"https://www.datacamp.com/courses/introduction-to-git-for-data-science "}> <Text pl={"9"} color="blue" fontSize={"small"} >https://www.datacamp.com/courses/introduction-to-git-for-data-science  
   
     
</Text></Link>

<br />
<Text pl={"9"} fontSize={"md"} >Git Cheatsheet
</Text>
     <Link href={"https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html "}> <Text pl={"9"} color="blue" fontSize={"small"} >https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html 
  
   
     
</Text></Link>
<br />

<Heading fontSize={"md"} pl={"9"}> Git Quiz </Heading>
<Text pl={"9"} fontSize={"md"} >Total Questions: 60, Total Time: 75 minutes
</Text>
<br />
<Heading fontSize={"md"} pl={"12"}>2. TypeScript Proficiency Quiz</Heading>
<Text pl={"9"} fontSize={"md"} >Total Questions: 63
Duration: 120 minutes

</Text>

<br />
<Text pl={"9"} fontSize={"md"} >Study Material:


</Text>
<Link href={"https://github.com/panaverse/learn-typescript "}> <Text pl={"9"} color="blue" fontSize={"small"} > 
https://github.com/panaverse/learn-typescript 

   
     
  </Text></Link>



        
      </Box>
      
      
    </Stack>
  </CardBody>
</Card>







<Card  w={{base:'100%' , md:'50%' , lg:'50%'}}>
  <Card>
  <CardHeader>
    <Center><Heading size='md'>Quarter II (Core)
</Heading> </Center>

<Center><Heading size='md'>Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
</Heading> </Center>

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
    <li>Develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs using technologies like Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).</li>
    <li>Learn Next.js 13 Web Development and API Routes.</li>
    <li>Explore APIs with Next.js and tRPC.</li>
    <li>Learn SQL and Prisma.</li>
    <li>Learn AWS Application Composer and Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF).</li>
    <li>Build Web 2.0 Projects including Next.js Projects and a Twitter Clone.</li>
  </ul>

      </Box>
    </Stack>
  </CardBody>
  </Card>
  <br />
  <br />
  <Card>
  <CardHeader>
    <Center><Heading size='md'>Quarter III (Core)
</Heading> </Center>

<Center><Heading size='md'>Dollar Making Bootcamp - Full-Stack Template and API Product Development
</Heading> </Center>

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
    <li>Build a template to sell on Theme Forest and Panaverse DAO marketplace.</li>
    <li>The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform.</li>
    <li>An additional 15% will be spent on marketing the template.</li>
    <li>60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.</li>
    <li>The Template Standard: <a href="https://github.com/panaverse/panaverse-template-standard">https://github.com/panaverse/panaverse-template-standard</a></li>
    <li>Build QraphQL APIs and sell subscriptions on the Panaverse DAO Marketplace.</li>
    <li>The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform.</li>
    <li>An additional 15% will be spent on marketing the template.</li>
    <li>60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.</li>
  </ul>

      </Box>
    </Stack>
  </CardBody>
  </Card>
  <br />
  <Card>
  <CardHeader>
    <Center><Heading size='md'>Quarter IV (Advanced)
</Heading> </Center>

<Center><Heading size='md'>Decentralized Finance and Blockchain Development Bootcamp
</Heading> </Center>

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
    <li>Learn Solidity Programming Language and Smart Contracts Development</li>
    <li>Develop Decentralized Applications (dApps) using Ethereum and Solidity</li>
    <li>Learn and Implement different Consensus Algorithms (Proof of Work, Proof of Stake, Delegated Proof of Stake, etc.)</li>
    <li>Develop and Deploy Decentralized Finance (DeFi) Applications on Ethereum</li>
    <li>Understand and Implement Layer 2 Scaling Solutions (Rollups, Sidechains, etc.)</li>
    <li>Learn about Non-Fungible Tokens (NFTs) and develop NFT-based Applications</li>
    <li>Integrate different Web3 Technologies (IPFS, Whisper, etc.) in dApps</li>
    <li>Participate in a hackathon to showcase your skills and win prizes</li>
  </ul>
      </Box>
    </Stack>
  </CardBody>
  </Card>

  
  <br />
  <Card pb={"1453"}>
  <CardHeader>
    <Center><Heading size='md'>Quarter V (Core)
</Heading> </Center>

<Center><Heading size='md'>MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences
</Heading> </Center>

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
    <li>Learn to build the Open Social Spatial Web with WebXR and WebGPU technologies.</li>
    <li>Use Blender 3D for asset creation in the Metaverse.</li>
    <li>Build a 3D Donut, Viking Scene, Time Machine, Modern Kitchen, and a 3D Sword in the Stone with Blender 3.</li>
    <li>Illustrate an Alien Hero with Grease Pencil.</li>
    <li>Open Metaverse Learning Repo: https://github.com/panaverse/metaverse-web</li>
    <li>Blender 3.3+ Download: https://www.blender.org/download/</li>
    <li>Blender Projects Textbook: Blender by Example 2nd Edition</li>
    <li>Blender Textbook: The Complete Guide to Blender Graphics: Computer Modeling & Animation 7th Edition by John M. Blain</li>
  </ul>
      </Box>
    </Stack>
  </CardBody>
  </Card>


</Card>

</Flex>
<br />

<br/>

      <Footer></Footer>
      </ChakraProvider>

    </div>
  )
}
