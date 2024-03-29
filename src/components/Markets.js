import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {Animated} from "react-animated-css"

const StyledServiceContainer = styled.div`
    width: 40rem;
    height: 40rem;
    background: var(--base);
    margin: 0 auto;
    padding: 0;
    

   

`;

const StyledOverlay = styled.div`
    width: 40rem;
    height: 40rem;
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
        width: 50%;
        height: 50%;
        position: relative;
        top: 0;
        left: 0;
    }
    
   `;

const StyledContent = styled.div`
    width: 40rem;
    height: 38rem;
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
        top: 1rem;
        left: 1rem;
    }
    p {
        color: var(--base);
        font-family: "montserrat", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem
    }
    .description {
            position: relative;
            top: 1rem;
            left: 1rem;
            width: 37.5rem
        }
        .one {
            position: relative;
            top: 1rem;
            left: 1rem;
        } 
        .two {
            position: relative;
            top: 0.5rem;
            left: 1rem;
        } 
        .three {
            position: relative;
            top: 0.5rem;
            left: 1rem;
        } 
        .four {
            position: relative;
            top: -9.25rem;
            left: 50%;
        } 
        .five {
            position: relative;
            top: -9.5rem;
            left: 50%;
        } 
        .six {
            position: relative;
            top: -9.5rem;
            left: 50%;
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
    
`;


function MarketingDivisions({ market }) {
    const [visible, setVisible] = useState(true);
   

    function onMouseHoverEnter() {
       setVisible(false);
        
    }

    function onMouseHoverLeave() {
        setVisible(true);
        
    }

    return (
      <StyledServiceContainer
        onMouseEnter={onMouseHoverEnter}
        onMouseLeave={onMouseHoverLeave}
      >
        {visible && (
          <StyledOverlay>
            <GatsbyImage image={market.image.asset.gatsbyImageData} alt={market.name} />
          </StyledOverlay>
        )}
        {!visible && (
          <StyledContent>
            <h3>{market.name}</h3>
            <p className="description">{market.description}</p>
            <p className="one">{market.inclusion1}</p>
            <p className="two">{market.inclusion2}</p>
            <p className="three">{market.inclusion3}</p>
            <p className="four">{market.inclusion4}</p>
            <p className="five">{market.inclusion5}</p>
            <p className="six">{market.inclusion6}</p>

            <div className="makeIt">
              <Animated>
                <AniLink paintDrip to="/contact/" hex="#0f4c81" duration={0.5}>
                  Make It Happen
                </AniLink>
              </Animated>
            </div>
          </StyledContent>
        )}
      </StyledServiceContainer>
    )
                }

export default function Markets({ markets }) {

    return (
        <>
        {markets.map((market) => (
            <MarketingDivisions key={market.id} market={market} />
        ))}
        </>
    )
}                
