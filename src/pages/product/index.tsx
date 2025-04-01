import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './index.module.css';
import HeaderMegaMenu from '@/components/header/header';
import { IconCheck } from '@tabler/icons-react';
import { FooterLinks } from '@/components/footer/footer';

export default function Product() {
  return (
   <div className={classes.body}>
 <div style={{ position: 'relative', zIndex: 1,   }}>
       <div style={{marginTop:"3.3rem", marginBottom:"1000rem" , position: 'fixed', zIndex: 1000}}> <HeaderMegaMenu /></div>
      </div>
    <Image
      radius="md"
       w={1335.3}
       ml={8}
       mt={-55}
      src="product.png"
    />

  <Title mt={-450} ml={225}  className={classes.titles} >
      Our
    </Title>
    <Title mt={-119} ml={425} c={"white"}  className={classes.titles} >
       Product
    </Title>
    

    <Text ml={250}  w={500} className={classes.text}>
    Mentor Knowledge Solutions PLC delivers innovative IT and Manag- ement 
    Consulting solutions tailored to enhance organizational performance and 
    operational efficiency. Our products empower businesses to align technology
     with strategic goals and thrive in a competitive landscape.
    </Text>

    <Container size="md" mt={300} id='1'>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
             <span className={classes.highlight}>eFOM</span> 
          </Title>
          <Text c="dimmed" size='lg' mt="md" className={classes.texts} >
          eFOM is an end-to-end bespoke application designed and developed to 
          support freight forwarders and logistics operators manage their operations
           and processes in an industry standard and customized ways. The
          application is a combination of the following major modules.
          </Text>
   
        </div>
        <Image src="logistics.png" className={classes.image} />
      </div>
    </Container>

    <Container size="md" mt={0} id='2'>
      <div className={classes.inner}>
        
        <Image src="ecom.png" mt={-30} className={classes.image1} />

        <div className={classes.content1}>
          <Title className={classes.title}>
             <span className={classes.highlight}>eCOM</span> 
          </Title>
          <Text c="dimmed" size='lg' mt="sm"  className={classes.texts} >
          eCOM is a a application consisting of an enterprise application and a 
          set of mobile apps designed and developed to enhance productivity and 
          effective use of manpower, construction equipment and material in 
          construction projects while minimizing cost and reducing the amount
           of waste in the construction industry. The application consists of
            major modules as follows
          </Text>
   
        </div>
      </div>
    </Container>

    <Container size="md" mt={80} id='3'>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
             <span className={classes.highlight}>MAVEKO</span> 
          </Title>
          <Text c="dimmed" size='lg' mt="md" className={classes.texts} >
          The data outsourcing work involves managing the daily orders of 
          custo-mers to meet their product needs, including creating new 
          orders and confirming them. Along with handling requests for quota, 
          booking inventory, and managing the products and stocks.
          </Text>
   
        </div>
        <Image src="maveko.png" className={classes.image} />
      </div>
    </Container>

    <Container size="md" mt={-10} id='4'>
      <div className={classes.inner}>
        
        <Image src="sis.png"  className={classes.image2} />

        <div className={classes.content1}>
          <Title className={classes.title}>
             <span className={classes.highlight}>SIS</span> 
          </Title>
          <Text c="dimmed" size='lg' mt="sm"  className={classes.texts} >
          Every educational institution has to manage a huge amount of student data
           on a daily basis. Student information systems help organize, categorize 
           this information, saving valuable amount of time from the teachers, students
            and everyone else involved in the education process. Our student information 
            management systems a manual workload and labor as they make daily tasks easier 
            and error-free.
          </Text>
   
        </div>
      </div>
    </Container>

    <Container size="md" mt={80} id='5'>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
             <span className={classes.highlight}>rmCare</span> 
          </Title>
          <Text c="dimmed" size='lg' mt="md" className={classes.texts} >
          rmCare is a free software developed by Mentor as part of its Corporate 
          Social responsiblity. The system enables HEWs to receive health education 
          content online and allows collabo- ration and consultation among professionals 
          in maternal and child healthcare. It also helps to streamline the flow of 
          clinical information and a range of healthcare activities in the rural areas
           including, monitoring, automatic reminders, scheduling of appointments and referrals.
          </Text>
   
        </div>
        <Image src="rncare.png" className={classes.image} />
      </div>
    </Container>

<FooterLinks/>
   </div>

  );
}