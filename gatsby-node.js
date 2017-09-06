const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

// add a slug field to our markdown nodes --> createNodeField
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;

    if (node.internal.type === `MarkdownRemark`) {
        // helper function to get the file nodes relative path
        // --- it creates a slug ---
        const slug = createFilePath({ node, getNode });

        createNodeField({
            node,
            name: "slug",
            value: slug
        });
    }
};

// tell gatsby that we want to create pages from our posts --> createPage
exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    return new Promise((resolve, reject) => {
        graphql(`
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
        `).then(result => {
            result.data.allMarkdownRemark.edges.map(({ node: post }) => {
                createPage({
                    path: post.fields.slug,
                    component: path.resolve("./src/templates/blog-post.js"),
                    context: {
                        slug: post.fields.slug
                    }
                });
            });
            resolve();
        });
    });
};
