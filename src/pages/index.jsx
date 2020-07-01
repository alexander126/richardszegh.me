import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/utils/SEO'

import HeroBanner from '../components/blocks/HeroBanner'

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />

      <HeroBanner />
    </Layout>
  )
}
