import React from 'react'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons'

import { PRIMARY_COLOR } from '../../../style.config'

export default function ServiceListingItem({ icon, title, description }) {
  return (
    <div>
      <IconContext.Provider
        value={{
          color: PRIMARY_COLOR,
          size: '4rem',
        }}
      >
        {icon}
      </IconContext.Provider>

      <h4
        style={{
          fontSize: '2rem',
        }}
      >
        {title}
      </h4>

      <p>{description}</p>
    </div>
  )
}

ServiceListingItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string).isRequired,
  ]),
}
