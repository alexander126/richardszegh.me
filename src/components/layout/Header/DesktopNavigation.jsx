import React from 'react'
import styled from 'styled-components'

const NavBar = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

const NavLink = styled.a`
  font-size: 1.25rem;
  color: inherit;
  text-decoration: none;
  margin-left: 25px;
`

export default function DesktopNavigation() {
  return (
    <NavBar>
      <NavLink href="#">{'Home'}</NavLink>

      <NavLink href="#services">{'Services'}</NavLink>

      <NavLink href="#portfolio">{'Portfolio'}</NavLink>

      <NavLink href="#contact">{'Contact me'}</NavLink>
    </NavBar>
  )
}
