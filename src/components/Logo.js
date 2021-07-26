import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const LogoStyled = styled.div` 
  display: flex;
  justify-content: center;
  background: transparent;
  width: 32.5rem;
  margin: 0 auto;
  `

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 325, layout: CONSTRAINED) 
          }
        }
      }
    
  `)

  if (!data?.placeholderImage?.childImageSharp?.gatsbyImageData) {
    return <div>Picture not found</div>
  }

  return (
    <LogoStyled>
      <GatsbyImage
        image={data.placeholderImage.childImageSharp.gatsbyImageData}
        alt={"That Guy From Marketing Logo"}
      />
    </LogoStyled>
  )
}

export default Logo;
