const path = require("path")

// Method call as it is in the Node API Docs
module.exports.onCreateNode = function ({ node, actions }) {
  const { createNodeField } = actions
  // Filter out all Nodes that are not .md
  if (node.internal.type !== "MarkdownRemark") {
    return
  }
  // Get the file name and removes ext '.md'
  const slug = path.basename(node.fileAbsolutePath, ".md")
  createNodeField({
    node,
    name: "slug",
    value: slug,
  })
}

// Method call as it is in the Node API Docs
module.exports.createPages = async function ({ graphql, actions }) {
  const { createPage } = actions
  // 1. Get path to template page
  const blogTemplate = path.resolve("./src/templates/blog.js")
  // 2. Get Markdown data
  const response = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // 3. Create new pages
  response.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
