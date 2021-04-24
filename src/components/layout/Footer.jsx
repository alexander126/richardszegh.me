import React from 'react'
import styled from 'styled-components'

import {PRIMARY_COLOR} from '../../style.config'

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${PRIMARY_COLOR};
  color: #fff;
  padding-top: 24px;
  padding-bottom: 24px;
  border-top: 1px solid #fff;
  text-align: center;
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
