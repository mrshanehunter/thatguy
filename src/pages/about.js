import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Container from "react-bootstrap/Container"
import Layout from "../components/Layout"
import SEO from "../components/SEOComp"
import ControlledCarousel from "../components/Carousel"

export default function AboutPage() {
    return (
        <>
        <Layout>
            <SEO title="About That Guy From Marketing" />
            <Container className="w-75 mt-3 d-flex-column justify-content-center align-items-center">
             <div>   
            <AniLink paintDrip to="/home/" hex="#080424" duration={0.5}>
              Return to the Home Page
            </AniLink>
            </div> 
                <ControlledCarousel />

                

            </Container>

        </Layout>
        </>
    )
}
