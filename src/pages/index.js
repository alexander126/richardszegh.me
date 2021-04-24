import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/utils/Seo';

import HeroBanner from '../components/blocks/HeroBanner';
import ServiceListing from '../components/blocks/ServiceListing';
import ProjectListing from '../components/blocks/ProjectListing';
import Contact from '../components/blocks/Contact';

import services from '../content/services';
import principles from '../content/principles';
import projects from '../content/projects';

function Home() {
  return (
    <Layout>
      <Seo title="Home" />

      <HeroBanner />

      <ServiceListing
        id="services"
        title="Services that I offer"
        background="white"
        padding="large"
        items={services}
        continueLabel="I'm interested!"
        continueLink="/#principles"
      />

      <ServiceListing
        id="principles"
        title="My core values for building apps"
        background="primary"
        padding="large"
        items={principles}
        continueLabel="See them in action"
        continueLink="/#portfolio"
      />

      <ProjectListing
        id="portfolio"
        title="Some of my recent projects"
        background="white"
        padding="large"
        items={projects}
        continueLabel="I want you to work on my project!"
        continueLink="/#contact"
      />

      <Contact
        id="contact"
        title="Get your project built today. Contact me now:"
        background="primary"
        padding="large"
      />
    </Layout>
  );
}

export default Home;
