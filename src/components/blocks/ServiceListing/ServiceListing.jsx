import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PRIMARY_COLOR, getSectionPadding } from '../../../style.config'

import ServiceListingItem from './ServiceListingItem'

const ServiceListingSection = styled.section`
  background-color: ${props =>
    props.background === 'primary' ? PRIMARY_COLOR : '#fff'};
  color: ${props => (props.background === 'primary' ? '#fff' : PRIMARY_COLOR)};
  padding-top: ${props => getSectionPadding(props.padding)};
  padding-bottom: ${props => getSectionPadding(props.padding)};
`

export default function ServiceListing({ background, padding, items }) {
  return (
    <ServiceListingSection background={background} padding={padding}>
      {Array.isArray(items) &&
        items.map((item, index) => (
          <ServiceListingItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
    </ServiceListingSection>
  )
}

ServiceListing.defaultProps = {
  background: 'white',
  padding: 'default',
}

ServiceListing.propTypes = {
  background: PropTypes.oneOf(['primary', 'white']),
  padding: PropTypes.oneOf(['large', 'default', 'small']),
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}
