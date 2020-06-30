module.exports = {
  siteMetadata: {
    title: 'Richárd Szegh',
    description: 'Personal website of Richárd Szegh',
    author: '@richardszegh',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
