import {
  Box,
  Heading,
  ButtonGroup,
  Container,
  Button,
  HStack,
  IconButton,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link } from "gatsby"
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'

interface MainProps {
  title?: string,
  description: string,
  ctaTitle?: string,
  ctaPath?: string,
}

const Hero = ({ title, description, ctaTitle, ctaPath }: MainProps) => {
  return (    
    <Box as="section" mb={{ base: 6, md: 12 }}>
      <Container maxW="6xl" py={{ base: 4, lg: 5}} px={{ base: 5, md: 0 }}>
        <Box width={{ base: '100%', md: '75%' }}>
          <Heading fontSize={{ base: '5xl', md: '6xl' }} fontWeight="extrabold" mb={{ base: 3, md: 5}}>{title}</Heading>
          <Text fontSize={{ base: 'xl', md: '2xl' }}>{description}</Text>
          { ctaTitle && ctaPath && <Button mb={{ base: 3, md: 5}} variant="solid" as={Link} to={ctaPath}>{ctaTitle}</Button>}
        </Box>
      </Container>      
    </Box>
  )
}

export default Hero;