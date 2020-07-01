import React from 'react'
import styled from 'styled-components'

import { HEADER_HEIGHT } from '../../../style.config'

import Container from '../Container'

import DesktopNavigation from './DesktopNavigation'

const HeaderContainer = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default function Header() {
  return (
    <HeaderContainer>
      <Container>
        <HeaderContent>
          <span>{'LOGO'}</span>

          <DesktopNavigation />
        </HeaderContent>
      </Container>
    </HeaderContainer>
  )
}
