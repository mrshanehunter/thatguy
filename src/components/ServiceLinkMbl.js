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
`;


export default function ServiceLinkMbl(props) {
  const pgLoc = props.id
  console.log(props)

 
    return (
      <StyledServiceLink>
        <Nav>
          {pgLoc === "brand" ? <BlankItem />  :
          <Nav.Item>
            <AniLink
              paintdrip
              to="/services/branding-and-brand-development/"
              hex="#0f4c81"
              duration={0.25}
            >
             branding
            </AniLink>
          </Nav.Item>
          }
          {pgLoc === "mktg" ? <BlankItem /> :
          <Nav.Item>
            <AniLink
              paintdrip
              to="/services/marketing-strategy-planning-activation/"
              hex="#d9d9d9"
              duration={0.25}
            >
              marketing
            </AniLink>
          </Nav.Item>
}
{pgLoc === "web" ? <BlankItem /> :
          <Nav.Item>
            <AniLink
              paintdrip
              to="/services/website-design-development/"
              hex="#223275"
              duration={0.25}
            >
              website
            </AniLink>
          </Nav.Item>
}
 </Nav>
      </StyledServiceLink>
    )
}
