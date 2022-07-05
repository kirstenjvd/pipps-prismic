const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryData = await graphql(`
    {
      allPrismicHomepage {
        nodes {
          id
          lang
          url
        }
      }
    }
  `)

  queryData.data.allPrismicHomepage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/homepage.js'),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })
}
