import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import styled from "styled-components"
import {Animated} from "react-animated-css"

const StyledServiceContainer = styled.div`
    width: 300px;
    height: 450px;
    background: var(--base);
    margin: 0 auto;
    padding: 0;
    

    @media (min-width: 768px) {
        width: 600px;
        height: 450px;
    }

`;

const StyledOverlay = styled.div`
    width: 300px;
    height: 450px;
    background: var(--base);
    color: var(--highlight);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0;
    left: 0;
    margin: 0 auto;
    padding: 0;
    .gatsby-image-wrapper {
        width: 300px;
        height: 300px;
        position: relative;
        top: 5%;
        left: 0;
    }
    @media (min-width: 768px) {
        width: 450px;
        height: 350px;
    }
   `;

const StyledContent = styled.div`
    width: 300px;
    height: 450px;
    background: var(--highlight);
    color: var(--base);
    border-radius: 1rem;
    position: relative;
    top: 0px;
    left: 0px;
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
    }
    p {
        color: var(--base);
        font-family: "montserrat", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
    }
    .description {
            position: relative;
            top: 10px;
            left: 10px;
            width: 290px
        }
        .one {
            position: relative;
            top: 10px;
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
            top: 5px;
            left: 10px;
        } 
        .five {
            position: relative;
            top: 5px;
            left: 10px;
                   } 
        .six {
            position: relative;
            top: 5px;
            left: 10px;
        } 
    
    a {
        cursor: pointer;
        color: var(--classic);
        font-family: "montserrat", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        position: relative;
        top: 20px;
        left: 85px;
    }
    @media (min-width: 768px) {
        width: 450px;
        height: 350px;
        h3 {
            position: relative;
            top: 10px;
            left: 10px;
        }
        .description {
            position: relative;
            top: 10px;
            left: 10px;
            width: 420px
        }
        .animated a {
            position: relative;
            top: -20px;
            left: 35%;
        }
        .one {
            position: relative;
            top: 10px;
            left: 10px;
        } 
        .two {
            position: relative;
            top: 10px;
            left: 10px;
        } 
        .three {
            position: relative;
            top: 10px;
            left: 10px;
        } 
        .four {
            position: relative;
            top: -90px;
            left: 250px;
        } 
        .five {
            position: relative;
            top: -90px;
            left: 250px;
        } 
        .six {
            position: relative;
            top: -90px;
            left: 250px;
        } 
    }

    
`;


function WebsiteDivisions({ web }) {
    const [visible, setVisible] = useState(true);
   

    function onMouseHoverEnter() {
       setVisible(false);
        
    }

    function onMouseHoverLeave() {
        setVisible(true);
        
    }

    return (
        <>
            <StyledServiceContainer
            onMouseEnter={onMouseHoverEnter}
            onMouseLeave={onMouseHoverLeave}
            
                
                
                >
                 {visible && 
                 
                    <StyledOverlay>
                       <Img fluid={web.image.asset.fluid} alt={web.name} />
                        </StyledOverlay> 
                
                 
                 }  
                 {!visible &&
                  
                      <StyledContent>
                          <h3>{web.name}</h3>
                          <p className="description">{web.description}</p>
                          <p className="one">{web.inclusion1}</p>
                          <p className="two">{web.inclusion2}</p>
                          <p className="three">{web.inclusion3}</p>
                          <p className="four">{web.inclusion4}</p>
                          <p className="five">{web.inclusion5}</p>
                          <p className="six">{web.inclusion6}</p>
                         
                          <Animated>
                        
                          <AniLink paintDrip to="/contact/" hex="#223275" duration={0.5}>
          Make It Happen
        </AniLink>
                          </Animated>
                      </StyledContent>
                  
                 } 

                </StyledServiceContainer>

        </>
    )
                }

export default function Webs({ webs }) {

    return (
        <>
        {webs.map((web) => (
            <WebsiteDivisions key={web.id} web={web} />
        ))}
        </>
    )
}                
