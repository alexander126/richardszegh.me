import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { IconContext } from 'react-icons'

import { PRIMARY_COLOR } from '../../../style.config'

import { Grid } from '@material-ui/core'
import RightIcon from '@material-ui/icons/ChevronRight'

import LinkButton from '../../UI/LinkButton'

const ProjectContainer = styled.div`
  &:not(:first-child) {
    margin-top: 72px;
  }
`

const ProjectPreviewContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ProjectPreview = styled(Img)`
  border: 2px solid ${PRIMARY_COLOR};
`

const ProjectInfo = styled.div`
  overflow: hidden;
`

const ProjectInfoHeading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  justify-content: center;

  @media (min-width: 960px) {
    justify-content: flex-start;
  }
`

const ProjectInfoTitle = styled.h2`
  margin-bottom: 0;
`

const ProjectInfoIcons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  opacity: 0.5;
  color: grey;
`

const ProjectInfoIcon = styled.div`
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-left: 0.5rem;
  }
`

const ProjectInfoDescription = styled.p``

const ProjectInfoDescriptionList = styled.ul``

const ProjectInfoDescriptionListItem = styled.li``

const ProjectInfoViewMore = styled.div`
  display: flex;
  justify-content: flex-end;
`

const ButtonContent = styled.span`
  display: flex;
  align-items: center;
  line-height: 1rem;
`

export default function ProjectListingItem({ item }) {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          childImageSharp {
            fixed(height: 200, width: 400) {
              ...GatsbyImageSharpFixed
              originalName
            }
          }
        }
      }
    }
  `)

  const previewNode =
    data && data.allFile && Array.isArray(data.allFile.nodes)
      ? data.allFile.nodes.find(node => {
          if (
            node.childImageSharp &&
            node.childImageSharp.fixed &&
            node.childImageSharp.fixed.originalName === item.preview
          ) {
            return true
          } else {
            return false
          }
        })
      : null

  const previewImg =
    previewNode &&
    previewNode.childImageSharp &&
    previewNode.childImageSharp.fixed
      ? previewNode.childImageSharp.fixed
      : null

  return (
    <ProjectContainer>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} lg={5} xl={4}>
          {previewImg && (
            <ProjectPreviewContainer>
              <ProjectPreview fixed={previewImg} />
            </ProjectPreviewContainer>
          )}
        </Grid>

        <Grid item xs={12} md={6} lg={7} xl={8}>
          <ProjectInfo>
            <ProjectInfoHeading>
              <ProjectInfoTitle>{item.title}</ProjectInfoTitle>

              <IconContext.Provider
                value={{
                  color: 'inherit',
                  size: '2rem',
                }}
              >
                <ProjectInfoIcons>
                  {item.types.map((typeIcon, index) => (
                    <ProjectInfoIcon key={index}>{typeIcon}</ProjectInfoIcon>
                  ))}
                </ProjectInfoIcons>
              </IconContext.Provider>
            </ProjectInfoHeading>

            {Array.isArray(item.description) ? (
              <ProjectInfoDescriptionList>
                {item.description.map((item, index) => (
                  <ProjectInfoDescriptionListItem key={index}>
                    {item}
                  </ProjectInfoDescriptionListItem>
                ))}
              </ProjectInfoDescriptionList>
            ) : (
              <ProjectInfoDescription>
                {item.description}
              </ProjectInfoDescription>
            )}

            <ProjectInfoViewMore>
              {item.link && (
                <LinkButton
                  variant="secondary"
                  size="small"
                  href={item.link}
                  target="_blank"
                  rel="noopener"
                >
                  <ButtonContent>
                    {'View'}

                    <RightIcon
                      style={{
                        marginLeft: '0.35rem',
                      }}
                    />
                  </ButtonContent>
                </LinkButton>
              )}
            </ProjectInfoViewMore>
          </ProjectInfo>
        </Grid>
      </Grid>
    </ProjectContainer>
  )
}

ProjectListingItem.propTypes = {
  item: PropTypes.object.isRequired,
}
