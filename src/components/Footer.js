import React from "react"
import styled from "styled-components"

const FooterStyles = styled.footer`
  text-align: center;
  color: var(--gray);
  margin-top: 3rem;
  padding-bottom: 1rem;
`

const Footer = () => {
  return (
    <FooterStyles>
      <p>
        &copy; That Guy From Marketing&reg; {new Date().getFullYear()}, All
        Rights Reserved.
      </p>
    </FooterStyles>
  )
}

export default Footer
