import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <div>
            <Link to="/posts">&laquo;</Link>
            <Helmet title={post.frontmatter.title} />
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    );
};

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
