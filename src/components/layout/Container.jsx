import React from 'react'
import styled from 'styled-components'

export const StyledContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`

export default function Container({children}) {
  return <StyledContainer>{children}</StyledContainer>
}
