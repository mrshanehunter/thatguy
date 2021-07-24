require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `That Guy From Marketing`,
    description: `Brand & Marketing Consultant in Melbourne focusing on SMEs & Challenger Brands.`,
    author: `That Guy From Marketing`,
    siteUrl: `https://thatguyfrommarketing.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `that-guy-from-marketing`,
        short_name: `tgfm`,
        start_url: `/`,
        background_color: `#080424`,
        theme_color: `#080424`,
        display: `minimal-ui`,
        icon: `src/images/LGMK.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID
        },
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: 'weuctgl1',
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
        watchMode: false,
      },
    },
    {
      resolve: `gatsby-plugin-sanity-image`,
      options: {
        projectId: `weuctgl1`,
        dataset: `production`,
        token: process.env.SANITY_TOKEN,
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
