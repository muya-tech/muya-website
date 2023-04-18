import * as React from 'react'

import {
    Box,
    HStack,
    Heading,
    Icon,
    IconButton,
    Link,
    Stack,
    Tag,
    Text,
} from '@chakra-ui/react'
import { FaEquals, FaExternalLinkAlt } from 'react-icons/fa'
import { HeadFC, PageProps } from 'gatsby'
import {
    MdBabyChangingStation,
    MdLocalHospital,
    MdOutlineDesignServices,
    MdOutlineSchool,
    MdScreenSearchDesktop,
} from 'react-icons/md'

import Hero from '../layout/Hero'
import Layout from '../layout/Layout'
import { SEO } from '../components/seo'
import Section from '../layout/Section'

const content = {
    heroTitle: 'Our Work',
    heroDescription:
        'We focus on projects with social impact. Success means people with better health, increased access to benefits to underserved communities, and better upskilling and job opportunities for disadvantaged communities.',
    sections: [
        {
            title: 'Focus on Social Impact',
            description: 'Our areas of focus reflect our values and expertise.',
            items: [
                {
                    title: 'Equity',
                    description:
                        'Enabling access to under-served and disadvantaged communities.',
                    icon: FaEquals,
                },
                {
                    title: 'Integrated Benefits',
                    description:
                        'Using digital services to make existing benefits services faster and more accessible.',
                    icon: MdBabyChangingStation,
                },
                {
                    title: 'Healthcare',
                    description:
                        'Addressing the vast US healthcare space through federal, local and commercial projects.',
                    icon: MdLocalHospital,
                },
                {
                    title: 'Learning & Development',
                    description:
                        'Emphasis on projects that enable upward mobility in under-served communities.',
                    icon: MdOutlineSchool,
                },
            ],
            backgroundColor: 'blue.700',
            fontColor: 'white',
        },
        {
            title: 'Projects',
            description:
                'We work across diverse industries and government to provide our deep expertise in digital services.',
            backgroundColor: 'gray.50',
            customId: 'projects',
        },
    ],
}

const projects = [
    {
        title: 'Massachusetts Paid Family and Medical Leave',
        tags: ['Integrated Benefits', 'Equity'],
        description: [
            'PFML was a new legislatively mandated state project that kicked off in January 2020 to provide Massachusetts residents the ability to apply for and receive payment for family and medical leave. Focus was part of the initial core team at project kickoff, and worked with our prime contracting partner (Nava PBC) and other stakeholders to staff project teams across product, engineering, DevOps and technical support.',
            'Our staff led delivery of various critical product and engineering milestones including the payments workflow, department of revenue data processing, approval workflow integration, and core API and cloud architecture. This work required coordination across numerous department agencies and vendor teams.',
        ],
        link: 'https://paidleave.mass.gov/create-account',
    },
    {
        title: 'Preventive Medicaid',
        tags: ['Healthcare'],
        description:
            'Supporting a commercial partner providing preventive care for medicaid patients across various states. They work with insurance providers to identify and treat patients with preventable hospitalization risk. Focus provides agile software development services across various engineering and cloud infrastructure teams. We are currently supporting  implementation of the next iteration of their data pipeline platform and infrastructure. Focus engineers are also building the client application that allows care providers to effectively provide preventive care using various patient data.',
    },
    {
        title: 'Healthcare for All',
        tags: ['Equity', 'Healthcare'],
        description:
            'Our staff have experience in key engineering leadership roles HealthCare.gov and MyMedicare.gov projects. Currently supporting CMS cloud transformation projects.',
        link: '',
    },
    {
        title: 'DC Housing Insights',
        tags: ['Equity'],
        description:
            'This open source tool provides housing advocates and government officials with insights on the state of affordable housing in Washington, DC. The project started as a Code for DC / CNHED / Greater DC initiative. The tool overlays multiple local and national data sources on top of an interactive map with various filter toggles to better visualize the data.',
        link: 'http://housinginsights.org/#',
    },
    {
        title: 'CDC ReportStream',
        tags: ['Healthcare'],
        description:
            'ReportStream is an open source, cloud based platform that aggregates and delivers reportable disease test results to health departments.',
        link: 'https://reportstream.cdc.gov/',
    },
    {
        title: 'New Jersey Unemployment Insurance',
        tags: ['Integrated Benefits', 'Equity'],
        description:
            'Our staff works with stakeholders to update and improve the experience and workflow when applying for unemployment insurance in New Jersey.',
        link: 'https://nj.gov/labor/myunemployment/before/about/howtoapply/applyonline.shtml',
    },
    {
        title: 'Marriott Learning Platform',
        tags: ['Learning & Development'],
        description:
            'We built regional and organization wide internal learning and development platforms that emphasized up-skilling and competency based career growth for staff.',
        link: 'https://www.marriott-ld.com/mda',
    },
    {
        title: 'Skills-Based Talent Platform',
        tags: ['Learning & Development'],
        description:
            'Building a next generation talent marketplace platform that uses well defined and industry aligned job competency maps to more accurately match job seekers with employers.',
        link: 'https://aspireability.io/',
    },
]

const tagToColor: any = {
    Equity: 'blue',
    'Integrated Benefits': 'orange',
    Healthcare: 'green',
    'Learning & Development': 'purple',
}

const AboutPage: React.FC<PageProps> = () => {
    const customRenderMap: any = {
        projects: () => {
            return projects.map((project) => {
                return (
                    <Box mb={{ base: 8, md: 12 }}>
                        <HStack spacing="3">
                            {project.tags.map((tag) => (
                                <Tag
                                    variant="subtle"
                                    colorScheme={tagToColor[tag]}
                                >
                                    {tag}
                                </Tag>
                            ))}
                        </HStack>
                        <Heading
                            fontSize={{ base: '3xl', md: '4xl' }}
                            fontWeight="extrabold"
                            mb={{ base: 1, md: 2 }}
                        >
                            {project.title}{' '}
                            {project.link && (
                                <IconButton
                                    aria-label="See link"
                                    icon={<Icon as={FaExternalLinkAlt} />}
                                    as={Link}
                                    isExternal
                                    href={project.link}
                                    variant="link"
                                />
                            )}
                        </Heading>
                        {Array.isArray(project.description) ? (
                            <Stack
                                direction="column"
                                spacing={{ base: 6, md: 6 }}
                            >
                                {project.description.map((paragraph) => (
                                    <Text fontSize="xl">{paragraph}</Text>
                                ))}
                            </Stack>
                        ) : (
                            <Text fontSize="xl">{project.description}</Text>
                        )}
                    </Box>
                )
            })
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
        </Layout>
    )
}

export default AboutPage

export const Head: HeadFC = () => <SEO title="Focus - Our Work" />
