import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const StyledServicesGrid = styled.div`
  margin: 10rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1.5rem;
  justify-content: center;
  align-items: center;
  justify-items: center;
`

const StyledServiceContainer = styled.div`
  width: 100%;
  height: 10rem;
  .gatsby-image-wrapper {
    width: 30rem;
    height: 10rem;
  }
`

function MenuItem({ serviceItem }) {
  const str = "/services/"
  const svc = serviceItem.slug
  const dest = str + svc

  return (
    <>
      <StyledServiceContainer>
        <a href={dest}>
          <GatsbyImage
            image={serviceItem.image.asset.gatsbyImageData}
            alt={serviceItem.name}
            width="300px"
          />
        </a>
      </StyledServiceContainer>
    </>
  )
}

export default function ServiceMenu({ serviceItems }) {
  return (
    <StyledServicesGrid>
      {serviceItems.map(serviceItem => (
        <MenuItem key={serviceItem.id} serviceItem={serviceItem} />
      ))}
    </StyledServicesGrid>
  )
}
