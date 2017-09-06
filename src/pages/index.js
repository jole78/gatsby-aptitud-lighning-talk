import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

//<Helmet title={data.site.siteMetadata.title} />

const IndexPage = ({ data }) => (
    <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
    </div>
);

export default IndexPage;

export const pageQuery = graphql`
    query IndexPageQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
