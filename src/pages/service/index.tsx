import { Image, Title ,Container, Text, Flex,Box } from '@mantine/core';
import classes from './index.module.css';
import HeaderMegaMenu from '@/components/header/header';
import {Clock, Users ,ArrowUpNarrowWide,UsersRound,MonitorCog , User ,RefreshCcwDot } from 'lucide-react';
import { FooterLinks } from '@/components/footer/footer';



export default function Service() {
  return (
   <div className={classes.body}>
 <div style={{ position: 'relative', zIndex: 1,   }}>
       <div style={{marginTop:"3.6rem", marginBottom:"1000rem" , position: 'fixed', zIndex: 1000}}> <HeaderMegaMenu /></div>
      </div>
    <Image
      radius="md"
       w={1340}
       ml={0}
       mt={-63}
      src="service.png"
    />

  <Title mt={-450} ml={190}  className={classes.title} >
      Our
    </Title>
    <Title mt={-119} ml={405} c={"white"}  className={classes.title} >
       Service
    </Title>
    

    <Text ml={200} c="black" w={500} className={classes.text}>
    Mentor Knowledge Solutions PLC specializes in enhancing organizational performance
     through tailored IT and Management Consulting services. We align IT strategies 
     with business goals, streamline operations, and ensure successful project execution.
      Our expertise includes effective change management and training programs that empower
       your team. Partner with us to drive growth and achieve sustainable success.
    </Text>
   
    <Title ml={100} mb={10} mt={250} c="dimmed"  className={classes.title2} >
    Management Consultancy
       </Title>
   
       <Text ml={100} c="dimmed" w={700} className={classes.text}  >
       Mentor also involves in management consulting in the areas of service innovation and enterprise
transformation through IT enablement and customer-centric capabilities, business process redesign
and automation. Our consulting services focus on the following.
   
       </Text>
  <Flex mt={100} gap={10} c="dimmed" >
    
    <Box className={classes.card1} ml={100}>
       <Clock size={65} strokeWidth={1.5} color='#FFAF02' />
       <Text w={170} mt={10}>
    Improving performance through innovation.
    </Text> 
    </Box>

    <Box className={classes.card2} ml={10}>
       <Users size={65} strokeWidth={1.5}color='#FFAF02' />
       <Text w={170} mt={10} >
       Leadership,engagement, communication,innovation.
    </Text> 
    </Box>
    <Box className={classes.card3} ml={10}>
       <ArrowUpNarrowWide size={65} strokeWidth={1.5} color='#FFAF02' />
       <Text w={170} mt={10}>
       Creativity brings fresh ideas for effective business solutions.
    </Text> 
    </Box>

    <Box className={classes.card4} ml={10}>
       <UsersRound size={65} strokeWidth={1.5} color='#FFAF02' />
       <Text w={170} mt={10}>
       IT Governance and Change Management: Aligning policies for seamless transitions.
    </Text> 
    </Box>
  
  </Flex>













  <Title ml={500} mb={10} mt={150} c="dimmed" className={classes.title2} >
  Workshops, Seminars and Trainings
       </Title>
   
       <Text ml={510} w={700} c="dimmed" className={classes.text}  >
       Mentor offers trainings, seminars and workshops on topics selected with
        the intention to provide key competencies that will enable practitioners
         and managers enhance their capabilities. Our training  programs are
          continuously reviewed and updated to reflect trends and practices 
          in the field and the prevailing situation. Workshop topics may also 
          be tailored/customized to the specific requirements ofinterested 
          organizations/groups. Major topics include:
   
       </Text>
  <Flex mt={100} gap={10} mb={200} c="dimmed" >
    
    <Box className={classes.card1} ml={100}>
       <MonitorCog size={65} strokeWidth={1.5} color='#FFAF02' />
       <Text w={170} mt={10}>
       Software development and management.
    </Text> 
    </Box>

    <Box className={classes.card2} ml={10}>
       <User size={65} strokeWidth={1.5}color='#FFAF02' />
       <Text w={170} mt={10} >
       Business traansformation and management.
    </Text> 
    </Box>
    <Box className={classes.card3} ml={10}>
       <ArrowUpNarrowWide size={65} strokeWidth={1.5} color='#FFAF02' />
       <Text w={170} mt={10}>
       Business process management.
    </Text> 
    </Box>

    <Box className={classes.card4} ml={10}>
       <RefreshCcwDot size={65} strokeWidth={1.5} color='#FFAF02' />
       <Text w={170} mt={10}>
       IT Governance and Change Management: Loading policies for seamless transitions.
    </Text> 
    </Box>
  
  </Flex>
   
   
   <FooterLinks/>
   </div>

  );
}