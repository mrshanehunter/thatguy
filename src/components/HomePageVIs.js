import React from "react"
import styled from "styled-components"
import Definitions from "./Definitions"
import Questions from "./Questions"

const StyledContainer = styled.div`
    width: 100%;
    margin: 0 auto;    
`;
const StyledDefinitionsContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
    }
`;
const StyledQuestionsContainer = styled.div`
    width: 90%;
    margin: 0 auto;
`;

export default function HomePageVis(props) {
    console.log(props);
  const questions = props.props.data.questions.nodes;
  const definitions = props.props.data.definitions.nodes;

    return (
        <>
        <StyledContainer>
        <StyledDefinitionsContainer>    
                    <Definitions definitions={definitions} />
        </StyledDefinitionsContainer>
        <StyledQuestionsContainer>
           <Questions questions={questions} />
           </StyledQuestionsContainer>
        </StyledContainer>
        
        
        </>
    )
}
