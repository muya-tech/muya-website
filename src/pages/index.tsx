import * as React from 'react'

import { Button, VStack } from '@chakra-ui/react'
import { HeadFC, Link, PageProps } from 'gatsby'

import Hero from '../layout/Hero'
import Layout from '../layout/Layout'
import { SEO } from '../components/seo'
import Section from '../layout/Section'

const content = {
    heroTitle: 'Empower Your Digital Future',
    heroDescription:
        'Drive your digital success with Muya\'s comprehensive suite of modern technology solutions and expert staff augmentation services.',
    sectionTitle: 'Focus on Competencies',
    sectionDescription:
        'We bring together a diverse set of technology staff with vetted competencies for the job at hand. Our culture is rooted in delivering valuable outcomes for our clients',
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
                    {content.nav.map((navLink) => {
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

export const Head: HeadFC = () => <SEO />
