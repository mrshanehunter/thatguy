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
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
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
        width: 200px;
        height: 200px;
        postion: relative;
        top: 10%;
        left: 15%;
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
        position: relative;
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
        top: 10px;
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
        .description {
            position: relative;
            top: 10px;
            left: 10px;
        }
        .animated a {
            position: relative;
            top: -55px;
            left: 35%;
        }
        .one {
            position: relative;
            top: 5px;
            left: 10px;
        } 
        .two {
            position: relative;
            top: 5px;
            left: 10px;
        } 
        .three {
            position: relative;
            top: 5px;
            left: 10px;
        } 
        .four {
            position: relative;
            top:  -95px;
            left: 300px;
        } 
        .five {
            position: relative;
            top: -95px;
            left: 300px;
        } 
        .six {
            position: relative;
            top: -95px;
            left: 300px;
        } 
    }

    
`;


function BrandingDivisions({ brand }) {
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
                       <Img fluid={brand.image.asset.fluid} alt={brand.name} />
                        </StyledOverlay> 
                
                 
                 }  
                 {!visible &&
                  
                      <StyledContent>
                          <h3>{brand.name}</h3>
                          <p className="description">{brand.description}</p>
                          <p className="one">{brand.inclusion1}</p>
                          <p className="two">{brand.inclusion2}</p>
                          <p className="three">{brand.inclusion3}</p>
                          <p className="Four">{brand.inclusion4}</p>
                          <p className="five">{brand.inclusion5}</p>
                          <p className="six">{brand.inclusion6}</p>
                         
                          <Animated>
                          
                          <AniLink paintDrip to="/services/" hex="#8abdde" duration={0.5}>
          Return to Services
        </AniLink>
                          </Animated>
                      </StyledContent>
                  
                 } 

                </StyledServiceContainer>

        </Container>
    )
                }

export default function Brands({ brands }) {

    return (
        <>
        {brands.map((brand) => (
            <BrandingDivisions key={brand.id} brand={brand} />
        ))}
        </>
    )
}                
