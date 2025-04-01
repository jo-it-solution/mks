import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel  } from '@mantine/carousel';
import HeaderMegaMenu from "@/components/header/header";
import imagess from 'public/welcom.jpg'
import { Flex, Button,Slider } from '@mantine/core';
import '@mantine/carousel/styles.css';
import { Image } from '@mantine/core';
import classes from './index.module.css';
import { About } from '@/components/about/about';
import { FeaturesGrid } from '@/components/service/service';
import Product from '@/components/product/product';
import { Container } from 'lucide-react';
import Satisfaction from '@/components/satisfaction/satisfaction';
import { FooterLinks } from '@/components/footer/footer';





export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  return (
    <div >
       <div style={{ position: 'relative', zIndex: 1,   }}>
       <div style={{marginTop:"-15rem", marginBottom:"1000rem" , position: 'fixed', zIndex: 1000}}> <HeaderMegaMenu /></div>
       <div style={{margin:"14.5rem 10rem 10rem 4rem",color:"#FFFFFF", fontSize:"1.8rem", fontFamily:"sans-serif",  width:"50%"  }}><h1  >Mentor Knowledge</h1></div> 
       <div style={{margin:"-11rem 10rem 10rem 4rem",color:"#FFFFFF", fontSize:"1.8rem", fontFamily:"sans-serif",  width:"50%"  }}><h1  >Solutions</h1></div> 
       <div style={{margin:"-10rem 10rem 10rem 4rem",color:"#FFFFFF", fontSize:"0.7rem", fontFamily:"sans-serif",  width:"35%"  }}><h1 style={{fontWeight:"5"}}  >Highly Tailored IT Design, 
       Management & Support Services.</h1></div> 
      <Flex mt={-105} ml={70}><Button className={classes.button} component="a" href="/about" variant="outline"  color="#FFB413" radius="xl" >Learn More</Button></Flex> 
      </div>
      <Flex >

      </Flex>
      
    <div >
    <Carousel
      withIndicators
      height={660}
      mt={-575}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      
      <Carousel.Slide>
     
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Image
        src="welcom.jpg"
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          filter: 'grayscale(20%)' 
        }} 
       
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: -150,
          background: 'linear-gradient(180deg, rgba(153, 152, 152, 0.5), rgb(163, 107, 23))', 
          pointerEvents: 'none', 
          
        }}
      />
      
    </div>


      </Carousel.Slide>

      <Carousel.Slide>

<div style={{ position: 'relative', width: '100%', height: '100%' }}>
<Image
  src="welcom1.png"
  style={{ 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover',
    filter: 'grayscale(20%)' 
  }} 
 
/>
<div
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: -150,
    background: 'linear-gradient(180deg, rgba(153, 152, 152, 0.5), rgb(163, 107, 23))', 
    pointerEvents: 'none', 
  }}
/>
</div>


</Carousel.Slide>
<Carousel.Slide>

<div style={{ position: 'relative', width: '100%', height: '100%' }}>
<Image
  src="welcom2.jpg"
  style={{ 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover',
    filter: 'grayscale(20%)' 
  }} 
 
/>
<div
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: -150,
    background: 'linear-gradient(180deg, rgba(153, 152, 152, 0.5), rgb(163, 107, 23))', 
    pointerEvents: 'none', 
  }}
/>
</div>


</Carousel.Slide>
<Carousel.Slide>

<div style={{ position: 'relative', width: '100%', height: '100%' }}>
<Image
  src="welcom3.jpg"
  style={{ 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover',
    filter: 'grayscale(20%)' 
  }} 
 
/>
<div
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: -150,
    background: 'linear-gradient(180deg, rgba(153, 152, 152, 0.5), rgb(163, 107, 23))', 
    pointerEvents: 'none', 
  }}
/>
</div>


</Carousel.Slide>
<Carousel.Slide>

<div style={{ position: 'relative', width: '100%', height: '100%' }}>
<Image
  src="welcom.jpg"
  style={{ 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover',
    filter: 'grayscale(20%)' 
  }} 
 
/>
<div
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: -150,
    background: 'linear-gradient(180deg, rgba(153, 152, 152, 0.5), rgb(163, 107, 23))', 
    pointerEvents: 'none', 
  }}
/>
</div>


</Carousel.Slide>
     
   


    </Carousel>
     </div>
   
   <Flex ml={80} mt={50} w={1100}> <About/></Flex>
  
  
   <Flex bg={'#fbfbfd'} pb={300}>
   <FeaturesGrid/>
   </Flex>

   <Flex>
    <Product/>
    
   </Flex>

    <div>
      <Satisfaction/>
    </div>

    <div>
      <FooterLinks/>
    </div>
    </div>
  );
}
