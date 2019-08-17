module.exports.onCreateNode = function ({ node, actions }) {
  const { createNodeField } = actions
  console.log(JSON.stringify(node, undefined, 4))
}
