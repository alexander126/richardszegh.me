import React from 'react'
import styled from 'styled-components'

import { HEADER_HEIGHT } from '../../style.config'

import Container from './Container'

const HeaderContainer = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
`

export default function Header() {
  return (
    <HeaderContainer>
      <Container>Header</Container>
    </HeaderContainer>
  )
}
