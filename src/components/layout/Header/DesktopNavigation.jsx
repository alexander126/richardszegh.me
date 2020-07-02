import React from 'react'
import styled from 'styled-components'

import { AnchorLink } from 'gatsby-plugin-anchor-links'

const NavBar = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

const NavLink = styled(AnchorLink)`
  font-size: 1.25rem;
  color: inherit;
  text-decoration: none;
  margin-left: 25px;
`

export default function DesktopNavigation() {
  return (
    <NavBar>
      <NavLink to="/">{'Home'}</NavLink>

      <NavLink to="/#services">{'Services'}</NavLink>

      <NavLink to="/#portfolio">{'Portfolio'}</NavLink>

      <NavLink to="/#contact">{'Contact me'}</NavLink>
    </NavBar>
  )
}
