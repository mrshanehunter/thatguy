import React from "react"
import styled from "styled-components"

const StyledTermsContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    p {
        color: var(--gray);
    }
    
`;

const StyledTermsHeader = styled.div` 
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    h4, h5 {
        color: var(--highlight);
        font-family: "montserrat", sans-serif;
        font-weight: 600;
        font-style: normal;
    }
    p {
        color: var(--gray);
    }
`;

const StyledTermsSection = styled.div` 
    width: 90%;
    margin: 0 auto;
    h5 {
        color: var(--highlight);
    }
    p {
        color: var(--gray);
    }
    

`;



function TermsHeader({ term }) {
    return (
        <StyledTermsHeader>
        <div>
            <h4>{term.name}</h4>
            <h5>LAST UPDATED: {term.upd}</h5>
        </div>
        <div>
            <p>{term.statement}</p>
        </div>
        </StyledTermsHeader>
    )
}

function TermsPara(props) {
    console.log("policy", props);
    
    if (props.id === props.para.sectRef && props.policy === "Terms & Conditions") {
        return (
            <p key={props.para.id}>{props.para.sectRef}.{props.para.paraNo}. {props.para.paraText}</p>
        )
    } else {
        return null;
    }
    
}

function TermsContent({ sects, paras }) {
  console.log(sects);
    return (
       <>
       <StyledTermsSection>
        {sects.map((sect) => (
            
            <div key={sect.id}>
                <h5>{sect.sectNo}. {sect.sectHead}</h5>
                {paras.map((para) => (
                   
              <TermsPara key={para.id} id={sect.sectNo} policy={sect.policyRef} para={para} />

               
                ))}
            </div>
        ))}
       </StyledTermsSection>
       </>
   )
           
   
}


export default function TermsPolicy(props) {
    const terms = props.props.data.allSanityPolicys.nodes;
    const paras = props.props.data.allSanityParagraphs.nodes;
    const sects = props.props.data.allSanitySections.nodes;
    
    return (
        <StyledTermsContainer>
    <div>
        {terms.map((term) => (
        <TermsHeader key={term.id} term={term} />
        ))}
    </div>
    <div>
        <TermsContent sects={sects} paras={paras} />
        
        </div> 
        </StyledTermsContainer>
    )
}