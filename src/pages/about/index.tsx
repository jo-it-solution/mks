import { Image, Title , Text } from '@mantine/core';
import classes from './index.module.css';

import { FooterLinks } from '@/components/footer/footer';
import HeaderMegaMenu from '@/components/header/header';



export default function About() {
  return (
   <div className={classes.body}>
       <div style={{ position: 'relative', zIndex: 1,   }}>
       <div style={{marginTop:"1rem", marginBottom:"1000rem" , position: 'fixed', zIndex: 1000}}> <HeaderMegaMenu /></div>

       

      </div>
    <Image
      radius="md"
       w={800}
       ml={543}
       mt={-20}
       alt='image'
      src="about.png"
    />

  <Title mt={-450} ml={215}  className={classes.title} >
      About
    </Title>
    <Title mt={-119} ml={538} c={"white"}  className={classes.title} >
       Us
    </Title>
    

    <Text ml={210}   w={500} c="dimmed">
    Mentor Knowledge Solutions PLC is an IT and Management
    Consulting firm taking an active role in the business of making organizations perform better.
    </Text>

    <Image
      radius="md"
       w={680}
       ml={-8}
       mt={430}
       alt='image'
      src="vision.png"
    />
    <Title mt={-840} ml={855} c="dimmed"  className={classes.title2} >
      Our Vision
    </Title>

    <Text ml={740} c="dimmed"  w={600} mt={20}>
    Unlocking technology potential to help organizations innovate, deliver superior customer experience, and perform better

    </Text>

    <Image
      radius="md"
       w={25}
       ml={690}
       mt={-50}
       alt='image'
      src="icon.png"
    />

<Title mt={55} ml={855} c="dimmed"  className={classes.title2} >
      Our Mission
    </Title>

    <Text ml={740} c="dimmed"  w={580} mt={35} mb={20}>
    Provide proactive and responsive IT and management consulting 
      services that help small and medium enterprises become stronger 
      and more

    </Text>
    <Image
      radius="md"
       w={25}
       ml={690}
       mt={-70}
       mb={60}
       alt='image'
      src="icon.png"
    />
<Image
      
      w={4}
      h={60}
      ml={700}
      mt={-61}
      alt='image'
     src="line.png"
   />
<Text ml={740} c="dimmed"  w={580} mt={-5}>
Offer custom application development services for both enterprise and 
consumer apps based on business process management concepts 


    </Text>
    <Image
      radius="md"
       w={25}
       ml={690}
       mt={-50}
       mb={60}
       alt='image'
      src="icon.png"
    />
    <Image
      
      w={4}
      h={60}
      ml={700}
      mt={-61}
      alt='image'
     src="line.png"
   />
 <Text ml={740} c="dimmed" w={580} mt={-5}>
 Provide technology-enabled back-office and front-office business 
 services with sourcing arrangement.

    </Text>
    <Image
      radius="md"
       w={25}
       ml={690}
       mt={-50}
       mb={60}
       alt='image'
      src="icon.png"
    />
    <Image
      
      w={4}
      h={60}
      ml={700}
      mt={-61}
      alt='image'
     src="line.png"
   />
 <Text ml={740} c="dimmed" w={580} mt={-5}>
 Create a platform strategy to attract top talent, and foster innovation
 and creativity in the workplace to retain them.

    </Text>
    <Image
      radius="md"
       w={25}
       ml={690}
       mt={-50}
       mb={60}
       alt='image'
      src="icon.png"
    />
    <Image
      
      w={4}
      h={60}
      ml={700}
      mt={-61}
      alt='image'
     src="line.png"
   />
 <Text ml={740} c="dimmed" w={580} mt={-5}>
 Provide tailored professional development and executive education
      to improve the skillsets, knowledge and competencies of business 
      executives and IT

    </Text>
    <Image
      radius="md"
       w={25}
       ml={690}
       mt={-50}
       mb={60}
       alt='image'
      src="icon.png"
    />
    <Image
      
      w={4}
      h={60}
      ml={700}
      mt={-61}
      alt='image'
     src="line.png"
   />
 <Text ml={740} c="dimmed"  w={580} mt={-6}>
 Foster entrepreneurship and business incubation

    </Text>
    <Image
      radius="md"
       w={25}
       ml={690}
       mt={-20}
       mb={100}
       alt='image'
      src="icon.png"
    />

<Image
      
       w={4}
       h={60}
       ml={700}
       mt={-101}
       alt='image'
      src="line.png"
    />
<Text ml={740} c="dimmed"  w={580} mt={-15}>
 Deliver real value to shareholders through consistent growth and
 profitability

    </Text>
    <Image
      radius="md"
       w={25}
       ml={690}
       mt={-20}
       alt='image'
      src="icon.png"
    />

<Title mt={185} ml={255} c="dimmed" className={classes.title2} >
      Our Value
    </Title>
    <Image
      radius="md"
       w={650}
       ml={693.4}
       mt={-10}
       alt='image'
      src="value.png"
    />


<Text ml={80} c="dimmed" w={580} mt={-465}>
Working hard to make a difference in the organizations we serve

    </Text>
    <Image
      radius="md"
       w={25}
       ml={40}
       mt={-28}
       mb={60}
       alt='image'
      src="icon.png"
    />

<Image
      
       w={4}
       h={60}
       ml={50}
       mt={-61}
       alt='image'
      src="line.png"
    />
<Text ml={80} c="dimmed"  w={580} mt={-15}>
Striving to handle each client with accountability and responsiveness

    </Text>
    <Image
      radius="md"
       w={25}
       ml={40}
       mt={-25}
       mb={60}
       alt='image'
      src="icon.png"
    />

<Image
      
      w={4}
      h={60}
      ml={50}
      mt={-61}
      alt='image'
     src="line.png"
   />
<Text ml={80} c="dimmed" w={580} mt={-18}>
Commitment to consistent delivery of quality and value through 
innovation

    </Text>
    <Image
      radius="md"
       w={25}
       ml={40}
       mt={-25}
       mb={60}
       alt='image'
      src="icon.png"
    />
    <Image
      
      w={4}
      h={60}
      ml={50}
      mt={-61}
      alt='image'
     src="line.png"
   />
<Text ml={80} c="dimmed" w={580} mt={-15}>
Nurturing open communication, continuous learning, collaboration
and team work

    </Text>
    <Image
      radius="md"
       w={25}
       ml={40}
       mt={-25}
       mb={60}
       alt='image'
      src="icon.png"
    />

<Image
      
       w={4}
       h={60}
       ml={50}
       mt={-61}
       alt='image'
      src="line.png"
    />    
<Text ml={80} c="dimmed"  w={580} mt={-20}>
Commitment to impart knowledge, provide opportunity and mentor
ship, command respect

    </Text>
    <Image
      radius="md"
       w={25}
       ml={40}
       mt={-50}
       mb={60}
       alt='image'
      src="icon.png"
    />

    
<Image
      
       w={4}
       h={60}
       ml={50}
       mt={-61}
       alt='image'
      src="line.png"
    />
<Text ml={80} c="dimmed" w={580} mt={-5}>
Create an atmosphere where all staff are respected and valued

    </Text>
    <Image
      radius="md"
       w={25}
       ml={40}
       mt={-25}
       mb={160}
       alt='image'
      src="icon.png"
    />

  

  <FooterLinks/>

   </div>

  );
}