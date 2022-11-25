import * as React from 'react'

import { Avatar, Box, Button, SimpleGrid, Text } from '@chakra-ui/react'
import { HeadFC, Link, PageProps } from 'gatsby'

import Hero from '../layout/Hero'
import Layout from '../layout/Layout'
import { SEO } from '../components/seo'
import Section from '../layout/Section'
import { VscWorkspaceTrusted } from 'react-icons/vsc'

const content = {
    heroTitle: 'About Us',
    heroDescription:
        'We are a minority-owned digital services company focused on projects with social impact.',
    sections: [
        {
            title: 'Our Story',
            description:
                'Focus was founded in 2019 to bring together a diverse set of industry and government experiences, and best-in-class digital services capabilities in agile software development, human-centered design, and DevSecOps. Our projects span work that addresses equity, healthcare, benefits, and learning across government and commercial clients.',
            backgroundColor: 'blue.700',
            fontColor: 'white',
        },
        {
            title: 'Core Values',
            description:
                'Our values guide both how we work with our colleagues and how we view our partnerships.',
            items: [
                {
                    title: 'Clarity and transparency',
                    description:
                        'Our jobs involve taking complicated topics and working to remove the ambiguity; our clients rely on us to work and communicate honestly and efficiently.',
                },
                {
                    title: 'Do the right thing',
                    description:
                        "We always come prepared, researching and documenting before raising topics with our clients.  We respect our clients' time by asking questions that get to the root of things faster. ",
                },
                {
                    title: 'Do what you say',
                    description:
                        'Our reputation with our clients is critical to our success as a business and that reputation is built by consistently delivering on what we promise to do.',
                },
                {
                    title: 'Exhibit a growth mindset',
                    description:
                        'The industry is constantly evolving, and in order to stay relevant we constantly grow our skill sets to serve current and future clients.',
                },
            ],
        },
        {
            title: 'Expertise',
            items: [
                {
                    title: 'Software Engineering',
                    description:
                        'We bring deep expertise in full-stack web development using agile development processes. Our staff have successfully built and maintained high complexity applications serving millions of users.',
                },
                {
                    title: 'Research & Design ',
                    description:
                        'We center our work on human-centered design and research to gain deep insights into user challenges and needs. We use user research and testing before and after feature launches to gain insights and make our work more valuable.',
                },
                {
                    title: 'Data Engineering',
                    description:
                        'Our teams have strong experience processing, transforming, integrating, and synthesizing large volumes of diverse data sets. We have a depth of experience working with healthcare data across government, insurers, and hospitals.',
                },
                {
                    title: 'Product Management',
                    description:
                        'Our product managers work with their design and research colleagues to understand customer needs, work with our stakeholders, and craft high value solutions. We make data-driven product decisions by defining and tracking success metrics within an agile development approach.',
                },
                {
                    title: 'DevOps & Cloud Infrastructure',
                    description:
                        'We develop and improve robust CI/CD processes that free up developers to focus on providing user value, accessibility, and privacy. We work across the cloud ecosystem (AWS, Azure, Google Cloud). We use infrastructure as code approach to consistently define our cloud resources with automated deploys.',
                },
                {
                    title: 'Project & Program Management',
                    description:
                        'Our project managers tie everything together by supporting our planning, stakeholder coordination, and delivery work. We use strong documentation and communication practices to work efficiently in an increasingly distributed world.',
                },
            ],
            backgroundColor: 'orange.300',
            customId: 'expertise',
            anchor: 'expertise',
        },
        {
            title: 'Core Team',
            description: 'Meet our diverse team of technologists.',
            customId: 'team',
        },
    ],
}

const team = [
    {
        name: 'Eyuel Abebe',
        title: 'Software Engineer',
    },
    {
        name: 'Ant Addis',
        title: 'CEO',
        photo: '/images/staff/anteneh-3.webp',
    },
    {
        name: 'Kolawole Balegun',
        title: 'Software Engineer',
        photo: '/images/staff/kola.webp',
    },
    {
        name: 'Iverson Diles',
        title: 'Software Engineer',
        photo: '/images/staff/iverson-diles.webp',
    },
    {
        name: 'Sid Hackney',
        title: 'Software Engineer',
        photo: '/images/staff/sid.webp',
    },
    {
        name: 'Michael Kalish',
        title: 'CTO',
        photo: '/images/staff/kalish-profile.webp',
    },
    {
        name: 'Bethlehem Mulugeta',
        title: 'Recruiting',
    },
    {
        name: 'Bruk Abebe',
        title: 'Software Engineer',
        photo: '/images/staff/bruk-abebe.webp',
    },
    {
        name: 'Eric Opoku',
        title: 'Software Engineer',
    },
    {
        name: 'Kevon Paynter',
        title: 'Product Manager',
        photo: '/images/staff/kevon.webp',
    },
    {
        name: 'Mike Liu',
        title: 'Software Engineer',
    },
]

const AboutPage: React.FC<PageProps> = () => {
    const customRenderMap: any = {
        team: () => {
            return (
                <Box>
                    <SimpleGrid
                        columns={{ base: 2, md: 4 }}
                        mb={{ base: 12, md: 12 }}
                        spacing="10"
                    >
                        {team.map((person) => {
                            return (
                                <Box>
                                    <Avatar
                                        name={person.name}
                                        size={{ base: 'xl', md: '2xl' }}
                                        mb={2}
                                        src={person.photo}
                                    />
                                    <Text
                                        fontSize={{ base: 'xl', md: '2xl' }}
                                        fontWeight="semibold"
                                        mb={1}
                                    >
                                        {person.name}
                                    </Text>
                                    <Text fontSize={{ base: 'lg', md: 'xl' }}>
                                        {person.title}
                                    </Text>
                                </Box>
                            )
                        })}
                    </SimpleGrid>
                    <Button
                        variant="solid"
                        fontSize={{ base: '2xl', md: '2xl' }}
                        colorScheme="blue"
                        as={Link}
                        to="/careers"
                    >
                        Join the Team
                    </Button>
                </Box>
            )
        },
        expertise: () => {
            return (
                <Button
                    variant="solid"
                    fontSize={{ base: '2xl', md: '2xl' }}
                    colorScheme="blue"
                    as={Link}
                    to="/our-work"
                >
                    See Examples of Our Work
                </Button>
            )
        },
    }

    return (
        <Layout>
            <Hero
                title={content.heroTitle}
                description={content.heroDescription}
            />
            {content.sections.map((section) => {
                return (
                    <Section
                        title={section.title}
                        description={section.description}
                        backgroundColor={section.backgroundColor}
                        fontColor={section.fontColor}
                        items={section.items}
                        anchor={section.anchor}
                    >
                        {section.customId &&
                            customRenderMap[section.customId]()}
                    </Section>
                )
            })}
        </Layout>
    )
}

export default AboutPage

export const Head: HeadFC = () => <SEO title="Focus - About" />
