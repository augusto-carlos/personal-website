const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Carlos`,
    description: `An web developer who is always learning around there!`,
    author: `@augusto_4real`,
    url: `http://augustocarlos.tk`,
  },
  plugins: [
    "gatsby-plugin-react-helmet", // plugin para setar o head do documento HTML
    `gatsby-transformer-remark`, // plugin para facilitar a escrita de markdown
    "gatsby-plugin-styled-components",
    `gatsby-transformer-sharp`, // plugin para otimização de imagens do site
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(__dirname, "src", "images"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: path.resolve(__dirname, "content", "posts"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#099`,
        theme_color: `#099`,
        display: `minimal-ui`,
        icon: path.resolve(__dirname, "src", "images", "icon.png"), // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Muli",
            variants: ["300", "300i", "700", "700i"],
            subsets: ["latin-ext"],
          },
          {
            family: "Ubuntu",
            variants: ["300", "300i", "700", "700i"],
            subsets: ["latin-ext"],
          },
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.resolve(__dirname, "src", "pages"),
        ignore: [`**/styles.(js)?(x)`],
      },
    },
  ],
}
