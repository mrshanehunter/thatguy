import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

function WebStreamMbl({ web }) {
  return (
    <Card className="w-100  SSMbl" style={{ maxWidth: `55rem` }}>
      <Accordion.Toggle
        as={Card.Header}
        eventKey={web.sequence}
        style={{ cursor: `pointer` }}
      >
        <GatsbyImage image={web.image.asset.gatsbyImageData} alt={web.name} style={{maxWidth: `25rem`, maxHeight: `25rem`, margin: `0 auto`, padding: `2rem 0`}}/>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={web.sequence}>
        <Card.Body className="SSMbl">
          <Card.Title className="SSMbl">{web.name}</Card.Title>
          <Card.Text className="SSMbl">{web.description}</Card.Text>
          <Card.Text className="SSMbl">{web.inclusion1}</Card.Text>
          <Card.Text className="SSMbl">{web.inclusion2}</Card.Text>
          <Card.Text className="SSMbl">{web.inclusion3}</Card.Text>
          <Card.Text className="SSMbl">{web.inclusion4}</Card.Text>
          <Card.Text className="SSMbl">{web.inclusion5}</Card.Text>
          <Card.Text className="SSMbl">{web.inclusion6}</Card.Text>

          <AniLink paintDrip to={"/contact/"} hex="#0f4c81" duration={0.25}>
            Make It Happen Today
          </AniLink>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

export default function WebsMbl({ webs }) {
  return (
    <Accordion className="w-100" style={{ maxWidth: `55rem` }}>
      {webs.map(web => (
        <WebStreamMbl key={web.id} web={web} />
      ))}
    </Accordion>
  )
}
