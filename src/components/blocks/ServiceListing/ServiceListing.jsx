import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PRIMARY_COLOR, getSectionPadding } from '../../../style.config'

import { Grid } from '@material-ui/core'

import Container from '../../layout/Container'
import Button from '../../UI/Button'

import ServiceListingItem from './ServiceListingItem'

const ServiceListingSection = styled.section`
  background-color: ${props =>
    props.background === 'primary' ? PRIMARY_COLOR : '#fff'};
  color: ${props => (props.background === 'primary' ? '#fff' : PRIMARY_COLOR)};
  padding-top: ${props => getSectionPadding(props.padding)};
  padding-bottom: ${props => getSectionPadding(props.padding)};
  overflow: hidden;
`

const ServiceListingTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  text-align: center;
`

const ContinueContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

export default function ServiceListing({
  id,
  title,
  background,
  padding,
  items,
  continueLabel,
  continueLink,
}) {
  return (
    <ServiceListingSection id={id} background={background} padding={padding}>
      <Container>
        {title && <ServiceListingTitle>{title}</ServiceListingTitle>}

        <Grid container spacing={6} justify="center">
          {Array.isArray(items) &&
            items.map((item, index) => (
              <ServiceListingItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
        </Grid>

        {continueLabel && continueLink && (
          <ContinueContainer>
            <Button
              variant={background === 'primary' ? 'primary' : 'secondary'}
              link
              to={continueLink}
            >
              {continueLabel}
            </Button>
          </ContinueContainer>
        )}
      </Container>
    </ServiceListingSection>
  )
}

ServiceListing.defaultProps = {
  background: 'white',
  padding: 'default',
}

ServiceListing.propTypes = {
  title: PropTypes.string,
  background: PropTypes.oneOf(['primary', 'white']),
  padding: PropTypes.oneOf(['large', 'default', 'small']),
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  continueLabel: PropTypes.string,
  continueLink: PropTypes.string,
}
