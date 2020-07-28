// import { resolve } from "path"

// export function createPages({ graphql, actions }) {
//   const { createPage } = actions
//   const post = resolve("src/templates/SinglePost.js")

//   return graphql(
//     `
//       {
//         allMarkdownRemark {
//           edges {
//             node {
//               frontmatter {
//                 path
//               }
//             }
//           }
//         }
//       }
//     `
//   ).then(result => {
//     const posts = result.data.allMarkdownRemark.edges
//     posts.forEach(({ node }) => {
//       const { frontmatter } = node
//       const { path } = frontmatter

//       createPage({
//         path: path,
//         component: post,
//         context: {
//           slug: path, // I used slug because path is a reserved word, and could cause conflicts
//         },
//       })
//     })
//   })
// }
