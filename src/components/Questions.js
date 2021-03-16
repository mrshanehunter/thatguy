import React from "react"
import AniLink from "gatsby-plugin-transition-link/Anilink"
import styled from "styled-components"
import Zoom from "react-reveal/Zoom"
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
    
    margin: 0 auto 3rem;

    // @media (min-width: 768px) {
    // width: 100%;
    // display: flex;
    // flex-direction: row;
    // flex-wrap: wrap;
    // padding: 2rem 0;
    // }    
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
          <Zoom delay={10000} duration={5000}>
            <StyledStatement>
              <p>Confused? Struggling to take it all in?</p>
              <p>
                There are just 20 messages above, interrelated by theme and
                context. An infinitesimal fraction at the bottom end of the
                estimated 6,000+ advertisements and branded messages your
                customers are exposed to each day.{" "}
              </p>
            </StyledStatement>
            <StyledStatement>
              <p>
                Now, armed with that knowledge and this experience, if you're
                doubting the context surrounding your brand or if any of the
                scenarios feels familiar{" "}
                {
                  <AniLink
                    paintDrip
                    to="/contact/"
                    hex="#0f4c81"
                    duration={0.5}
                  >
                    let's chat!
                  </AniLink>
                }
              </p>
            </StyledStatement>
          </Zoom>
        </StyledContainer>
      </>
    )
}
