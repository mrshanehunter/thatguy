import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
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
        font-size: clamp(1.4rem, 1.2vw, 2rem);
        font-family: "montserrat", sans-serif;
        font-style: normal;
        font-weight: 500;
    }


`;


function Summary({ wsummary }) {
    return (
        <StyledSummary>
        <GatsbyImage image={wsummary.image.asset.gatsbyImageData} alt="Website Service Image" />
        <p>{wsummary.description}</p>
        </StyledSummary>
    )
}

export default function WebsiteSummary({ wsummarys }) {
    
    return (
        <>
        {wsummarys.map((wsummary) => (
       <Summary key={wsummary.id} wsummary={wsummary} />
       ))}
        </>
    )
}