const path = require('path')
const dotenv = require('dotenv').config()

const prismicConfig = require('./prismic-configuration')

module.exports = {
  siteMetadata: {
    title: `PIPPS`,
    description: `Pacific Institute on Pathogens Pandemics and Society`,
    author: `@heynovaio`,
    siteUrl: `https://heynova.io/`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: prismicConfig.prismicRepo,  
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: require('./src/utils/linkResolver').linkResolver,
      },
    },
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName: prismicConfig.prismicRepo,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: path.resolve(__dirname, 'src', 'images', 'flavicon.svg'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.resolve(__dirname, 'src', 'images'),
      },
    },
  ],
}
