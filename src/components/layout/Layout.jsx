import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { HEADER_HEIGHT } from '../../style.config'

import Header from './Header/Header'
import Footer from './Footer'

const Content = styled.div`
  padding-top: ${HEADER_HEIGHT}px;
`

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <Content>
        <main>{children}</main>
      </Content>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
