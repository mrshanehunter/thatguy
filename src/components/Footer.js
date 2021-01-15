/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"

const FooterStyles = styled.footer`
  text-align: center;
  color: var(--gray);
  margin-top: 1rem;
`;

const Footer = () => {
  return (
    <FooterStyles>
    <p>&Copy; That Guy From Marketing{" "}{new Date().getFullYear()}, All Rights
      Reserved.</p>
    </FooterStyles>
  )
}

export default Footer
