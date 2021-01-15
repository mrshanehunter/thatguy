/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import Footer from "./Footer"

import Header from "./Header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const ContentContainer = styled.div`
    width: 90%;
    margin-left: 4rem;
  `;

  return (
    <>
    <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <ContentContainer
        
      >
        {children}
    
      </ContentContainer>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
