import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Footer() {
  return (
    <FooterContainer>
      <small>
        Copyright &copy; {new Date().getFullYear()}
        {' | '}
        {'richardszegh.me'}
        {' | '}
        {'All rights reserved.'}
      </small>
    </FooterContainer>
  )
}
