import React from "react";
import Link from "gatsby-link";

const BlogPostsListing = ({ data }) => (
    <div>
        <h1>Blog Posts ({data.allMarkdownRemark.totalCount})</h1>
        <ul>
            {data.allMarkdownRemark.edges.map(({ node: post }) => (
                <li>
                    <Link to={post.fields.slug}>
                        <h3>
                            {post.frontmatter.title}{" "}
                            <span>— {post.frontmatter.date}</span>
                        </h3>
                        <p>{post.excerpt}</p>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default BlogPostsListing;

export const query = graphql`
    query BlogPostsListingQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "YYYY-MM-DD")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`;
