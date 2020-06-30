import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
