import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Stack, SimpleGrid, Box, Text, Heading } from '@chakra-ui/react'
import Layout from "../layout/Layout"
import Hero from "../layout/Hero"
import Section from "../layout/Section"
import { GiCongress } from 'react-icons/gi';
import { TbBuildingBank, TbBuilding } from 'react-icons/tb';
import { FiHeart } from 'react-icons/fi';
import { FaEquals, FaCode } from 'react-icons/fa';
import { MdBabyChangingStation, MdLocalHospital, MdOutlineSchool, MdOutlineDesignServices, MdScreenSearchDesktop } from 'react-icons/md';

const content = {
  heroTitle: 'How can we help?',
  heroDescription: 'We are growing our team to serve our mission and widen our impact!',
  sections: [
    {
      title: 'Partners',
      description: 'We work across diverse industries and government to provide our deep expertise in digital services.',
      backgroundColor: 'blue.700',
      fontColor: 'white',    
      items: [
        {
          title: 'Federal Government',
          description: '',
          icon: GiCongress,
        },
        {
          title: 'Local & State Government',
          description: '',
          icon: TbBuildingBank,
        },
        {
          title: 'Industry',
          description: '',
          icon: TbBuilding,
        },
        {
          title: 'Non-Profits & Civic Tech',
          description: '',
          icon: FiHeart,
        },
      ]  
    },
    {
      title: 'Focus on Social Impact',
      description: 'Our areas of focus reflect are values and expertise.',
      items: [
        {
          title: 'Equity',
          description: '',
          icon: FaEquals,
        },
        {
          title: 'Integrated Benefits',
          description: '',
          icon: MdBabyChangingStation,
        },
        {
          title: 'Healthcare',
          description: '',
          icon: MdLocalHospital,
        },
        {
          title: 'Learning & Development',
          description: '',
          icon: MdOutlineSchool,
        },
      ]
    },
    {
      title: 'Services',
      items: [        
        {
          title: 'Design & Research',
          description: 'Say something here',
          icon: MdOutlineDesignServices,
        },
        {
          title: 'Software Engineering',
          description: 'Say something here',
          icon: FaCode,
        },
        {
          title: 'Product',
          description: 'Say something here',
          icon: MdScreenSearchDesktop,
        },
      ],
      backgroundColor: 'orange.100',
    },
    {
      title: 'Let\'s Build Together!',
      customId: 'work-with-us',
    }
  ]
};

const AboutPage: React.FC<PageProps> = () => {
  const customRenderMap: any = {
    'work-with-us': () => {
      return (        
        <SimpleGrid columns={{ base: 1, md: 3}} spacing={{ base: 12, md: 4}}>                    
          <Box>
            <Heading fontSize="3xl" mb={4}>Company Details</Heading>
            <Stack>
              <Text fontSize="xl"><b>DUNS #</b>: 117371487</Text>
              <Text fontSize="xl"><b>UEI #</b>: DKGMKCMALNW6</Text>
              <Text fontSize="xl"><b>CAGE CODE</b>: 8PXE3</Text>
            </Stack>
          </Box>          
          <Box>
            <Heading fontSize="3xl" mb={4}>NAICS Codes</Heading>
            <Stack>
            <Text fontSize="xl"><b>541511</b>: Custom Computer Programming Services</Text>
            <Text fontSize="xl"><b>541512</b>: Computer Systems Design Services</Text>
            <Text fontSize="xl"></Text>
            </Stack>
          </Box>
          <Box>
            <Heading fontSize="3xl" mb={4}>Certifications</Heading>
            <Stack>
              <Text fontSize="xl">8(a) Business Development Program</Text>
              <Text fontSize="xl">Massachusets Minority Small Business</Text>
            </Stack>
          </Box>
        </SimpleGrid>
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
            fontColor={section.fontColor}
            items={section.items}
          >
            {section.customId && customRenderMap[section.customId]()}
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

export const Head: HeadFC = () => <title>Home Page</title>
