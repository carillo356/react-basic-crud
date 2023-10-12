import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import RouterButton from './ui/RouterButton'
import Validation from '../helper/Validation'
import clientService from '../services/api/clientService'
import { useNavigate } from "react-router-dom"

const CreateClientForm = () => {
  const navigate = useNavigate()

  const[error, setError] = useState({})

  const[formData, setFormData] = useState({
    name: "",
    email: "",
  })

  const handleInput = event => {
    setFormData(prevFormData => ({
        ...prevFormData,
        [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    const validationErrors = Validation(formData)
    setError(validationErrors)

    const isFormDataComplete = Object.values(validationErrors).every(error => error === "")

    if(isFormDataComplete) {
      if(clientService.createClient(formData)) {
        navigate("/")
      }
    }
    
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={handleInput} name="name" type="text" placeholder="Enter name" />
        {error.name && <span className='text-danger'>{error.name}</span>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={handleInput} name="email" type="email" placeholder="Enter email" />
        {error.email && <span className='text-danger'>{error.email}</span>}
      </Form.Group>

      <div className="d-grid gap-2">
        <Button variant="primary btn-block" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <RouterButton variant="secondary" name='Cancel' navigate='/' />
      </div>
    </Form>
  )
}

export default CreateClientForm