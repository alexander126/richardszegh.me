import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PRIMARY_COLOR, getSectionPadding } from '../../../style.config'

const ServiceListingSection = styled.section`
  background-color: ${props =>
    props.background === 'primary' ? PRIMARY_COLOR : '#fff'};
  color: ${props => (props.background === 'primary' ? '#fff' : PRIMARY_COLOR)};
  padding-top: ${props => getSectionPadding(props.padding)};
  padding-bottom: ${props => getSectionPadding(props.padding)};
`

export default function ServiceListing({ background, padding }) {
  return (
    <ServiceListingSection background={background} padding={padding}>
      Service Listing
    </ServiceListingSection>
  )
}

ServiceListing.propTypes = {
  background: PropTypes.oneOf(['primary', 'white']),
  padding: PropTypes.oneOf(['large', 'default', 'small']),
}
