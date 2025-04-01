
import classes from './satisfaction.module.css';
import { Box , Flex, Image ,Title} from '@mantine/core';

export default function Satisfaction() {
  return (
    <div className={classes.body}>


      <Title
      ml={50}
      mb={30}
      className={classes.title}
      
      >
      Satisfied Clients
        </Title> 
     
       <Box
      className={classes.box}

      
    />

 <div className={classes.logo}>
    

    
<Box
      className={classes.insidebox}
   
      
    />

<Image
      
      w={210}
      h={440}
      src="logo1.png"
      mt={-500}
      ml={400}
    />

<Image
      
      
      src="sat1.png"
      w={120}
      mt={-560}
      ml={440}
    />  

<Image
      
      
      src="sat2.png"
      w={120}
      mt={20}
      ml={700}
    />   

<Image
      
      
      src="sat3.png"
      w={120}
      mt={100}
      ml={720}
    />  


    <Image
      
      
      src="sat4.png"
      w={120}
      mt={80}
      ml={450}
    /> 
           
           <Image
      
      
      src="sat5.png"
      w={120}
      mt={-520}
      ml={210}
    />   

<Image
      
      
      src="sat6.png"
      w={120}
      mt={100}
      ml={220}
    />   

</div>   


    </div>
  );
}