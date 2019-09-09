module.exports = {
  siteMetadata: {
    title: 'pls.vote',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-flow',
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/countries`,
        name: "countries",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-react-helmet`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#2991cc`,
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'pls.vote',
        short_name: 'pls.vote',
        start_url: '/',
        background_color: '#DDD5D0',
        theme_color: '#272932',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    }
  ],
}
