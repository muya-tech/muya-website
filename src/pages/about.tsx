import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Avatar, SimpleGrid, Box, Text, Button } from '@chakra-ui/react'
import Layout from "../layout/Layout"
import Hero from "../layout/Hero"
import Section from "../layout/Section"
import { VscWorkspaceTrusted } from 'react-icons/vsc'

const content = {
  heroTitle: 'About Us',
  heroDescription: 'We are a minority-owned digital services company focused on projects with social impact.',
  sections: [
    {
      title: 'Our Story',
      description: 'Focus was founded in 2019 to a deep set of industry experiences and bring best-in-class digital services capabilities in full-stack software development, human-centered design, and DevSecOps.',
      backgroundColor: 'blue.700',
      fontColor: 'white',
    },
    {
      title: 'Core Values',
      items: [
        {
          title: 'Clarity and transparency',
          description: 'Our jobs involve taking complicated topics and working to remove the ambiguity; our clients rely on us to work and communicate honestly and efficiently.',          
        },
        {
          title: 'Do the right thing',
          description: 'We always come prepared, researching and documenting before raising topics with our clients.  We respect our client’s time and communications by asking questions that get to the root of things.',
        },
        {
          title: 'Do what you say',
          description: 'Our reputation with our client’s is critical to our success as a business and that reputation is built by consistently delivering on what we promise to do.',
        },
        {
          title: 'Exhibit a growth mindset',
          description: 'The industry is constantly evolving and in order to stay relevant we need to constantly grow our skill sets to serve current and future clients.',
        },
      ]
    },
    {
      title: 'Expertise',
      items: [
        {
          title: 'Software Engineering',
          description: 'Say something here',
        },
        {
          title: 'Date Engineering',
          description: 'Say something here',
        },
        {
          title: 'Cloud Infrastructure',
          description: 'Say something here',
        },
        {
          title: 'Program & Product Management',
          description: 'Say something here',
        },
        {
          title: 'Research & Design ',
          description: 'Say something here',
        },
      ],
      backgroundColor: 'orange.100',
    },
    {
      title: 'Team',  
      description: 'Meet our diverse team of technologists!',    
      customId: 'team',
    }
  ]
};

const team = [
  {
    name: 'Ant Addis',
    title: 'CEO',
  },
  {
    name: 'Michael Kalish',
    title: 'CTO',
  },
  {
    name: 'Ant Addis',
    title: 'CEO',
  },
  {
    name: 'Michael Kalish',
    title: 'CTO',
  },
  {
    name: 'Ant Addis',
    title: 'CEO',
  },
  {
    name: 'Michael Kalish',
    title: 'CTO',
  },
]

const AboutPage: React.FC<PageProps> = () => {
  const customRenderMap: any = {
    'team': () => {
      return (        
        <Box>          
          <SimpleGrid columns={{ base: 2, md: 5 }} mb={{ base: 4, md: 12 }} spacing="10">
            { team.map(person => {
              return (
                <Box>
                  <Avatar name={person.name} size={{ base: 'xl', md: '2xl' }} mb={2} src='https://bit.ly/sage-adebayo' />
                  <Text fontSize="2xl" fontWeight="semibold" mb={1}>{person.name}</Text>
                  <Text fontSize="xl">{person.title}</Text>
                </Box>
              )
            })}
          </SimpleGrid>          
          <Button variant="solid" fontSize="2xl" colorScheme="blue">Join the Team!</Button>
        </Box>
      )
    }
  }

  return (
    <Layout>
      <Hero 
        title={content.heroTitle}
        description={content.heroDescription}
      />
      {content.sections.map(section => {
        return (
          <Section
            title={section.title}
            description={section.description}
            backgroundColor={section.backgroundColor}
            fontColor={section.fontColor}
            items={section.items}
          >
            {section.customId && customRenderMap[section.customId]()}
          </Section>
        )
      })}
      {/* <Section
        title={content.ourStoryTitle}
        description={content.ourStoryDescription}
        backgroundColor="blue.700"
        fontColor="white"
      > 
      </Section>
      <Section
        title={content.valuesTitle}
      > 
        <Box width={{ base: '100%', md: '75%' }}>
          {values}
        </Box>        
      </Section> */}
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>Home Page</title>
