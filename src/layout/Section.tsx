import {
  Box,
  Heading,
  ButtonGroup,
  Container,
  SimpleGrid,
  Stack,
  IconButton,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import { Icon } from '@chakra-ui/react'

interface MainProps {
  title: string,
  description?: string | string[],
  items?: { title: string, description: string, icon? : any, iconColor?: string }[], 
  backgroundColor?: string,
  fontColor?: string,
  anchor?: string,
  children: any,
}

const Section = ({ title, description, items, backgroundColor, fontColor, anchor, children }: MainProps) => {
  const props: any = {}

  if (backgroundColor) props['bg'] = backgroundColor;
  if (fontColor) props['color'] = fontColor;
  if (anchor) props['id'] = anchor;
  
  const renderItems = () => {
    if (items === undefined || items.length === 0) {
      return null;
    }    

    const iconColor = backgroundColor ? fontColor : 'gray.600';

    return items.map((value) => {
      return (
        <Box>
          {value.icon && (
            <Box mb={{ base: 1, md: 1 }}><Icon as={value.icon} boxSize={{ base: 9, md: 9 }} color={value.iconColor || iconColor} /></Box>
          )}
          <Heading fontSize={{ 'base': '3xl', 'md': '3xl' }} fontWeight="semibold" mb={2}>{value.title}</Heading>
          {Array.isArray(value.description) ? (
            <Stack direction="column" spacing={{ base: 6, md: 6 }}>
              {value.description.map(paragraph => (<Text fontSize="xl">{paragraph}</Text>))}
            </Stack>
          ) : (
            <Text fontSize="xl">{value.description}</Text>
          )}          
        </Box>      
      );
    });
  }

  const renderDescription = (description: string | string[]) => {
    if (Array.isArray(description)) {      
      return (
        <VStack gap={3}>
          {description.map((para: string) => <Text fontSize={{ base: 'lg', md: 'xl' }} color="muted">{para}</Text>)}
        </VStack>
      )
    }

    return (
      <Text fontSize={{ base: 'lg', md: 'xl' }} color="muted">{description}</Text>
    )
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
          {description && renderDescription(description)}          
        </Box>
        {items && (
          <Box mb={{ base: 8, md: 12}}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 16 }}>
              {renderItems()}
            </SimpleGrid>
          </Box>          
        )}
        <Box mb={{ base: 8, md: 12}}>
          {children}
        </Box>        
      </Container>
    </Box>
  )
}

export default Section;