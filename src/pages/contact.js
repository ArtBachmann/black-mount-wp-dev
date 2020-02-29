import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import StyledHero from "../components/StyledHero"
// import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"

const contact = ({ data }) => {
  return (
    <Layout>
      Hello from contact
      {/* <StyledHero img={data.defaultBcg.childImageSharp.fluid} /> */}
      <Contact />
    </Layout>
  )
}

export default contact

// export const query = graphql`
//   query {
//     defaultBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
//       childImageSharp {
//         fluid(quality: 90, maxWidth: 4160) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// `
