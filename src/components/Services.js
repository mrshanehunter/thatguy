import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from "gatsby-plugin-image"
import Container from "react-bootstrap/Container"
import styled from "styled-components"
import {Animated} from "react-animated-css"

const StyledServiceContainer = styled.div`
    width: 40rem;
    height: 36rem;
    background: var(--base);
    margin: 0 2rem;
  
`;

const StyledOverlay = styled.div`
    width: 40rem;
    height: 36rem;
    background: var(--base);
    color: var(--highlight);
    position: relative;
    top: 0;
    left: 0;
    margin: 0 auto;
    .gatsby-image-wrapper {
       
        position: relative;
        top: 10%;
    }
      
`;

const StyledContent = styled.div`
  width: 40rem;
  height: 36rem;
  background: var(--highlight);
  color: var(--base);
  border-radius: 1rem;
  position: relative;
  top: 5px;
  left: 10px;
  margin: 0 auto;
  h3 {
    font-family: "montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1.6rem;
    color: var(--base);
    position: relative;
    top: 5px;
    left: 10px;
    font-size: 2rem;
  }
  p {
    color: var(--base);
    font-family: "montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
  }
  .definition {
    position: relative;
    top: 5px;
    left: 10px;
    width: 380px;
  }
  .benefit {
    position: relative;
    top: 5px;
    left: 10px;
    width: 380px;
  }
  .why {
    position: relative;
    top: 5px;
    left: 5px;
    width: 380px;
  }

  .makeIt {
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      cursor: pointer;
      color: var(--classic);
      font-family: "montserrat", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 1.6rem;
      
    }
  }
`


function ServiceStream({ stream }) {
    const [visible, setVisible] = useState(true);
   

    function onMouseHoverEnter() {
       setVisible(false);
        
    }

    function onMouseHoverLeave() {
        setVisible(true);
        
    }

    return (
      <Container className="w-100 mt-3 d-flex justify-content-center align-items-center">
        <StyledServiceContainer
          onMouseEnter={onMouseHoverEnter}
          onMouseLeave={onMouseHoverLeave}
        >
          {visible && (
            <StyledOverlay>
              <GatsbyImage
                image={stream.image.asset.gatsbyImageData}
                alt={stream.name}
              />
            </StyledOverlay>
          )}
          {!visible && (
            <StyledContent>
              {/* <h3>{stream.name}</h3> */}
              <p className="definition">{stream.definition}</p>
              <p className="benefit">{stream.benefit}</p>
              <p className="why">{stream.why}</p>
              <div className="makeIt">
                <hr />
                <Animated animationIn="fadeIn" animationInDelay={1000}>
                  <AniLink
                    paintDrip
                    to={`/services/${stream.slug}/`}
                    hex="#0f4c81"
                    duration={0.25}
                  >
                    Find Out More
                  </AniLink>
                </Animated>
                <hr />
              </div>
            </StyledContent>
          )}
        </StyledServiceContainer>
      </Container>
    )
                }

export default function Services({ streams }) {

    return (
        <>
        {streams.map((stream) => (
            <ServiceStream key={stream.id} stream={stream} />
        ))}
        </>
    )
}                
