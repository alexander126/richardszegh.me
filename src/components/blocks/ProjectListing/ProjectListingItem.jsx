import React from 'react'
import PropTypes from 'prop-types'

export default function ProjectListingItem({ item }) {
  return <div>{JSON.stringify(item)}</div>
}

ProjectListingItem.propTypes = {
  item: PropTypes.object.isRequired,
}
