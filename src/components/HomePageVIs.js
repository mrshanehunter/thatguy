import React, { useState, useEffect } from "react"
import styled from "styled-components"

import DefinitionsCarousel3 from "./DefinitionsCarousel3"
import Questions from "./Questions"
import DefinitionsCarousel from "./DefinitionsCarousel"

const StyledContainer = styled.div`
    width: 100%;
    margin: 0 auto;    
`;
const StyledDefinitionsContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 1024px) {
        width: 68rem;
        margin: 0 auto;
        
    }
`;
const StyledQuestionsContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    @media (min-width: 1024px) {
        width: 68rem;
        margin: 0 auto;
    }
`;

export default function HomePageVis(props) {
const [width, setWidth] =useState();
const breakpoint = 1024;
const questions = props.props.data.questions.nodes;
 
useEffect(() => {
    setWidth(window.innerWidth)
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);



    return (
        <>
        <StyledContainer>
        <StyledDefinitionsContainer>    
        { width < breakpoint ? <DefinitionsCarousel /> :  <DefinitionsCarousel3 />} 
        </StyledDefinitionsContainer>
        <StyledQuestionsContainer>
           <Questions questions={questions} />
           </StyledQuestionsContainer>
        </StyledContainer>
        
        
        </>
    )
}
