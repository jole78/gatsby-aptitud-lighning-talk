module.exports = {
    siteMetadata: {
        title: "Hello you all",
        foo: "bar"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: `${__dirname}/src/posts`
            }
        },
        "gatsby-transformer-remark"
    ]
};
