import React, { useRef, useState } from "react"
import axios from "axios"
import * as qs from "query-string"
import { navigate } from "gatsby"
import Form from "react-bootstrap/Form"
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"

export default function ContactForm(props) {
  const companyRef = useRef()
  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const messageRef = useRef()
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(loading)
    const formData = {
      "form-name": "contact",
      "company": companyRef.current.value,
      "name": nameRef.current.value,
      "email": emailRef.current.value,
      "phone": phoneRef.current.value,
      "message": messageRef.current.value,
    }
    const axiosOptions = {
      url: props.props.location.href,
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    }
    axios(axiosOptions)
      .then(response => {
        setMessage("Form submitted successfully")
        formRef.current.reset()
      })
      .catch(err => {
        setMessage("Form could not be submitted")
      })
    setLoading(!loading)
    navigate("/thanks/")
  }

  return (
    <>
      {message && <Alert variant="primary">{message}</Alert>}

      <Form
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/thanks/"
        ref={formRef}
        name="contact"
        onSubmit={e => handleSubmit(e)}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <Form.Group id="company">
          <Form.Label>Company Name:</Form.Label>
          <Form.Control
            type="text"
            name="company"
            ref={companyRef}
            placeholder="Your company name"
            required
          />
        </Form.Group>
        <Form.Group id="name">
          <Form.Label>Your Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            ref={nameRef}
            placeholder="Your name"
            required
          />
        </Form.Group>
        <Form.Group id="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            ref={emailRef}
            placeholder="Your email address"
            required
          />
        </Form.Group>
        <Form.Group id="phone">
          <Form.Label>Phone No.:</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            ref={phoneRef}
            placeholder="Your mobile number"
            maxLength="10"
            required
          />
        </Form.Group>
        <Form.Group id="message">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            ref={messageRef}
            rows="5"
            placeholder="A brief description of the problem you're looking to solve ..."
            required
          />
        </Form.Group>
        <Button
          type="submit"
          disabled={loading}
          className="w-100 mt-4 SubmitBtn"
          
        >
          Submit
        </Button>
      </Form>
    </>
  )
}
