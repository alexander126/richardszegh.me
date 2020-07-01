import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { HEADER_HEIGHT, PRIMARY_COLOR } from '../../../style.config'

import Container from '../Container'

import DesktopNavigation from './DesktopNavigation'

const HeaderContainer = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  background-color: ${props => (props.scrolled ? '#fff' : 'transparent')};
  z-index: 9999;
  color: ${props => (props.scrolled ? PRIMARY_COLOR : '#fff')};
  padding-top: 24px;
  padding-bottom: 24px;
  box-shadow: ${props =>
    props.scrolled ? '0px 0px 15px 0px rgba(0, 0, 0, 0.75)' : 'none'};
  transition: 0.3s ease-in-out;
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default function Header({ scrolled }) {
  return (
    <HeaderContainer scrolled={scrolled}>
      <Container>
        <HeaderContent>
          <span>{'LOGO'}</span>

          <DesktopNavigation />
        </HeaderContent>
      </Container>
    </HeaderContainer>
  )
}

Header.propTypes = {
  scrolled: PropTypes.bool,
}
