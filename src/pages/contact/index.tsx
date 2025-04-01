import { Flex ,Box, Text, Title ,Image, Center } from '@mantine/core';
import classes from './index.module.css';

import {MapPin ,PhoneCall ,Mail } from 'lucide-react';

import EmailForm from '@/components/Emailss/EmailForm';
import HeaderMegaMenu from '@/components/header/header';



export default function Contact() {
  return (
   <div className={classes.body}>
       <div style={{ position: 'relative', zIndex: 1,   }}>
             <div style={{marginTop:"-7.5rem", marginBottom:"1000rem", marginLeft:"-1.7rem" , position: 'fixed', zIndex: 1000}}> <HeaderMegaMenu /></div>
      </div>

      <Title mt={120} ml={600} mb={10} > Contact</Title>
      <Image
            
           w={90}
           ml={615} 
           src="line2.png"
         />

      <Flex ml={100} mt={100} gap={10}>
  
            <Box className={classes.card} ml={10} w={520} >
                 <MapPin size={50}  strokeWidth={1} className={classes.icon} />
                 <Text w={170} mt={10} pl={210}>
                 Address
              </Text> 
              <Text w={720} mt={10} pl={130} >
              bole addika building Addis abeba
              </Text> 
              </Box>
              <Box className={classes.card} ml={10} w={260} >
                 <PhoneCall size={50}  strokeWidth={1}   className={classes.icon2} />
                 <Text w={170} mt={10} pl={95}>
                 Call Us
              </Text> 
              <Text w={170} mt={10} pl={70}>
              +251930288790
              </Text> 
              </Box>
              <Box className={classes.card} ml={10} w={260}>
                 <Mail size={50}  strokeWidth={1}   className={classes.icon3} />
                 <Text w={170} mt={10} pl={95}>
                 Email Us
              </Text> 
              <Text w={170} mt={10} pl={60}>
              info@mksaddis.com
              </Text> 
              </Box>
         

      </Flex>
      <div >
      < EmailForm/>
      </div>
      <div style={{ position: 'relative', width: '40%',marginTop:"-34.5rem",marginLeft:"7rem",  height: '300px' , marginBottom:"15rem"}}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.727168154343!2d38.80540367449936!3d8.997233491062834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85899b414429%3A0x605fd4640c00ea1!2sMentor%20Knowledge%20Solutions%20Plc!5e0!3m2!1sen!2set!4v1743241202728!5m2!1sen!2set"
        width="95%" 
        height="400rem" 
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
   </div>

  );
}