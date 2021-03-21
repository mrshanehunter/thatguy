import React from "react"
import styled from "styled-components"

const StyledPrivacyContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    p {
        color: var(--gray);
    }
    
`;

const StyledPrivacyHeader = styled.div` 
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

const StyledPolicySection = styled.div` 
    width: 90%;
    margin: 0 auto;
    h5 {
        color: var(--highlight);
    }
    p {
        color: var(--gray);
    }
    

`;



function PolicyHeader({ privacy }) {
    return (
        <StyledPrivacyHeader>
        <div>
            <h4>{privacy.name}</h4>
            <h5>LAST UPDATED: {privacy.upd}</h5>
        </div>
        <div>
            <p>{privacy.statement}</p>
        </div>
        </StyledPrivacyHeader>
    )
}

function PolicyPara(props) {
  
    if (props.id === props.para.sectRef) {
        return (
            <p key={props.para.id}>{props.para.sectRef}.{props.para.paraNo}. {props.para.paraText}</p>
        )
    } else {
        return null;
    }
}
    


function PolicyContent({ sects, paras }) {
 
    return (
       <>
       <StyledPolicySection>
        {sects.map((sect) => (
            
            <div key={sect.id}>
                <h5>{sect.sectNo}. {sect.sectHead}</h5>
                {paras.map((para) => (
                   
              <PolicyPara key={para.id} id={sect.sectNo} para={para} />

               
                ))}
            </div>
        ))}
       </StyledPolicySection>
       </>
   )
           
   
}


export default function PrivacyPolicy(props) {
    
    const privacys = props.props.data.allSanityPolicys.nodes;
    const paras = props.props.data.allSanityParagraphs.nodes;
    const sects = props.props.data.allSanitySections.nodes;
    
    return (
        <StyledPrivacyContainer>
    <div>
        {privacys.map((privacy) => (
        <PolicyHeader key={privacy.id} privacy={privacy} />
        ))}
    </div>
    <div>
        <PolicyContent sects={sects} paras={paras} />
        
        </div> 
        </StyledPrivacyContainer>
    )
}