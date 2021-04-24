import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import {AnchorLink} from 'gatsby-plugin-anchor-links';

import {HEADER_HEIGHT, PRIMARY_COLOR} from '../../../style.config';

import Container from '../Container';

import DesktopNavigation from './DesktopNavigation';

const HeaderContainer = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  background-color: ${props => (props.scrolled ? '#fff' : 'transparent')};
  z-index: 999;
  color: ${props => (props.scrolled ? PRIMARY_COLOR : '#fff')};
  box-shadow: ${props =>
    props.scrolled ? '0px 0px 15px 0px rgba(0, 0, 0, 0.75)' : 'none'};
  transition: 0.3s ease-in-out;
  display: flex;
  align-items: center;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled(AnchorLink)`
  margin: 0;
  padding: 0;
  height: 50px;
  width: 50px;
`;

function Header({scrolled}) {
  const data = useStaticQuery(graphql`
    query {
      primaryLogo: file(relativePath: {eq: "logo_primary.png"}) {
        childImageSharp {
          fixed(height: 50, width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      secondaryLogo: file(relativePath: {eq: "logo_secondary.png"}) {
        childImageSharp {
          fixed(height: 50, width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <HeaderContainer scrolled={scrolled}>
      <Container>
        <HeaderContent>
          <LogoLink to="/">
            <Img
              fixed={
                scrolled
                  ? data.primaryLogo.childImageSharp.fixed
                  : data.secondaryLogo.childImageSharp.fixed
              }
            />
          </LogoLink>

          <DesktopNavigation />
        </HeaderContent>
      </Container>
    </HeaderContainer>
  );
}

Header.propTypes = {
  scrolled: PropTypes.bool,
};

export default Header;
