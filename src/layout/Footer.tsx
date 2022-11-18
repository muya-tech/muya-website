import {
  Box,
  Heading,
  Button,
  ButtonGroup,
  Container,
  Stack,
  Divider,
  IconButton,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link } from 'gatsby'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const content = {
  contactText:'Get In Touch!',
  contactButton: 'Contact',
  tagLine: 'Build Better Software!',
  nav: [
    {
      title: 'Home',
      path: '/',
    },
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
    {
      title: 'Careers',
      path: '/careers',
    },
  ],
  businessName: 'Focus Consulting, LLC',
  businessAddress1: '1629 K St NW Suite 300',
  businessAddress2: 'Washington, DC 20006',
  copyright: 'Focus Consulting, LLC. All rights reserved.',
}

const Footer = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (    
    <Box bg="gray.100" as="footer">
      <Container maxW="6xl" px={{ base: 5, md: 0 }}>
        <Stack
          spacing="8"
          direction="column"
          py={{ base: 10, md: 16 }}
        >
          <Stack spacing={{ base: 1, md: 2 }} align="start">
            <Text fontSize="2xl" fontWeight="semibold">{content.contactText}</Text>
            <Button fontSize="2xl" colorScheme="blue" as={Link} to="/contact">{content.contactButton}</Button>
          </Stack>
          <Divider />
          <Stack
            spacing="8"
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"            
          >
            <Stack spacing={{ base: 1, md: 2 }} align="start">
              <Heading fontSize="3xl" fontWeight="extrabold" color="red.600">focus</Heading>
              <Text fontSize="lg" color="muted">{content.tagLine}</Text>
            </Stack>
            <Stack
              spacing={{ base: 5, md: 8 }}
              direction={{ base: 'column', md: 'row' }}
              alignItems="flex-start"       
            >
              {content.nav.map(navLink => {
                return (
                  <Button 
                    as={Link}
                    to={navLink.path}
                    fontSize="xl"
                    fontWeight="bold"
                    color="blackAlpha.700"
                    variant="link"
                  >
                    {navLink.title}
                  </Button>
                )
              })}
            </Stack>
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="https://www.linkedin.com/company/35654054/admin/"
                target="_blank"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" />}
              />
            </ButtonGroup>        
          </Stack>
          <Stack spacing={{ base: 1, md: 2 }} align="start">
            <Text fontSize="sm">{content.businessName}</Text>
            <Text fontSize="sm">{content.businessAddress1}</Text>
            <Text fontSize="sm">{content.businessAddress2}</Text>            
          </Stack>          
          <Text fontSize="sm">&copy; {new Date().getFullYear()} {content.copyright}</Text>
        </Stack>        
      </Container>
    </Box>
  )
}

export default Footer;