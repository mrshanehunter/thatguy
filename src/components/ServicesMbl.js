import React from "react"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

function ServiceStreamMbl({ stream }) {
  return (
  
  <>
    <Card className="w-100  SSMbl1" style={{maxWidth: `55rem`}}>
      <Accordion.Toggle as={Card.Header} eventKey={stream.event_key} style={{cursor: `pointer`}} >
    
        <Img fluid={stream.image.asset.fluid} alt={stream.name} />
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={stream.event_key}>
        <Card.Body className="SSMbl">
          <Card.Title className="SSMbl">{stream.name}</Card.Title>
          <Card.Text className="SSMbl">{stream.definition}</Card.Text>
          <Card.Text className="SSMbl">{stream.benefit}</Card.Text>
          <Card.Text className="SSMbl">{stream.why}</Card.Text>
       
      
          <AniLink paintDrip to={`/services/${stream.slug}`} hex="#0f4c81" duration={0.5}>
            Let's Make It Happen
          </AniLink>
          </Card.Body> 
           
      </Accordion.Collapse>
    </Card>
  </>
)
}

export default function ServicesMbl({ streams }) {

  return(
    <Accordion className="w-100" style={{maxWidth: `55rem`}}>
    {streams.map((stream) => (
      <ServiceStreamMbl key={stream.id} stream={stream} />
    ) )}
    </Accordion>
  )
}