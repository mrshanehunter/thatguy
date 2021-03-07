import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import Container from "react-bootstrap/Container"
import styled from "styled-components"
import {Animated} from "react-animated-css"

const StyledServiceContainer = styled.div`
    width: 350px;
    height: 350px;
    background: var(--base);
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        width: 600px;
        height: 250px;
    }

`;

const StyledOverlay = styled.div`
    width: 300px;
    height: 300px;
    background: var(--base);
    color: var(--highlight);
    display: flex:
    justify-content: center;
    align-items: center;
    position: absolute:
    top: 0;
    left: 0;
    margin: 0 auto;
    .gatsby-image-wrapper {
        postion: relative;
        top: 10%;
    }
    @media (min-width: 768px) {
        width: 600px;
        height: 250px;
    }
    
`;

const StyledContent = styled.div`
    width: 295px;
    height: 295px;
    background: var(--highlight);
    color: var(--base);
    border-radius: 1rem;
    position: relative:
    top: 5px;
    left: 5px;
    margin: 0 auto;
    h3 {
        font-family: "montserrat", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 1.6rem;
        color: var(--base);
        position: relative;
        top: 5px;
        left: 5px;
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
        left: 5px;
    }
    .benefit {
        position: relative;
        top: 5px;
        left: 5px;
    }
    .why {
        position: relative;
        top: 5px;
        left: 5px;
    }
    a {
        cursor: pointer;
        color: var(--classic);
        font-family: "montserrat", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        position: relative;
        top: 100px;
        left: 35px;
    }
    @media (min-width: 768px) {
        width: 595px;
        height: 245px;
        h3 {
            position: relative;
            top: 10px;
            left: 10px;
        }
        .definition {
            position: relative;
            top: 10px;
            left: 10px;
        }
        .benefit {
            position: relative;
            top: 10px;
            left: 10px;
        }
        .why {
            position: relative;
            top: 10px;
            left: 10px;
        }
        a {
            position: relative:
            top: 20px;
            left: 190px;
        }
    }

    
`;


function ServiceStream({ stream }) {
    const [visible, setVisible] = useState(true);
   

    function onMouseHoverEnter() {
       setVisible(false);
        
    }

    function onMouseHoverLeave() {
        setVisible(true);
        
    }

    return (
        <Container className="w-75 mt-3 d-flex justify-content-center align-items-center">
            <StyledServiceContainer onMouseEnter={onMouseHoverEnter}
                onMouseLeave={onMouseHoverLeave}
                
                
                >
                 {visible && 
                 
                    <StyledOverlay>
                       <Img fluid={stream.image.asset.fluid} alt={stream.name} />
                        </StyledOverlay> 
                
                 
                 }  
                 {!visible &&
                  
                      <StyledContent>
                          <h3>{stream.name}</h3>
                          <p className="definition">{stream.definition}</p>
                          <p className="benefit">{stream.benefit}</p>
                          <p className="why">{stream.why}</p>
                          <Animated>
                          <AniLink paintDrip to={`/services/${stream.slug}/`} hex="#0f4c81" duration={0.5}>
                              Click Here For More Details
                          </AniLink>
                          </Animated>
                      </StyledContent>
                  
                 } 

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
