import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PRIMARY_COLOR, getSectionPadding } from '../../../style.config'

import Container from '../../layout/Container'
import Button from '../../UI/Button'

import ProjectListingItem from './ProjectListingItem'

const ProjectListingSection = styled.section`
  background-color: ${props =>
    props.background === 'primary' ? PRIMARY_COLOR : '#fff'};
  color: ${props => (props.background === 'primary' ? '#fff' : PRIMARY_COLOR)};
  padding-top: ${props => getSectionPadding(props.padding)};
  padding-bottom: ${props => getSectionPadding(props.padding)};
  overflow: hidden;
`

const ProjectListingTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  text-align: center;
`

const ProjectsContainer = styled.div``

const ContinueContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 72px;
`

export default function ProjectListing({
  id,
  title,
  background,
  padding,
  items,
  continueLabel,
  continueLink,
}) {
  return (
    <ProjectListingSection id={id} background={background} padding={padding}>
      <Container>
        {title && <ProjectListingTitle>{title}</ProjectListingTitle>}

        <ProjectsContainer>
          {Array.isArray(items) &&
            items.map((item, index) => (
              <ProjectListingItem key={index} item={item} />
            ))}
        </ProjectsContainer>

        {continueLabel && continueLink && (
          <ContinueContainer>
            <Button
              variant={background === 'primary' ? 'primary' : 'secondary'}
              link
              to={continueLink}
              size="large"
            >
              {continueLabel}
            </Button>
          </ContinueContainer>
        )}
      </Container>
    </ProjectListingSection>
  )
}

ProjectListing.defaultProps = {
  background: 'white',
  padding: 'default',
}

ProjectListing.propTypes = {
  title: PropTypes.string,
  background: PropTypes.oneOf(['primary', 'white']),
  padding: PropTypes.oneOf(['large', 'default', 'small']),
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  continueLabel: PropTypes.string,
  continueLink: PropTypes.string,
}
