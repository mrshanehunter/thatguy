import React from "react"
import{ GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const StyledSummary = styled.div` 
    width: 100%;
    display: flex;
    flex-direction: column;
    .gatsby-image-wrapper {
        width: 100%;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    p {
        color: var(--gray);
        font-size: clamp(1.4rem, 1.2vw, 1.8rem);
        font-family: "montserrat", sans-serif;
        font-style: normal;
        font-weight: 500;
    }


`;


function Summary({ bsummary }) {
    return (
        
        <StyledSummary>
        <GatsbyImage image={bsummary.image.asset.gatsbyImageData} alt="Branding Service Image" />
        <p>{bsummary.description}</p>
        </StyledSummary>
        
    )
}

export default function BrandSummary({ bsummarys }) {
   
    return (
        <>
        {bsummarys.map((bsummary) => (
       <Summary key={bsummary.id} bsummary={bsummary} />
       ))}
        </>
    )
}