import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import SEOComp from "../components/SEOComp"

const NotFoundPage = () => {
  const { fourohfourimage }= useStaticQuery(graphql`
    query {
      fourohfourimage: file(relativePath: { eq: "fourohfour.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1920,
            layout: CONSTRAINED,
            quality: 75,
            placeholder: BLURRED,
            formats: WEBP
            ) 
        }
      }
    }
  `)

  const pluginImage = getImage(fourohfourimage)

  return (
    <BgImage image={pluginImage}>
      
      <Layout>
        <SEOComp title="404: Not found" />
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: `65vh` }}
        >
          <Card.Body style={{ maxWidth: `45rem` }}>
            <Card.Body className="text-center pageNF">
              <h2>
                404: <br />
                Page Not Found
              </h2>
              <div className="mt-3 mb-3 pageNF">
                <p>Nothing here to help build your brand.</p>
                <p>The route you&#39;ve hit doesn&#39;t exist...</p>
              </div>
              <AniLink paintDrip to="/home/" hex="#080424" duration={0.25}>
                <div className="w-100 pnfLink">Get Back On Track</div>
              </AniLink>
            </Card.Body>
          </Card.Body>
        </Container>
      </Layout>
    </BgImage>
  )
}
export default NotFoundPage
