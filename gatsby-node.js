exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
      ],
    },
  })
}
const path = require('path')
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const CountriesView = path.resolve(`src/layouts/countries.js`)
  try {
    const result = await graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: CountriesView,
      })
    })
  } catch (error) {
    console.error('Error fetching data with graphql', error)
  }
}
