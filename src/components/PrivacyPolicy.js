import React from "react"
import styled from "styled-components"

const StyledPrivacyContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    
`;

const StyledPrivacyHeader = styled.div` 
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    h3, h4 {
        color: var(--highlight);
    }
    p {
        color: var(--gray);
    }
`;

const StyledPolicySection = styled.div` 
    width: 90%;
    margin: 0 auto;
    h3 {
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
            <h3>{privacy.name}</h3>
            <h4>{privacy.upd}</h4>
        </div>
        <div>
            <p>{privacy.statement}</p>
        </div>
        </StyledPrivacyHeader>
    )
}




function PolicySection({ sects }) {
    console.log(sects);
    

    return (
        <StyledPolicySection>
        {sects.map((sect) => (
        <div key={sect.id}>
             <h3>{sect.sectNo}. {sect.sectHead}</h3>
             
        </div>
        ))}
        </StyledPolicySection>
    )
}




function PolicyContent({ sects, paras }) {
   let map = {};
   sects.forEach(i => map[i] = sect.id) = {
       ...sect,
   };
   paras.forEach(i => map[i] === paras.sections._ref) = {
       ...para
   };

       
   console.log("Map", map) 
    
}


export default function PrivacyPolicy(props) {
    const privacys = props.props.data.allSanityPolicys.nodes;
    const paras = props.props.data.allSanityParagraphs.nodes;
    const sects = props.props.data.allSanitySections.nodes;
    console.log(props);
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