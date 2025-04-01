import {
    IconTir,
    IconUsersGroup,
    IconChevronDown,
    IconPhysotherapist,
    IconBrandDatabricks,
    IconNotification,
    IconTransfer,
  } from '@tabler/icons-react';
  import { Image } from '@mantine/core';

  import {
    Anchor,
    Box,
    Burger,
    Button,
    Center,
    Collapse,
    Divider,
    Drawer,
    Group,
    HoverCard,
    ScrollArea,
    SimpleGrid,
    Text,
    ThemeIcon,
    UnstyledButton,
    useMantineTheme,
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
 
  
  import  './Header.css';
import { useState , useEffect} from 'react';
  
  const mockdata = [
    {
      icon: IconTir,
      title: 'EFOM',
      description: 'Custom logistic software streamlining order-to-cash operations.',
    },
    {
      icon: IconTransfer,
      title: 'CATS',
      description: 'The system improves commodity visibility and reporting',
    },
    {
      icon: IconPhysotherapist,
      title: 'RMCARE',
      description: 'A maternal and child health software co-developed with users.',
    },
    
    {
      icon: IconBrandDatabricks,
      title: 'MAVEKO',
      description: 'Data outsourcing handles customer orders and inventory management.',
    },
    {
      icon: IconUsersGroup,
      title: 'SIS',
      description: 'A software for colleges to manage student information',
    },
    {
      icon: IconNotification,
      title: 'ECOM',
      description: 'A custom app suite to boost productivity in construction',
    },
  ];
  
  export default function HeaderMegaMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
    const [color, setColor] = useState(false);

    useEffect(() => {
      const changeColor = () => {
          if (window.scrollY >= 90) {
              setColor(true);
          } else {
              setColor(false);
          }
      };

      // Add scroll event listener
      window.addEventListener('scroll', changeColor);

      // Cleanup function to remove the event listener on unmount
      return () => {
          window.removeEventListener('scroll', changeColor);
      };
  }, []); // Empty dependency array to run once

  const links = mockdata.map((item) => (
      <UnstyledButton className="subLink" key={item.title}>
          <Group wrap="nowrap" align="flex-start">
              <ThemeIcon size={34} variant="default" color={"#FFB413"} radius="md">
                  <item.icon size={25} color={"#FFB413"} />
              </ThemeIcon>
              <div>
                  <Anchor size="sm" fw={500} href="product#1" c={"#FFB413"}>
                      {item.title}
                  </Anchor>
                  <Text size="xs" c="dimmed">
                      {item.description}
                  </Text>
              </div>
          </Group>
      </UnstyledButton>
  ));

  return (
      <Box pb={10} className={color ? 'headers header-bg' : 'headers'}>
        <header className="header">
          <Group justify="space-between" h="100%">
          <Image
      m={20}
      ml={80}
      mr={238}
      w={100}
      h={100}
      className="image"
      src="logo.png"
       alt='image'
    />
     
  
            <Group h="100%" gap={0} visibleFrom="md">
              <a href="" className="link">
                Home
              </a>
              <a href="about" className="link">
                About
              </a>
              <a href="service" className="link">
                Our Service
              </a>
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="product" className="link">
                    <Center inline>
                      <Box component="span" mr={5}>
                        Our product
                      </Box>
                      <IconChevronDown size={21} color={theme.colors.blue[1]} />
                    </Center>
                  </a>
                </HoverCard.Target>
  
                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group justify="space-between" px="md" m={10}>
                    <Text fw={500} ml={-22}>Our product</Text>
                    <Anchor href="product" fz="md" c={"#FFB413"}>
                      View all
                    </Anchor>
                  </Group>
  
                  
  
                  <SimpleGrid cols={2} spacing={0} >
                    {links}
                  </SimpleGrid>
  
                
                </HoverCard.Dropdown>
              </HoverCard>
              <a href="contact" className="link">
                Contact Us
              </a>
            
            </Group>
  
           
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm"   mt={100} ml={250} />
          </Group>
        </header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h="calc(100vh - 80px" mx="-md">
            <Divider my="sm" />
  
            <a href="#" className="link">
              Home
            </a>
            <UnstyledButton className="link" onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Features
                </Box>
                <IconChevronDown size={16} color={theme.colors.blue[6]} />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <a href="#" className="link">
              Learn
            </a>
            <a href="#" className="link">
              Academy
            </a>
  
            <Divider my="sm" />
  
            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }