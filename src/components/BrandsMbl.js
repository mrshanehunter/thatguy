import React from "react"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

function BrandStreamMbl({ brand }) {
  return (
    <Card className="w-100  SSMbl" style={{ maxWidth: `55rem` }}>
      <Accordion.Toggle
        as={Card.Header}
        eventKey={brand.sequence}
        style={{ cursor: `pointer`, alignItems: `center` }}
      >
        <Img fluid={brand.image.asset.fluid} alt={brand.name} style={{maxWidth: `25rem`, maxHeight: `25rem`, margin: `0 auto`, padding: `2rem 0`}} />
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={brand.sequence}>
        <Card.Body className="SSMbl">
          <Card.Title className="SSMbl">{brand.name}</Card.Title>
          <Card.Text className="SSMbl">{brand.description}</Card.Text>
          <Card.Text className="SSMbl">{brand.inclusion1}</Card.Text>
          <Card.Text className="SSMbl">{brand.inclusion2}</Card.Text>
          <Card.Text className="SSMbl">{brand.inclusion3}</Card.Text>
          <Card.Text className="SSMbl">{brand.inclusion4}</Card.Text>
          <Card.Text className="SSMbl">{brand.inclusion5}</Card.Text>
          <Card.Text className="SSMbl">{brand.inclusion6}</Card.Text>

          <AniLink
            paintDrip
            to={"/contact/"}
            hex="#0f4c81"
            duration={0.5}
          >
          Make It Happen Today
          </AniLink>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

export default function BrandsMbl({ brands }) {
  return (
    <Accordion className="w-100" style={{ maxWidth: `55rem` }}>
      {brands.map(brand => (
        <BrandStreamMbl key={brand.id} brand={brand} />
      ))}
    </Accordion>
  )
}
