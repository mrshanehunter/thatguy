import React from "react"
import Img from "gatsby-image"
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
        font-size: 1.6rem;
        font-family: "montserrat", sans-serif;
        font-style: normal;
        font-weight: 500;
    }


`;


function Summary({ wsummary }) {
    return (
        <StyledSummary>
        <Img fluid={wsummary.image.asset.fluid} alt="Website Service Image" />
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