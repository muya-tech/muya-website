import {
  Box,
  Heading,
  ButtonGroup,
  Container,
  SimpleGrid,
  HStack,
  IconButton,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import { Icon } from '@chakra-ui/react'

interface MainProps {
  title: string,
  description?: string,
  items?: { title: string, description: string, icon? : any }[], 
  backgroundColor?: string,
  fontColor?: string,
  children: any,
}

const Section = ({ title, description, items, backgroundColor, fontColor, children }: MainProps) => {
  const props: any = {}
  if (backgroundColor) props['bg'] = backgroundColor;
  if (fontColor) props['color'] = fontColor;
  
  const renderItems = () => {
    if (items === undefined || items.length === 0) {
      return null;
    }    

    const iconColor = backgroundColor ? fontColor : 'gray.600';

    return items.map((value) => {
      return (
        <Box>
          {value.icon && (
            <Box mb={{ base: 1, md: 1 }}><Icon as={value.icon} boxSize={9} color={iconColor} /></Box>
          )}
          <Heading fontSize={{ 'base': '3xl', 'md': '3xl' }} fontWeight="semibold" mb={2}>{value.title}</Heading>
          <Text fontSize="xl">{value.description}</Text>
        </Box>      
      );
    });
  }

  return (    
    <Box
      as="section"
      py={{ base: 16, md: 12}}
      { ...props }
    >
      <Container maxW="6xl" px={{ base: 5, md: 0 }}>
        <Box width={{ base: '100%', md: '75%' }} mb={{ base: 8, md: 12}}>
          <Heading fontSize={{ base: '4xl', md: '5xl' }} fontWeight="extrabold" mb={{ base: 1, md: 2}}>{title}</Heading>
          {description && <Text fontSize={{ base: 'lg', md: 'xl' }}>{description}</Text>}          
        </Box>
        {items && (
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>
            {renderItems()}
          </SimpleGrid>
        )}
        {children}
      </Container>
    </Box>
  )
}

export default Section;