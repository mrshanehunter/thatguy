import React from "react"
import styled from "styled-components"

const StyledAddress = styled.div` 
width: 75%;
margin: 4rem auto 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h3 {
  font-family: "montserrat", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 1.6rem;
}
p {
  font-size: 1.2rem;
  color: var(--gray);
}
`

const Address = () => {
  return (
    <StyledAddress>
      <h3>Postal: PO Box 3015 South Melbourne VIC 3205 </h3>
      <br />
      <p>ABN: 87526423395</p>

    </StyledAddress>
  )
}

export default Address
