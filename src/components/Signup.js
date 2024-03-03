import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Row, Col } from "react-bootstrap"
import { useAuth } from '../contexts/AuthContext'
import "bootstrap/dist/css/bootstrap.min.css"
import CustomNavbar from './Navbar'; // Import the Navbar component


export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){//function takes in an event e
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        try {
            setError('')//set error back to empty string so we don't have an error
            setLoading(true)
           await signup(emailRef.current.value, passwordRef.current.value) 
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false) //prevents mmultiple accounts from being created at once

        

    }

    return(
        <>
        <div>
            <CustomNavbar/>
        </div>
        
        <Row>
            <Col md={12}>
                <div class="form-card">
                
                
                    <Card>
                        <Card.Body>
                            <h2 className = "text-center mb-4"> Sign Up </h2>
                            {/* {JSON.stringify(currentUser)} */}
                            {error && <Alert variant = "danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id = "email">
                                    <Form.Label> Email </Form.Label>
                                    <Form.Control type = "email" ref = {emailRef} required />
                                </Form.Group>
                                <Form.Group id = "password">
                                    <Form.Label> Password </Form.Label>
                                    <Form.Control type = "password" ref = {passwordRef} required />
                                </Form.Group>
                                <Form.Group id = "password-confirm">
                                    <Form.Label> Password Confirmation</Form.Label>
                                    <Form.Control type = "password" ref = {passwordConfirmRef} required />
                                </Form.Group>
                                <Button disabled={loading} className = "w-100 signup-button" type = "submit">
                                    Sign Up
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
                <div className = "w=100 text-center mt-2" >
                    Already have an account? Log in
                </div>
            </Col>
        </Row>
        </>
    )



}