import * as React from 'react'

import {
    Box,
    Button,
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
    MdComputer,
    MdLocalHospital,
    MdOutlineDesignServices,
    MdOutlineSchool,
    MdScreenSearchDesktop,
} from 'react-icons/md'
import { RiCustomerServiceLine } from 'react-icons/ri'
import Hero from '../layout/Hero'
import Layout from '../layout/Layout'
import { SEO } from '../components/seo'
import Section from '../layout/Section'

const content = {
    heroTitle: 'Our Work',
    heroDescription:
        'Ready to see how Muya can help you achieve your digital goals? Check out our focus areas and expertise, and contact us to schedule a consultation.',
    sections: [
        {
            title: 'Focus Areas',
            description: 'Our areas of focus reflect our values and expertise.',
            items: [                
                {
                  title: 'Digital Transformation',
                  description:
                      'Helping support large digital transformation projects in growing economies.',
                  icon: MdComputer,
                },
                {
                    title: 'Government Services',
                    description:
                        'Using digital services to make existing benefits services digital and more accessible.',
                    icon: RiCustomerServiceLine,
                },
                {
                  title: 'Equity',
                  description:
                      'Enabling access to under-served and disadvantaged communities.',
                  icon: FaEquals,
                },              
                {
                    title: 'Learning & Development',
                    description:
                        'Emphasis on projects that enable upskilling and better jobs for communities.',
                    icon: MdOutlineSchool,
                },
            ],
            backgroundColor: 'blue.700',
            fontColor: 'white',
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
          // backgroundColor: 'orange.300',
          // customId: 'expertise',
          anchor: 'expertise',
      },
        // {
        //     title: 'Projects',
        //     description:
        //         'We work across diverse industries and government to provide our deep expertise in digital services.',
        //     backgroundColor: 'gray.50',
        //     customId: 'projects',
        // },
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
    //   expertise: () => {
    //     return (
    //         <Button
    //             variant="solid"
    //             fontSize={{ base: '2xl', md: '2xl' }}
    //             colorScheme="blue"
    //             as={Link}
    //             to="/our-work"
    //         >
    //             See Examples of Our Work
    //         </Button>
    //     )
    // },
        // projects: () => {
        //     return projects.map((project) => {
        //         return (
        //             <Box mb={{ base: 8, md: 12 }}>
        //                 <HStack spacing="3">
        //                     {project.tags.map((tag) => (
        //                         <Tag
        //                             variant="subtle"
        //                             colorScheme={tagToColor[tag]}
        //                         >
        //                             {tag}
        //                         </Tag>
        //                     ))}
        //                 </HStack>
        //                 <Heading
        //                     fontSize={{ base: '3xl', md: '4xl' }}
        //                     fontWeight="extrabold"
        //                     mb={{ base: 1, md: 2 }}
        //                 >
        //                     {project.title}{' '}
        //                     {project.link && (
        //                         <IconButton
        //                             aria-label="See link"
        //                             icon={<Icon as={FaExternalLinkAlt} />}
        //                             as={Link}
        //                             isExternal
        //                             href={project.link}
        //                             variant="link"
        //                         />
        //                     )}
        //                 </Heading>
        //                 {Array.isArray(project.description) ? (
        //                     <Stack
        //                         direction="column"
        //                         spacing={{ base: 6, md: 6 }}
        //                     >
        //                         {project.description.map((paragraph) => (
        //                             <Text fontSize="xl">{paragraph}</Text>
        //                         ))}
        //                     </Stack>
        //                 ) : (
        //                     <Text fontSize="xl">{project.description}</Text>
        //                 )}
        //             </Box>
        //         )
        //     })
        // },
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
                        customId={section.customId}
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

export const Head: HeadFC = () => <SEO title="Muya - Our Work" />
