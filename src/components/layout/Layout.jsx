import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header/Header'
import Footer from './Footer'

export default function Layout({children}) {
  const [scrolled, setScrolled] = React.useState(false)

  const updateScrolled = () => setScrolled(window.scrollY > 0)

  React.useEffect(() => {
    window.addEventListener('scroll', updateScrolled)

    return () => {
      window.removeEventListener('scroll', updateScrolled)
    }
  }, [])

  return (
    <>
      <Header scrolled={scrolled} />

      <main>{children}</main>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
