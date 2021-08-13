const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Augusto da Silva`,
    description: `A web developer who is always evolving out there! Writing applications with Typescript, React.js and Flutter.`,
    url: `http://augustocarlos.tk`,
    author: `@carllos_04`,
    social: {
      linkedIn: `https://www.linkedin.com/in/augusto-carlos96/`,
      github: `https://github.com/augusto-carlos/`,
      twitter: `https://twitter.com/carllos_04/`,
    },
  },
  plugins: [
    "gatsby-plugin-react-helmet", // plugin para setar o head do documento HTML
    `gatsby-transformer-remark`, // plugin para facilitar a escrita de markdown
    "gatsby-plugin-styled-components",
    `gatsby-transformer-sharp`, // plugin para otimização de imagens do site
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(__dirname, "src", "images"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Augusto da Silva`,
        short_name: `carlos`,
        start_url: `/`,
        background_color: `#529CCE`,
        theme_color: `#529CCE`,
        display: `minimal-ui`,
        icon: path.resolve(__dirname, "src", "images", "icon.png"), // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.resolve(__dirname, "src", "pages"),
        ignore: [`**/styles.(js)?(x)`],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#529CCE`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 0%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
  ],
}
