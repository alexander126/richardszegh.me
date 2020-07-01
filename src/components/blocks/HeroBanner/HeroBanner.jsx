import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import { HEADER_HEIGHT, PRIMARY_COLOR } from '../../../style.config'

import Container from '../../layout/Container'

import Button from '../../UI/Button'

const HeroBannerBackground = styled(BackgroundImage)`
  padding-top: ${HEADER_HEIGHT}px;
  height: 100vh;
  color: #fff;
`

const HeroBannerContentWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

const HeroBannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-end;
  }
`

const HeroBannerContentText = styled.div`
  max-width: 450px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: right;
  }
`

const Welcome = styled.h1`
  line-height: 1.25;
  margin-bottom: 42px;

  font-size: 1.5rem;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

const MissionContainer = styled.div`
  margin-bottom: 42px;
`

const MissionQuestion = styled.h4`
  margin-bottom: 0.75rem;
  display: inline-block;
  background-color: #fff;
  color: ${PRIMARY_COLOR};
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

const Mission = styled.h1`
  line-height: 1.25;

  font-size: 1.5rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

const ButtonContainer = styled.div`
  text-align: center;
`

export default function HeroBanner() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "abstract_space.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <HeroBannerBackground
      Tag="section"
      fluid={data.file.childImageSharp.fluid}
      backgroundColor={PRIMARY_COLOR}
    >
      <HeroBannerContentWrapper>
        <Container>
          <HeroBannerContent>
            <HeroBannerContentText>
              <Welcome>
                Hey, my name is Richárd,
                <br />
                I'm a developer consultant.
              </Welcome>

              <MissionContainer>
                <MissionQuestion>My mission is to:</MissionQuestion>

                <Mission>
                  Materialize visions through masterfully crafted software.
                </Mission>
              </MissionContainer>

              <ButtonContainer>
                <Button variant="primary" size="large">
                  {'View services'}
                </Button>
              </ButtonContainer>
            </HeroBannerContentText>
          </HeroBannerContent>
        </Container>
      </HeroBannerContentWrapper>
    </HeroBannerBackground>
  )
}
