require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://thatguyfrommarketing.com`,
    title: `That Guy From Marketing`,
    description: `Brand & Marketing Consultant in Melbourne focusing on SMEs & Challenger Brands.`,
    author: `That Guy From Marketing`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        apiVersion: "v2021-03-25",
        token: process.env.SANITY_TOKEN,
        useCdn: false,
        watchMode: false,
      },
    },

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
            process.env.GA_TRACKING,
            process.env.GA_GTAG,         
        ],
        gtagConfig: {
          optimize_id: process.env.GA_GTAG,
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          exclude: ["/preview/**", "/do-not-track/me/too"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
