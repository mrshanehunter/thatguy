import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"
import styled from "styled-components"

const StyledDefinition = styled.div` 
    width: 20rem;
    height: 20rem;
    margin: 2rem;
    background: transparent;
    border-radius: 1rem;
    box-shadow: 0 0 0.75rem 0.25rem rgba(138, 189, 222, 0.75);

`;

const StyledDefinitionFront = styled.div` 
    width: 20rem;
    height: 20rem;
    cursor: pointer;
    display: flex;
    border-radius: 1rem;
    button {
        background: var(--classic);
        border: 0.05rem solid var(--base);
        width: 20rem;
        height: 20rem;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 1rem;
        
        h3 {
            padding-top: 0;
            margin-top: -1rem;
            color: var(--gray);
            font-size: 3rem;
            :hover {
                color: var(--highlight);
            }


        }
    }

`;

const StyledDefinitionBack = styled.div` 
width: 20rem;
height: 20rem;
padding-top: 0;
cursor: pointer;
display: flex;
border-radius: 1rem;
button {
    background: var(--base);
    border: 0.05rem solid var(--highlight);
    width: 20rem;
    height: 20rem;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 1rem;
    p {
        padding-top: 0;
        margin-top: -1rem;
        color: var(--gray);
        font-size: 1.6rem;

    }
}

`;

 function Define({ definition }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault(e)
        setIsFlipped(!isFlipped)
    }


    return (
        <StyledDefinition>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <StyledDefinitionFront>
                <button className="w-100" type="button" onClick={handleClick}>
                  <h3> {definition.name} </h3>
                </button>
            </StyledDefinitionFront>
            <StyledDefinitionBack>
            <button className="w-100" type="button" onClick={handleClick}>
                <p style={{color: `var(--highlight)`}}><em>{definition.type}:</em></p>
                <p>{definition.def}</p>
            </button>
            </StyledDefinitionBack>
        </ReactCardFlip>
       
        </StyledDefinition>
    )
}

export default function Definitions({ definitions }) {
    return(
    <>
    {definitions.map((definition) => (
        <Define key={definition.id} definition={definition} />
    ))

    }

    </>
)
}
