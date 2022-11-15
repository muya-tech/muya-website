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
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'

interface MainProps {
  children: any,
}

const Main = ({ children }: MainProps) => {
  return (    
    <Box as="section">
      {children}
    </Box>
  )
}

export default Main;