import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Zoom from "react-reveal/Zoom"
import Shake from "react-reveal/Shake"
import Container from "react-bootstrap/Container"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = ({ children }) => (
  <Layout>
    <SEO title="Index" />
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: `80vh`, margin: `0 auto`, padding: `0` }}
    >
      <div className="w-75 p-2 mx-auto visibility">
        <AniLink paintDrip to="/home/" hex="#8abdde" duration={0.5}>
          <Zoom duration={2500}>
            <h1 className="text-center">
              Visibility has no value without{" "}
              <Shake delay={2600}>context</Shake>
            </h1>
          </Zoom>
        </AniLink>
      </div>
    </Container>
  </Layout>
)

export default IndexPage
