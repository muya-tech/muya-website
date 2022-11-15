import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"
import { VStack, Button } from '@chakra-ui/react'
import Layout from "../layout/Layout"
import Hero from "../layout/Hero"
import Section from "../layout/Section"

const content = {
  heroTitle: 'Let’s Chat!',
  heroDescription: 'We’d love to hear from you! We’ll start with the problem you’re trying to solve and go from there.',
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero 
        title={content.heroTitle}
        description={content.heroDescription}
      />
      <Section title="Get In Touch">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeNQ75CAJzyQVOUKGMM_k6Zo03paPpeCdxPFdivUaM72jcceA/viewform?embedded=true" width="640" height="809" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </Section> 
    </Layout>    
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
