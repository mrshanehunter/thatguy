import React from "react"
import AniLink from "gatsby-plugin-transition-link/Anilink"
import styled from "styled-components"

const FooterStyles = styled.footer`
  text-align: center;
  color: var(--gray);
  margin-top: 3rem;
  padding-bottom: 1rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: 0 auto;
`

const Footer = () => {
  return (
    <FooterStyles>
      <AniLink paintDrip to="/privacy/" hex="#223275" duration={0.5}>
        privacy
      </AniLink>
      <p>
        &copy; That Guy From Marketing&reg; {new Date().getFullYear()}, All
        Rights Reserved.
      </p>
      <AniLink paintDrip to="/terms/" hex="#8abdde" duration={0.5}>
        terms
      </AniLink>
    </FooterStyles>
  )
}

export default Footer
