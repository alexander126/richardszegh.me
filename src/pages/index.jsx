import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/utils/SEO'

import HeroBanner from '../components/blocks/HeroBanner'
import ServiceListing from '../components/blocks/ServiceListing'
import ProjectListing from '../components/blocks/ProjectListing'
import Contact from '../components/blocks/Contact'

import services from '../content/services'
import principles from '../content/principles'
import projects from '../content/projects'

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

      <ProjectListing
        id="portfolio"
        title="Projects I've worked on:"
        background="white"
        padding="large"
        items={projects}
        continueLabel="I'm interested"
        continueLink="/#contact"
      />

      <Contact
        id="contact"
        title="Interested? Stop hesitating. Contact me today:"
        background="primary"
        padding="large"
      />
    </Layout>
  )
}
