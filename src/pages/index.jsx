import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/utils/SEO'

import HeroBanner from '../components/blocks/HeroBanner'
import ServiceListing from '../components/blocks/ServiceListing'

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />

      <HeroBanner />

      <ServiceListing background="white" padding="large" />
    </Layout>
  )
}
