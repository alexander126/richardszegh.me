import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/utils/SEO'

import HeroBanner from '../components/blocks/HeroBanner'
import ServiceListing from '../components/blocks/ServiceListing'
import Contact from '../components/blocks/Contact'

import services from '../content/services'
import principles from '../content/principles'

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />

      <HeroBanner />

      <ServiceListing
        id="services"
        title="Services"
        background="white"
        padding="large"
        items={services}
        continueLabel="See how"
        continueLink="/#principles"
      />

      <ServiceListing
        id="principles"
        title="My principles"
        background="primary"
        padding="large"
        items={principles}
        continueLabel="See it in action"
        continueLink="/#portfolio"
      />

      <Contact
        id="contact"
        title="Interested? Stop hesitating. Contact me today:"
        padding="large"
      />
    </Layout>
  )
}
