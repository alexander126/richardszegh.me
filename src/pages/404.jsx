import React from 'react'
import {navigate} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/utils/SEO'

export default function NotFound() {
  React.useEffect(() => {
    navigate('/')
  }, [])

  return (
    <Layout>
      <SEO title="404: Not found" />
    </Layout>
  )
}
