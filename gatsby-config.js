/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Kunga`,
    siteUrl: `https://kunga.gatsbyjs.io/`
  },
  plugins: [ // "gatsby-plugin-google-gtag", 
              "gatsby-plugin-image", 
              "gatsby-plugin-sitemap", 
              "gatsby-plugin-mdx", 
              "gatsby-plugin-sharp", 
              "gatsby-transformer-sharp", 
            {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};