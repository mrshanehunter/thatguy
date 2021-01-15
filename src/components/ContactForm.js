import React from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const ContactForm = () => {
  return (
    <Form
    method="POST" netlify-honeypot="bot-field" data-netlify="true" action="/thanks/" name="contactform">
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="contactform" value="Contact Form" />
       <Form.Group name="company" id="company">
        <Form.Label>Company Name:</Form.Label>
        <Form.Control
        type="text"
        placeholder="Your company name"
        required />
      </Form.Group>
      <Form.Group name="name" id="name">
        <Form.Label>Your Name:</Form.Label>
        <Form.Control
        type="text"
        placeholder="Your name"
        required />
      </Form.Group>
      <Form.Group name="email" id="email">
        <Form.Label>Email:</Form.Label>
        <Form.Control
        type="email"
        placeholder="Your email address"
        required />
      </Form.Group>
      <Form.Group name="phone" id="phone">
        <Form.Label>Phone No.:</Form.Label>
        <Form.Control
        type="tel"
        placeholder="0412345678"
        maxlength="10"
        required />
      </Form.Group>
      <Form.Group name="company" id="company">
        <Form.Label>Message:</Form.Label>
        <Form.Control 
        as="textarea"
        name="message"
        id="message"
        rows="5"
        placeholder="A brief description of the problem you're looking to solve ..."
        required />
      </Form.Group>
    <Button 
    type="submit"
    className="w-100 mt-4"
    style={{
      fontFamily: `timberline`,
      fontSize: `2.4rem`,
      background: `var(--classic)`,
      border: `0.05rem thin var(--accent)`,
      color: `var(--gray)`,
      }}>Submit</Button>

    </Form>
  )
}

export default ContactForm