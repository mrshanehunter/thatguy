import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Nav from "react-bootstrap/Nav"
import styled from "styled-components"

const StyledServiceLink = styled.div`
  display: flex;
  margin-top: -1rem;
  .nav {
    padding-top: 1rem;
  }
`

const BlankItem = styled.div`
  display: none;
`

export default function ServiceLinkMbl(props) {
  const pgLoc = props.id
  
  return (
    <StyledServiceLink>
      <Nav>
        {pgLoc === "brand" ?  <BlankItem /> : 
          <Nav.Item>
            <AniLink
              paintDrip
              to="/services/branding-and-brand-development/"
              hex="#0f4c81"
              duration={0.5}
            >
              branding, brand development
            </AniLink>
          </Nav.Item>
        }
        {pgLoc === "mktg" ? (
          <BlankItem />
        ) : (
          <Nav.Item>
            <AniLink
              paintDrip
              to="/services/marketing-strategy-planning-activation/"
              hex="#d9d9d9"
              duration={0.5}
            >
              marketing strategy, planning, activation
            </AniLink>
          </Nav.Item>
        )}
        {pgLoc === "web" ? (
          <BlankItem />
        ) : (
          <Nav.Item>
            <AniLink
              paintDrip
              to="/services/website-design-development/"
              hex="#223275"
              duration={0.5}
            >
              website design, development
            </AniLink>
          </Nav.Item>
        )}
      </Nav>
    </StyledServiceLink>
  )
}
