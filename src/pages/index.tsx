import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"
import { VStack, Button } from '@chakra-ui/react'
import Layout from "../layout/Layout"
import Hero from "../layout/Hero"
import Section from "../layout/Section"

const content = {
  heroTitle: 'Build Better Software',
  heroDescription: 'We help government and industry partners build human-centered, high value, and highly maintainable digital services at scale.',
  sectionTitle: 'Human-Centered, Focused on Value',
  sectionDescription: 'We focus our work on identifying user needs, improving usability and delivering valuable outcomes for our clients.',
  nav: [
    {
      title: 'About Us',
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

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero 
        title={content.heroTitle}
        description={content.heroDescription}
      />
      <Section
        title={content.sectionTitle}
        description={content.sectionDescription}
        backgroundColor="blue.700"
        fontColor="white"
      >
        <VStack align="start" spacing="3">
          {content.nav.map(navLink => {
            return (
              <Button 
                as={Link}
                to={navLink.path}
                fontSize="2xl"
                fontWeight="bold"
                textDecoration="underline"
                variant="link"
                color="white"
              >
                {navLink.title}
              </Button>
            )
          })}
        </VStack>        
      </Section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
