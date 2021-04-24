import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import {IconContext} from 'react-icons'

import {PRIMARY_COLOR} from '../../../style.config'

import {Grid} from '@material-ui/core'
import RightIcon from '@material-ui/icons/ChevronRight'

import Button from '../../UI/Button'
import LinkButton from '../../UI/LinkButton'
import ImageLightbox from '../../UI/ImageLightbox'

const ProjectContainer = styled.div`
  &:not(:first-child) {
    margin-top: 72px;
  }
`

const ProjectPreviewContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ProjectPreview = styled.div`
  border: 2px solid ${PRIMARY_COLOR};
  position: relative;
`

const ProjectPreviewOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  background-color: ${PRIMARY_COLOR};
  opacity: 0;
  transition: 0.4s;

  &:hover {
    opacity: 0.25;
  }
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

export default function ProjectListingItem({item}) {
  const [isImageLightboxOpen, setIsImageLightboxOpen] = React.useState(false)
  const handleImageLightboxOpen = () => setIsImageLightboxOpen(true)
  const handleImageLightboxClose = () => setIsImageLightboxOpen(false)

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

      fessh: allFile(filter: {relativeDirectory: {eq: "fessh"}}) {
        nodes {
          childImageSharp {
            original {
              src
            }
          }
        }
      }

      foodsdrive_admin: allFile(
        filter: {relativeDirectory: {eq: "foodsdrive_admin"}}
      ) {
        nodes {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
  `)

  const previewNode = React.useMemo(() => {
    if (data && data.allFile && Array.isArray(data.allFile.nodes)) {
      return data.allFile.nodes.find(node => {
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
    } else {
      return null
    }
  }, [data, item])

  const previewImg = React.useMemo(() => {
    if (
      previewNode &&
      previewNode.childImageSharp &&
      previewNode.childImageSharp.fixed
    ) {
      return previewNode.childImageSharp.fixed
    } else {
      return null
    }
  }, [previewNode])

  const slideshowImages = React.useMemo(() => {
    const {slideshowFolder} = item
    if (!slideshowFolder) return

    if (
      data &&
      data[slideshowFolder] &&
      Array.isArray(data[slideshowFolder].nodes)
    ) {
      return data[slideshowFolder].nodes.map(node => {
        if (
          node.childImageSharp &&
          node.childImageSharp.original &&
          node.childImageSharp.original.src
        ) {
          return node.childImageSharp.original.src
        } else {
          return null
        }
      })
    } else {
      return []
    }
  }, [data, item])

  return (
    <ProjectContainer>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} lg={5} xl={4}>
          {previewImg && (
            <ProjectPreviewContainer>
              <ProjectPreview>
                <Img fixed={previewImg} />

                {(item.link || item.slideshow) && (
                  <ProjectPreviewOverlay
                    onClick={() => {
                      if (item.link) {
                        window.open(item.link, '_blank', 'noopener')
                      } else {
                        handleImageLightboxOpen()
                      }
                    }}
                  />
                )}
              </ProjectPreview>
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
              {item.link ? (
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
              ) : (
                item.slideshow && (
                  <Button
                    variant="secondary"
                    size="small"
                    onClick={handleImageLightboxOpen}
                  >
                    <ButtonContent>
                      {'View'}

                      <RightIcon
                        style={{
                          marginLeft: '0.35rem',
                        }}
                      />
                    </ButtonContent>
                  </Button>
                )
              )}
            </ProjectInfoViewMore>
          </ProjectInfo>
        </Grid>
      </Grid>

      {Array.isArray(slideshowImages) && (
        <ImageLightbox
          open={isImageLightboxOpen}
          onClose={handleImageLightboxClose}
          images={slideshowImages}
        />
      )}
    </ProjectContainer>
  )
}

ProjectListingItem.propTypes = {
  item: PropTypes.object.isRequired,
}
