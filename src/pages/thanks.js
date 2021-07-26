import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Layout from "../components/Layout"
import SEOComp from "../components/SEOComp"

const ThanksPage = () => {
  const { thanksImage }= useStaticQuery(graphql`
    query {
      thanksImage: file(relativePath: { eq: "BG.jpg" }) {
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

  const pluginImage = getImage(thanksImage)
 return (
   <BgImage image={pluginImage}>
     <Layout>
       <SEOComp title="Thanks" />

       <Container
         className="d-flex justify-content-center align-items-center"
         style={{ minHeight: `75vh` }}
       >
         <Card className="w-50 text-center thankyoucard">
           <Card.Header className="w-100 text-center thankyouheader">
             <h1>Thanks!</h1>
           </Card.Header>
           <Card.Body className="thankyou">
             <h3>Your message has been sent.</h3>
             <br />
             <h3>That Guy From Marketing&reg;<br /> will be in contact.</h3>
             <br />
             <AniLink paintDrip to="/home/" hex="#223275" duration={0.25}>
               Click here to return to the site
             </AniLink>
           </Card.Body>
         </Card>
       </Container>
     </Layout>
   </BgImage>
 )
  }
export default ThanksPage
