import * as React from 'react'
import { Box } from '@chakra-ui/react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

interface LayoutProps {
  children: any,
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Header />
      <Main>
        {children}
      </Main>   
      <Footer />      
    </Box>
  )
}

export default Layout