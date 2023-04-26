import * as React from 'react'

import { Box, Button, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { FaCode, FaEquals } from 'react-icons/fa'
import { HeadFC, Link, PageProps } from 'gatsby'
import {
    MdBabyChangingStation,
    MdLocalHospital,
    MdWorkOutline,
    MdOutlineDesignServices,
    MdOutlineSchool,
    MdScreenSearchDesktop,
} from 'react-icons/md'
import { TbBuilding, TbBuildingBank } from 'react-icons/tb'

import { FiHeart } from 'react-icons/fi'
import { GiCongress } from 'react-icons/gi'
import Hero from '../layout/Hero'
import Layout from '../layout/Layout'
import { SEO } from '../components/seo'
import Section from '../layout/Section'

const content = {
    heroTitle: 'How can we help?',
    heroDescription:
        'Let us help you unlock more value and impact from your digital services.',
    sections: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Research & Design',
                    description:
                        'Human-centered Design, Service Design, UX Research, UI Design, User Testing',
                    icon: MdOutlineDesignServices,
                },
                {
                    title: 'Engineering & Technology',
                    description:
                        'Technical Strategy, Web Development, Data Engineering, DevSecOps, Security & Privacy',
                    icon: FaCode,
                },
                {
                    title: 'Planning & Agile Delivery',
                    description: 'Program, Product & Project Management',
                    icon: MdScreenSearchDesktop,
                },
                {
                  title: 'Job Market Readiness',
                  description: 'Internships and Apprenticeships',
                  icon: MdWorkOutline,
              },
            ],
            backgroundColor: 'blue.700',
            fontColor: 'white',
            customId: 'services',
        },
        {
            title: 'Who We Work With',
            description:
                'We work across diverse industries and government to provide our deep expertise in digital services.',
            // backgroundColor: 'blue.700',
            // fontColor: 'white',
            items: [
                {
                    title: 'National Government',
                    description:
                        'We bring our diverse technology expertise to modern digital services in the federal government.',
                    icon: GiCongress,
                    iconColor: 'green.700',
                },
                {
                    title: 'Local Government',
                    description:
                        'We strive to bring our experience in building benefits, equity and healthcare systems to similar initiatives in other cities and localities.',
                    icon: TbBuildingBank,
                    iconColor: 'green.700',
                },
                {
                    title: 'Industry',
                    description:
                        'Our staff bring diverse experience working in various industries including healthcare, early education, higher and corporate education, and finance.',
                    icon: TbBuilding,
                    iconColor: 'green.700',
                },
                {
                    title: 'Non-Profits & Civic Tech',
                    description:
                        'We have continued our team\'s dedication to supporting and participating in local civic tech and open source communities.',
                    icon: FiHeart,
                    iconColor: 'green.700',
                },
            ],
        },
        {
            title: "Let's Build Together",
            customId: 'work-with-us',
            backgroundColor: 'orange.300',
        },
    ],
}

const AboutPage: React.FC<PageProps> = () => {
    const customRenderMap: any = {
        services: () => {
            return (
                <Stack direction={{ base: 'column', md: 'row' }} spacing="3">
                    <Button
                        variant="solid"
                        fontSize={{ base: '2xl', md: '2xl' }}
                        colorScheme="teal"
                        as={Link}
                        to="/our-work#expertise"
                    >
                        Learn About Our Expertise
                    </Button>
                    {/* <Button
                        variant="solid"
                        fontSize={{ base: '2xl', md: '2xl' }}
                        colorScheme="teal"
                        as={Link}
                        to="/our-work"
                    >
                        Examples of Our Work
                    </Button> */}
                </Stack>
            )
        },
        'work-with-us': () => {
            return (
                <SimpleGrid
                    columns={{ base: 1, md: 3 }}
                    spacing={{ base: 12, md: 4 }}
                >
                    <Box>
                        <Heading fontSize="3xl" mb={4}>
                            Company Details
                        </Heading>
                        <Stack>
                            <Text fontSize="xl">
                                <b>Tax #</b>: 0084253976
                            </Text>
                        </Stack>
                    </Box>
                    <Box>
                        <Heading fontSize="3xl" mb={4}>
                            Regions we Serve
                        </Heading>
                        <Stack>
                            <Text fontSize="xl">
                                East Africa
                            </Text>
                            <Text fontSize="xl">
                                Middle East
                            </Text>
                            <Text fontSize="xl">
                                Europe
                            </Text>
                            <Text fontSize="xl">
                                North America
                            </Text>
                        </Stack>
                    </Box>
                    {/* <Box>
                        <Heading fontSize="3xl" mb={4}>
                            Certifications
                        </Heading>
                        <Stack>
                            <Text fontSize="xl">
                                8(a) Business Development Program
                            </Text>
                            <Text fontSize="xl">
                                Massachusets Minority Small Business
                            </Text>
                        </Stack>
                    </Box> */}
                </SimpleGrid>
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
                    >
                        {section.customId &&
                            customRenderMap[section.customId]()}
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

export const Head: HeadFC = () => <SEO title="Muya - Services" />
