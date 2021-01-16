import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import SEO from "../components/SEOComp"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "BG.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = data.desktop.childImageSharp.fluid

  return (
    <Layout>
      <BackgroundImage
        Tag="section"
        fluid={imageData}
        style={{
          width: `100vw`,
          minHeight: `100vh`,
          backgroundPosition: `center center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
      >
        <SEO title="404: Not found" />
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: `85vh` }}
        >
          <Card.Body style={{ maxWidth: `400px` }}>
            <Card.Body className="text-center pageNF">
              <h1>
                404: <br />
                Page Not Found
              </h1>
              <div className="mt-5 mb-5 pageNF">
                <p>This isn&#39;t going to help build your brand.</p>
                <p>The route you&#39;ve hit doesn&#39;t exist...</p>
              </div>
              <AniLink paintDrip to="/home/" hex="#080424" duration={0.5}>
                <div className="w-75 pnfLink">Get Back On Track</div>
              </AniLink>
            </Card.Body>
          </Card.Body>
        </Container>
      </BackgroundImage>
    </Layout>
  )
}
export default NotFoundPage
