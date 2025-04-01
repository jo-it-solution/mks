import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text,Image, Divider } from '@mantine/core';

import classes from './Footer.module.css';

const data = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', link: '/' },
      { label: 'About', link: 'about' },
      { label: 'Management Consultacy', link: '#' },
      { label: 'Workshops,seminar and', link: '#' },
      { label: 'training', link: '#' },
      { label: 'Contact', link: '#' },
    ],
  },
  {
    title: 'Product',
    links: [
      { label: 'CATS', link: 'product#4' },
      { label: 'eFOM', link: '' },
      { label: 'eCOM', link: '#' },
      { label: 'Data Outsourcing', link: '#' },
      { label: 'sis', link: '#' },
      { label: 'rmCare', link: '#' },
    ],
  },
  {
    title: "Let's Connect",
    links: [
      { label: 'Bole,Adika Bldgrd Floor  ', link: '#' },
      { label: '+251930288790', link: '#' },
      { label: 'info@mksaddis.com', link: '#' },
      
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
        <Text className={classes.title} ml={2} mb={30}>About</Text>    
        <Image
      
      
      src="whitelogo.png"
       alt='image'
      w={70}
      
         />
          <Text size="xs" w={170} c="white" mt={-100} ml={90} className={classes.description}>
          Mentor Knowledge Solutions PLC is an IT and Management Consulting firm taking an active role in the business of making organizations perform better
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Divider mt={50} mb={-20}/>
      <Container className={classes.afterFooter}>
        <Text c="white" size="sm" >
          Copyright © 2025 Mentor Knowledge Solution.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="white" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="white" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="white" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}