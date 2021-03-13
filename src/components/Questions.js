import React from "react"
import AniLink from "gatsby-plugin-transition-link/Anilink"
import styled from "styled-components"
import QuestionSet from "./QuestionSet"


const StyledContainer = styled.div` 
    width: 100%;
    margin: 0 auto;
    p {
    color: var(--gray);
    }
`;

const StyledQuestions = styled.div` 
    display: flex;
    flex-direction: column;
    width: 100%;
    
    margin: 0 auto;

    // @media (min-width: 768px) {
    // width: 100%;
    // display: flex;
    // flex-direction: row;
    // flex-wrap: wrap;
    // padding: 2rem 0;
    // }    
`;

const StyledQuestionBox = styled.div `
    width: 100%;
    margin: 1rem;
    p {
        font-family: "montserrat", sans-serif;
        font-weight: 500;
        font-style: normal;
        font-size: clamp(1.4rem, 1.2vw, 1.8rem);
        margin: 1rem;
    }
    @media (min-width: 768px) {
        width: 50%;
        height: 50%;
        margin: 0;
    }
`;

const StyledStatement = styled.div` 
color: var(--highlight);
font-size: clamp(1.4rem, 1.2vw, 1.8rem);
text-align: center;
font-family: "montserrat", sans-serif;
font-weight: 500;
font-style: normal;
`;



 

export default function Questions({ questions }) {
    return (
    <>
        <StyledContainer>
            <StyledQuestions>   
                <QuestionSet />
            </StyledQuestions>
            <StyledStatement>
                <p>Visibility gets blamed, value shamed, and "marketing" painted as one of the dark arts.</p>
            </StyledStatement>
            <StyledStatement>
                <p>If any of these scenarios feels familiar, {<AniLink paintDrip to="/contact/" hex="#0f4c81" duration={0.5} >let's chat!</AniLink>}</p>   
            </StyledStatement>
        </StyledContainer>
    </>
)
}
