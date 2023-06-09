import * as React from 'react'

import {
    Avatar,
    Box,
    Button,
    Divider,
    Heading,
    SimpleGrid,
    Text,
    Link,
    Icon
} from '@chakra-ui/react'
import { HeadFC, PageProps } from 'gatsby'
import { FaLinkedin } from 'react-icons/fa'

import Hero from '../layout/Hero'
import Layout from '../layout/Layout'
import { SEO } from '../components/seo'
import Section from '../layout/Section'

const content = {
    heroTitle: 'About Us',
    heroDescription:
        'Muya is a leading technology company that provides cutting-edge digital services and expert staff augmentation solutions to businesses of all sizes',
    sections: [
        {
            title: 'Our Story',
            description: [
              "Founded in 2022 by a team of industry experts in software development and technical leadership, Muya brings years of experience from the US, UK, and Finland markets. Our founders' background includes architecting & implementing large scale US government applications, managing multiple cross-functional project teams and running a growing digital services firm.",
              "This wealth of expertise and knowledge forms the backbone of our programs. At Muya, we're passionate about creating opportunities for talented individuals to succeed in the talent market of tomorrow.",
              "Muya (ሙያ) is an Amharic word that translates to 'talent' or 'profession', and accurately captures our dual mission of providing best-in-class talent services and providing pathways for our staff to upskill and grow in the digital age."
            ],                
            backgroundColor: 'blue.700',
            fontColor: 'white',
        },
        {
            title: 'Core Values',
            description:
                'Our values guide both how we work with our colleagues and how we view our partnerships.',
            backgroundColor: 'gray.100',
            items: [
                {
                    title: 'Clarity and transparency',
                    description:
                        'Our jobs involve taking complicated topics and working to remove the ambiguity; our clients rely on us to work and communicate honestly and efficiently.',
                },
                {
                    title: 'Be Prepared',
                    description:
                        "We always come prepared, researching and documenting before raising topics with our clients.  We respect our clients' time by asking questions that get to the root of things faster. ",
                },
                {
                    title: 'Collaboration',
                    description:
                        'We believe in the power of teamwork, and work closely with our clients to understand their needs and goals.',
                },
                {
                    title: 'Exhibit a growth mindset',
                    description:
                        'The industry is constantly evolving, and in order to stay relevant we constantly grow our skill sets to serve current and future clients.',
                },
            ],
        },        
        {
            title: 'Core Team',
            description: 'Meet our team.',
            customId: 'team',
        },
    ],
}

const team = [
    {
        name: 'Samuel Balcha',
        title: 'General Manager',
        photo: '/images/staff/sammy-profile.png',
        department: 'leadership',
        linkedin: 'https://www.linkedin.com/in/samuelhailemariam',
    },
    {
      name: 'Anteneh Addis',
      title: 'Digital Strategy',
      photo: '/images/staff/anteneh-3.png',
      department: 'leadership',
      linkedin: 'https://www.linkedin.com/in/anteneh-addis-98bb5128',
    },
    {
      name: 'Groum Tefera',
      title: 'Upskilling Strategy / Investor',
      photo: '/images/staff/groum-profile.png',
      department: 'advisor',
    },
    {
      name: 'Daniel Leul',
      title: 'Business Strategy / Investor',
      photo: '/images/staff/danny-profile.png',
      department: 'advisor',
    },
    {
      name: 'Mehrteab Leul',
      title: 'Investor',
      photo: '/images/staff/Mehrteab-Leul-profile.png',
      department: 'advisor',
      linkedin: 'https://www.linkedin.com/in/mehrteab-leul-kokeb',
    },
]

const AboutPage: React.FC<PageProps> = () => {
  const renderTeam = (teamName: string, teamFilter: string) => {
    return (
      <Box marginBottom="5">
        <Heading marginBottom="10">{teamName}</Heading>
        <SimpleGrid
            columns={{ base: 2, md: 4 }}
            mb={{ base: 12, md: 12 }}
            spacing="10"
        >
            {team
                .filter(
                    (person) =>
                        person.department === teamFilter
                )
                .map((person) => {
                    return (
                        <Box>
                            <Avatar
                                name={person.name}
                                size={{ base: 'xl', md: '2xl' }}
                                mb={2}
                                src={person.photo}
                            />
                            {person.linkedin ? (
                              <Link href={person.linkedin} isExternal={true}>
                                <Text
                                  fontSize={{
                                      base: 'xl',
                                      md: '2xl',
                                  }}
                                  fontWeight="semibold"
                                  textDecoration="underline"
                                  mb={1}
                                >
                                  { person.name}                                    
                                </Text>
                                <Text>{person.title}</Text>
                                <Icon as={FaLinkedin} />
                              </Link>                              
                            ) : (
                              <>
                                <Text
                                  fontSize={{
                                      base: 'xl',
                                      md: '2xl',
                                  }}
                                  fontWeight="semibold"
                                  mb={1}
                                >
                                    { person.name}
                                </Text>
                                <Text>{person.title}</Text>
                              </>                                                        
                            )}
                        </Box>
                    )
                })}
        </SimpleGrid>
        <Divider />
    </Box>
    )
  }

    const customRenderMap: any = {
        team: () => {
            return (
                <>
                  {renderTeam('Leadership', 'leadership')}
                  {renderTeam('Advisors', 'advisor')}
                </>
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
                        // anchor={section.anchor}
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

export const Head: HeadFC = () => <SEO title="Muya - About" />
