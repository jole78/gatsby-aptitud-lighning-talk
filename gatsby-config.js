module.exports = {
    siteMetadata: {
        title: "Hello Aptitud"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: `${__dirname}/src/posts`
            }
        }
    ]
};
