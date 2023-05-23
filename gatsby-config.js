/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Kunga.IO`,
    description: `Discover the best online events with Kunga. Find virtual concerts, workshops, and more. Browse our listings and book your next experience today
    
    Kunga is an online platform dedicated to listing a variety of virtual events, ranging from webinars and conferences to workshops and online classes. Our mission is to connect people with high-quality virtual events from all over the world, providing them with opportunities to learn, network, and grow from the comfort of their own homes. Our user-friendly interface allows event organizers to easily promote their events, while providing attendees with a comprehensive and intuitive search engine to find the events that best suit their interests. With Kunga, you can explore a world of online events and expand your horizons from the comfort of your own screen.

    Stay connected and entertained with Kunga's online event listings. Explore our selection of virtual experiences and connect with people from all over the world.

    Find your next online adventure with Kunga. Our platform offers a diverse range of virtual events, including live music, art exhibitions, and cooking classes.

    Looking for virtual events? Kunga has got you covered. Our comprehensive directory.

    Discover the latest online events and activities on Kunga - a leading platform for event listing and promotion. From virtual conferences and webinars to online classes and workshops, Kunga has got you covered. Sign up today and never miss out on an exciting online event again!
    `,
    twitterUsername: `@bantu_creative`,
    image: `src\images\Logo.png`,
    siteUrl: `https://kunga.gatsbyjs.io/`
  },
  plugins: [ // "gatsby-plugin-google-gtag", 
              "gatsby-plugin-image", 
              "gatsby-plugin-sitemap", 
              "gatsby-plugin-mdx", 
              "gatsby-plugin-sharp", 
              "gatsby-transformer-sharp", 
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      "name": `projects`,
      "path": `${__dirname}/src/projects/`,
    },
    __key: `projects`,
  }]
};