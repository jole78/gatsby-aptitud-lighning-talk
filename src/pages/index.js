import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

const IndexPage = ({ data }) => (
    <div>
        <Helmet title={data.site.siteMetadata.title} />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/posts/">Or see all the posts we have published...</Link>
    </div>
);

export const query = graphql`
    query IndexPageQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

export default IndexPage;
