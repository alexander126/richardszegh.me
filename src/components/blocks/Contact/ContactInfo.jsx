import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Grid } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

const ContactInfoContainer = styled.div`
  padding: 24px;

  text-align: center;
  @media (min-width: 600px) {
    text-align: left;
  }
`

const ContactInfoItem = styled.div`
  &:not(:first-child) {
    margin-top: 24px;
  }
`

const ContactInfoItemTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 6px;
`

const ContactInfoItemDescription = styled.p`
  margin-bottom: 0;
`

const BlockTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 18px;
`

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
`

const AboutMe = styled.div`
  font-size: 0.875rem;
`

const Paragraph = styled.p`
  margin-bottom: 0;

  &:not(:first-child) {
    margin-top: 12px;
  }
`

const TextLink = styled.a`
  text-decoration: none;
  color: inherit;
`

const IconLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 2rem;

  &:not(:first-child) {
    margin-left: 24px;
  }
`

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Avatar = styled(Img)`
  border-radius: 50%;
  padding: 0;
  margin: 0;
  height: 125px;
  width: 125px;
`

export default function ContactInfo() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.jpeg" }) {
        childImageSharp {
          fixed(height: 125, width: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <ContactInfoContainer>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={12} lg={4}>
          <AvatarContainer>
            <Avatar fixed={data.file.childImageSharp.fixed} />
          </AvatarContainer>
        </Grid>

        <Grid item xs={12} sm={6} md={12} lg={8}>
          <ContactInfoItem>
            <ContactInfoItemTitle>Email</ContactInfoItemTitle>

            <ContactInfoItemDescription>
              <TextLink href="mailto:richard.szegh@gmail.com">
                richard.szegh@gmail.com
              </TextLink>
            </ContactInfoItemDescription>
          </ContactInfoItem>

          <ContactInfoItem>
            <ContactInfoItemTitle>Phone</ContactInfoItemTitle>

            <ContactInfoItemDescription>
              <TextLink href="tel:+36306700196">+36 30 670 0196</TextLink>
            </ContactInfoItemDescription>
          </ContactInfoItem>
        </Grid>

        <Grid item xs={12}>
          <BlockTitle>{'Social media & others'}</BlockTitle>

          <SocialMediaIcons>
            <IconLink
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/rich%C3%A1rd-szegh-50b164155/"
            >
              <LinkedInIcon fontSize="inherit" />
            </IconLink>

            <IconLink
              target="_blank"
              rel="noopener"
              href="https://github.com/richardszegh"
            >
              <GitHubIcon fontSize="inherit" />
            </IconLink>
          </SocialMediaIcons>
        </Grid>

        <Grid item xs={12}>
          <BlockTitle>About me</BlockTitle>

          <AboutMe>
            <Paragraph>
              My name is Richárd Szegh, I am a Fullstack Developer from Europe.
            </Paragraph>

            <Paragraph>
              I studied Software Information Technology at University of
              Pannonia in Hungary and have been creating professional products
              since 2018.
            </Paragraph>

            <Paragraph>
              I love traveling, cultures and street workout, but my main passion
              has always been technology, I have been deeply interested in the
              topic since a very young age.
            </Paragraph>

            <Paragraph>
              I believe that technology could be (and already is) the solution
              to many of humanity's problems and I feel my personal mission to
              help advance humanity and to provide production ready solutions to
              these problems.
            </Paragraph>
          </AboutMe>
        </Grid>
      </Grid>
    </ContactInfoContainer>
  )
}
