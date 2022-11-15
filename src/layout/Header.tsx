import {
  Box,
  Heading,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link } from 'gatsby';
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'

const content = {
  nav: [
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Services',
      path: '/services',
    },
    {
      title: 'Our Work',
      path: '/our-work',
    },
  ],
}

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (    
    <Box as="section">
      <Box as="nav" mb={{ base: 6, lg: 12}}>
        <Container maxW="6xl" py={{ base: 4, lg: 5}} px={{ base: 5, md: 0 }}>
          <HStack spacing="20" justify="space-between">
            <Link to="/">
              <Heading fontSize={{ base: '4xl', md: '5xl' }} fontWeight="extrabold" color="red.600">focus</Heading>
            </Link>
            {isDesktop ? (
              <ButtonGroup variant="link" spacing="7">  
                {content.nav.map(navLink => {
                  return (
                    <Button 
                      as={Link}
                      to={navLink.path}
                      fontSize="2xl"
                      fontWeight="semibold"
                      color="black"
                      variant="link"
                    >
                      {navLink.title}
                    </Button>
                  )
                })}
              </ButtonGroup>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}

export default Header;