import React from "react"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

function MarketStreamMbl({ market }) {
  return (
    <Card className="w-100  SSMbl" style={{ maxWidth: `55rem` }}>
      <Accordion.Toggle
        as={Card.Header}
        eventKey={market.sequence}
        style={{ cursor: `pointer` }}
      >
        <Img fluid={market.image.asset.fluid} alt={market.name} style={{maxWidth: `25rem`, maxHeight: `25rem`, margin: `0 auto`, padding: `2rem 0`}}/>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={market.sequence}>
        <Card.Body className="SSMbl">
          <Card.Title className="SSMbl">{market.name}</Card.Title>
          <Card.Text className="SSMbl">{market.description}</Card.Text>
          <Card.Text className="SSMbl">{market.inclusion1}</Card.Text>
          <Card.Text className="SSMbl">{market.inclusion2}</Card.Text>
          <Card.Text className="SSMbl">{market.inclusion3}</Card.Text>
          <Card.Text className="SSMbl">{market.inclusion4}</Card.Text>
          <Card.Text className="SSMbl">{market.inclusion5}</Card.Text>
          <Card.Text className="SSMbl">{market.inclusion6}</Card.Text>

          <AniLink paintDrip to={"/contact/"} hex="#0f4c81" duration={0.5}>
            Make It Happen Today
          </AniLink>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

export default function MarketsMbl({ markets }) {
  return (
    <Accordion className="w-100" style={{ maxWidth: `55rem` }}>
      {markets.map(market => (
        <MarketStreamMbl key={market.id} market={market} />
      ))}
    </Accordion>
  )
}
