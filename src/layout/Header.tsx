import * as React from 'react'

import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    Image,
    IconButton,
    Menu,
    MenuButton,
    MenuGroup,
    MenuItem,
    MenuList,
    Text,
    Heading,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react'

import { FiMenu } from 'react-icons/fi'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

const content = {
    logoText: 'Muya / ሙያ',
    nav: [
        {
            title: 'About',
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

const Header = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })

    return (
        <Box as="section">
            <Box as="nav" mb={{ base: 6, lg: 12 }}>
                <Container
                    maxW="6xl"
                    py={{ base: 4, lg: 5 }}
                    px={{ base: 5, md: 0 }}
                >
                    <HStack spacing="20" justify="space-between">
                        <Link to="/">
                            {/* <Heading
                                fontSize={{ base: '4xl', md: '5xl' }}
                                fontWeight="extrabold"
                                color="green.600"
                            >
                                {content.logoText}
                            </Heading> */}
                            <Image
                              src="/images/muya-logo-background.png"
                              height={{ base: '50px', md: '75px' }}
                            />
                        </Link>
                        {isDesktop ? (
                            <ButtonGroup variant="link" spacing="7">
                                {content.nav.map((navLink) => {
                                    return (
                                        <Button
                                            as={Link}
                                            to={navLink.path}
                                            fontSize="2xl"
                                            fontWeight="semibold"
                                            color="black"
                                            variant="link"
                                        >
                                            {navLink.title}
                                        </Button>
                                    )
                                })}
                            </ButtonGroup>
                        ) : (
                            <Menu closeOnSelect={true}>
                                <MenuButton
                                    aria-label="Menu"
                                    as={IconButton}
                                    variant="ghost"
                                    color="black"
                                    size="sm"
                                    cursor="pointer"
                                    fontSize="3xl"
                                    icon={<FiMenu />}
                                />
                                <MenuList minW="240px" color="black">
                                    <MenuGroup>
                                        {content.nav.map((navLink) => (
                                            <MenuItem
                                                as={Link}
                                                to={navLink.path}
                                            >
                                                {navLink.title}
                                            </MenuItem>
                                        ))}
                                    </MenuGroup>
                                </MenuList>
                            </Menu>
                        )}
                    </HStack>
                </Container>
            </Box>
            <Helmet htmlAttributes={{ lang: 'en' }} />
        </Box>
    )
}

export default Header
