import React from 'react'
import styled, { css } from 'styled-components'

import { PRIMARY_COLOR } from '../../../style.config'

import Button from '../../UI/Button'

const inputCss = css`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  display: inline-block;
  border: 2px solid ${PRIMARY_COLOR};
  border-radius: 0;
  outline: none;
  color: ${PRIMARY_COLOR};
`

const ContactFormContainer = styled.div`
  padding: 24px;
`

const InputBlock = styled.div`
  &:not(:first-child) {
    margin-top: 24px;
  }
`

const InputLabel = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
`

const InputField = styled.input`
  ${inputCss}
`

const InputArea = styled.textarea`
  resize: none;
  ${inputCss}
`

const Submit = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`

const encodeFormData = object => {
  return Object.keys(object)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(object[key]))
    .join('&')
}

export default function ContactForm() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  const handleNameChange = e => setName(e.target.value)
  const handleEmailChange = e => setEmail(e.target.value)
  const handleMessageChange = e => setMessage(e.target.value)

  const resetForm = () => {
    setName('')
    setEmail('')
    setMessage('')
  }

  const handleSubmit = e => {
    e.preventDefault()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeFormData({
        name,
        email,
        message,
        'form-name': 'contact',
      }),
    })
      .then(() => {
        alert(
          'Your message has been successfully sent! I will get back to you as soon as I can!'
        )
      })
      .catch(() => {
        alert(
          'Oops, it looks like something is broken, please contact me directly via email (richard.szegh@gmail.com)!'
        )
      })

    resetForm()
  }

  return (
    <ContactFormContainer>
      <form
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* FOR NETLIFY */}
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <InputBlock>
          <InputLabel htmlFor="name">Name:</InputLabel>
          <InputField
            required
            aria-required
            type="text"
            name="name"
            id="name"
            placeholder="Your name..."
            value={name}
            onChange={handleNameChange}
          />
        </InputBlock>

        <InputBlock>
          <InputLabel htmlFor="email">Email:</InputLabel>
          <InputField
            required
            aria-required
            type="email"
            name="name"
            id="name"
            placeholder="Your email..."
            value={email}
            onChange={handleEmailChange}
          />
        </InputBlock>

        <InputBlock>
          <InputLabel htmlFor="message">Message:</InputLabel>
          <InputArea
            required
            aria-required
            name="message"
            id="message"
            rows="5"
            placeholder="Your message..."
            value={message}
            onChange={handleMessageChange}
          />
        </InputBlock>

        <Submit>
          <Button variant="secondary" size="large" type="submit">
            Get in touch now!
          </Button>
        </Submit>
      </form>
    </ContactFormContainer>
  )
}
