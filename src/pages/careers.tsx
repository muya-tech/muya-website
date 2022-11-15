import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"
import { Stack, Button } from '@chakra-ui/react'
import Layout from "../layout/Layout"
import Hero from "../layout/Hero"
import Section from "../layout/Section"

const content = {
  heroTitle: 'Careers',
  heroDescription: 'We are a small, distributed, and growing team of talented technologists. We put diversity & inclusion at the heart of our values and work. We’re building a company that makes the government more accessible to its people.',
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero 
        title={content.heroTitle}
        description={content.heroDescription}
      />
      <Section title="Join the team!" backgroundColor="blue.700" fontColor="white">
        <Stack align="start" spacing="4">
          <Button variant="link" fontSize={{ base: '2xl', md: '2xl' }} color="white" textDecoration="underline">Hiring Process</Button>
          <Button variant="link" fontSize={{ base: '2xl', md: '2xl' }} color="white" textDecoration="underline">View Open Positions</Button>
        </Stack>        
      </Section> 
    </Layout>    
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
