const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Richárd Szegh',
    description: 'Personal website of Richárd Szegh',
    author: '@richardszegh',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'assets', 'images'),
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -75,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify',
  ],
}
