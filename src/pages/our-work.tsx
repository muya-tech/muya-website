import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Tag, HStack, Box, Text, Heading } from '@chakra-ui/react'
import Layout from "../layout/Layout"
import Hero from "../layout/Hero"
import Section from "../layout/Section"

const content = {
  heroTitle: 'Our Work',
  heroDescription: 'TODO: Blurb about values <> integrate with our focus areas',
  sections: [
    {
      title: 'Projects',
      description: 'We work across diverse industries and government to provide our deep expertise in digital services.',
      backgroundColor: 'gray.50',
      customId: 'projects',      
    },
  ]
};

const projects = [
  {
    title: 'Massachusetts Paid Family and Medical Leave',
    tags: ['Integrated Benefits', 'Equity'],
    description: 'Focus was part of the initial core team at project kickoff, and worked with our prime contracting partner (Nava) and other stakeholders to staff project teams across product, engineering, cloud infrastructure and operational/technical support.',
  },
  {
    title: 'Preventive Medicaid',
    tags: ['Healthcare'],
    description: 'Focus was part of the initial core team at project kickoff, and worked with our prime contracting partner (Nava) and other stakeholders to staff project teams across product, engineering, cloud infrastructure and operational/technical support.',
  },
  {
    title: 'Healthcare for All',
    tags: ['Equity', 'Healthcare'],
    description: 'Focus was part of the initial core team at project kickoff, and worked with our prime contracting partner (Nava) and other stakeholders to staff project teams across product, engineering, cloud infrastructure and operational/technical support.',
  },
  {
    title: 'DC Housing Insights',
    tags: ['Equity'],
    description: 'Focus was part of the initial core team at project kickoff, and worked with our prime contracting partner (Nava) and other stakeholders to staff project teams across product, engineering, cloud infrastructure and operational/technical support.',
  },
  {
    title: 'Marriott Learning Platform',
    tags: ['Learning & Development'],
    description: 'Focus was part of the initial core team at project kickoff, and worked with our prime contracting partner (Nava) and other stakeholders to staff project teams across product, engineering, cloud infrastructure and operational/technical support.',
  },
  {
    title: 'Skills-Based Talent Platform',
    tags: ['Learning & Development'],
    description: 'Focus was part of the initial core team at project kickoff, and worked with our prime contracting partner (Nava) and other stakeholders to staff project teams across product, engineering, cloud infrastructure and operational/technical support.',
  },
];

const tagToColor: any = {
  'Equity': 'blue',
  'Integrated Benefits': 'orange',
  'Healthcare': 'green',
  'Learning & Development': 'purple',
}

const AboutPage: React.FC<PageProps> = () => {
  const customRenderMap: any = {
    'projects': () => {
      return (        
        projects.map(project => {
          return (
            <Box mb={{ base: 5, md: 12}}>
              <HStack spacing="5">
                {project.tags.map(tag => (<Tag variant="subtle" colorScheme={tagToColor[tag]}>{tag}</Tag>))}
              </HStack>
              <Heading fontSize="4xl" fontWeight="extrabold" mb={{ base: 1, md: 2}}>{project.title}</Heading>
              <Text fontSize="xl">{project.description}</Text>
            </Box>
          )
        })
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
          >
            {section.customId && customRenderMap[section.customId]()}
          </Section>
        )
      })}
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>Home Page</title>
