import { IconChartRadar, IconSettingsPause, IconCloudComputing, IconTransitionRight } from '@tabler/icons-react';
import { Button, Grid, SimpleGrid, Text, ThemeIcon, Title,Image } from '@mantine/core';
import classes from './about.module.css';

const features = [
  {
    icon: IconTransitionRight,
    title: 'Our Vision',
    description: 'Unlocking technology to drive innovation, enhaance customer experiences,and improve performance.',
  },
  {
    icon: IconSettingsPause,
    title: 'Our Mission',
    description: 'Empower enterprises, small and high enterprises, with IT consulting and custom solutions for growth.',
  },
  {
    icon: IconChartRadar,
    title: 'Our Values',
    description:
      'Empower enterprises, small and high enterprises, with IT consulting and custom solutions for growth.',
  },
  {
    icon: IconCloudComputing,
    title: 'Our Commitment',
    description:
      'Empowering organizations with innovative solutions and a sup- portive environment.',
  },
];

export function About() {
  const items = features.map((feature) => (
    <div key={feature.title} className={classes.card}>
      <ThemeIcon
        size={50}
        radius="md"
        

      >
        <feature.icon size={49} stroke={2} color='#ffae00'  />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2}>
            About Us
             
          </Title>
          <Image
                 w={220}
                 ml={30}
                 mt={-15}
                 mb={40}
                  src="Vector 1.png"
                />
          <Text c="dimmed" className={classes.texts} >
          Mentor Knowledge Solutions PLC is an IT and Management Consulting
           firm taking an active role in the business of making organizations
            perform better. It was founded by a group of committed highlevel
             professionals and industrialists, who have the necess- ary knowledge
              and experience to make unsolicited contribution to the provision of
               technology-enabled innovative business solutions and services
          </Text>
          

          <Button className={classes.button} variant="outline" color="#FFB413" radius="xl"  mt={50}>Learn More</Button>
         
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}