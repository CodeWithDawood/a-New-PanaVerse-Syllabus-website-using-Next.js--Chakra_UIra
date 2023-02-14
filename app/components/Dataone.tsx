import React from 'react'
import {Box,Card , CardHeader , StackDivider, CardBody , Center,   Stack , Heading , Text , Divider ,CardFooter , ButtonGroup ,Button ,Flex ,} from '@chakra-ui/react'
import Image from 'next/image'
import PIAIC from '../../public/images/PIAIC.png'
import Portrait from '../../public/images/Portrait.jpeg'

export default function Dataone() {
  return (
    <div>
        <Box mt={{base:'20'}} >
            
            <Flex align={"center"} direction={{base:'column' , md:'row' , lg:'row'}}>
                
            <Card w={{base:'100%' , md:'50%' , lg:'50%'}}>
  <CardBody>
    <Center>
    <Image
      src={PIAIC}
      alt='PIAIC LOGO'
      borderRadius='lg'
    />
    </Center>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>The Program in a Nutshell: Earn While You Learn
</Heading>
      <Text>
      This curriculum is intended for beginners who want to learn software development from the ground up. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.

      </Text>
      <Text color='blue.600' fontSize='2xl'>
        COO PanaCloud : Zia Khan
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Enroll now
      </Button>
      
    </ButtonGroup>
  </CardFooter>
</Card>


<Card  w={{base:'100%' , md:'50%' , lg:'50%'}} >
  <CardBody>
  <Center >
    <Image
      src={Portrait}
      alt='Sir Zia'
      borderRadius='lg'
    />
    </Center>
    
    <Stack mt='6' spacing='3'>
      
      <Heading size='md'>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</Heading>
      <Text textAlign={"center"}>
      Certified Web 3.0 and Metaverse Developer <br />
A One and Quarter Years Panaverse DAO Earn as you Learn Program <br />
Getting Ready for the Next Generation of the Internet
      </Text>
      
    </Stack>
  </CardBody>

  
</Card>
            </Flex>
        </Box>
<br />
<br />
<Divider/>
<br />
<Center bg={"#E6FFFA"}>
<Card bg={"#81E6D9"}>
  <CardHeader>
    <Heading size='md'>Core Courses (Common in All Specializations):</Heading>
    <Text pt='2' fontSize='sm'>
    Every participant of the program will start by completing the following three core courses:

        </Text>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Quarter I (Core) <br />
CS-101: Object-Oriented Programming using TypeScript

        </Heading>
        
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Quarter II (Core) <br />
W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs <br /> using Next.js 13 and Cloud Development Kit (CDK) for Terraform

        </Heading>
      
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Quarter III (Core) <br />
$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development

        </Heading>
        
      </Box>
    </Stack>
  </CardBody>
</Card>
</Center>
<br />
<Divider/>
<br />

<Box  bg={"#B2F5EA"}>
<Heading textAlign={"center"} size='md'>Specialized Tracks:</Heading>

<Text textAlign={"center"} >After completing the first three quarters the participants will select one or more specializations consisting of two courses each:</Text>
</Box>
<br/>
<Flex align={"center"} direction={{base:'column' , md:'row' , lg:'row'}}>

<Card  w={{base:'100%' , md:'50%' , lg:'50%'}}>
  <CardHeader>
    <Center><Heading size='md'>I. Web 3.0 (Blockchain) and Metaverse Specialization
</Heading> </Center>
<Text pt='2' fontSize='sm'>
This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.         
        </Text>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Quarter IV <br />
W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps

        </Heading>
        
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          
Quarter V <br />
MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences

        </Heading>
        
      </Box>
      
    </Stack>
  </CardBody>
</Card>


<Card  w={{base:'100%' , md:'50%' , lg:'50%'}}>
  <CardHeader>
    <Center><Heading size='md'>II. Artificial Intelligence (AI) and Deep Learning Specialization
</Heading> </Center>
<Text pt='2' fontSize='sm'>
The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.

        </Text>

  </CardHeader>
  <br />

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Quarter IV <br />
AI-351: Developing Planet-Scale Intelligent APIs and Python Programming

        </Heading>
        
      </Box>
      <Box pb={"4"}>
        <Heading size='xs' textTransform='uppercase'>
        Quarter V <br />
AI-361: Deep Learning and MLOps

        </Heading>
        
      </Box>
     
    </Stack>
  </CardBody>
</Card>

</Flex>
<br />
<br/>
<Flex align={"center"} direction={{base:'column' , md:'row' , lg:'row'}}>
<Card  w={{base:'100%' , md:'50%' , lg:'50%'}}>
  <CardHeader>
    <Center><Heading size='md'>III. Cloud-Native Computing Specialization</Heading> </Center>
    <Text pt='2' fontSize='sm'>
    The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes. 

        </Text>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Quarter IV <br />
CN-351: Certified Kubernetes Application Developer (CKAD)

        </Heading>
        
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Quarter V <br />
CN-361: Developing Multi-Cloud APIs using CDK for Terraform
        </Heading>
       

      </Box>
     
    </Stack>
  </CardBody>
</Card>
<Card  w={{base:'100%' , md:'50%' , lg:'50%'}}>
  <CardHeader>
<Center>    <Heading size='md'>IV. Ambient Computing and IoT Specialization
</Heading> </Center>
<Text pt='2' fontSize='sm'>
The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.
        </Text>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Quarter IV <br />
AC-351: Ambient Computing with Voice Assistants and Matter Protocol Devices

        </Heading>
        
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Quarter V <br />
AC-361: Embedded Programming using C and Rust

        </Heading>
        
      </Box>
     
    </Stack>
  </CardBody>
</Card>

</Flex>
<br/>
<br />
<Flex align={"center"} direction={{base:'column' , md:'row' , lg:'row'}}>
<Card  w={{base:'100%' , md:'50%' , lg:'50%'}}>
  <CardHeader>
<Center><Heading size='md'>V. Genomics and Bioinformatics Specialization
</Heading> </Center>
<Text pt='2' fontSize='sm'>
Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.
        </Text>    
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Quarter IV <br />
Bio-351: Python for Biologists

        </Heading>
        
      </Box>
      <Box pb={"4"}>
        <Heading size='xs' textTransform='uppercase'>
        Quarter V <br />
Bio-361: Bioinformatics with Python
        </Heading>
      

      </Box>
     
    </Stack>
  </CardBody>
</Card>
<Card  w={{base:'100%' , md:'50%' , lg:'50%'}}>
  <CardHeader>
   <Center> <Heading size='md'>VI. Network Programmability and Automation Specialization
</Heading> </Center>
<Text pt='2' fontSize='sm'>
More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.
        </Text>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Quarter IV <br />
NPA-351: CCNA 200-301 Certification

        </Heading>
        
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Quarter V<br />
NPA-361: Network Programmability and Automation

        </Heading>
        
      </Box>
      
    </Stack>
  </CardBody>
</Card>

</Flex>
<br/>



    </div>
  )
}
