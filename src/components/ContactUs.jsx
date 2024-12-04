import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { NavigationBar } from './NavigationBar';
import img1 from './images/img1.jpg';
export const ContactUs = () => {
    const [showModal, setShowModal] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        jobTitle: '',
        contactNumber: '',
        email: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        jobTitle: '',
        contactNumber: '',
        email: '',
    });

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setShowModal(false);
        setFormSubmitted(false); // Reset formSubmitted state for the next submission
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form validation
        if (validateForm()) {
            // Your form submission logic here
            handleShowModal();
            setFormSubmitted(true);
        }
    };

    const validateForm = () => {
        let valid = true;
        const errors = {};

        if (formData.firstName.trim() === '') {
            errors.firstName = 'First name is required';
            valid = false;
        } else if (!/^[a-zA-Z]+$/.test(formData.firstName.trim())) {
            errors.firstName = 'First name must contain only alphabets';
            valid = false;
        }
        

        if (formData.lastName.trim() === '') {
            errors.lastName = 'Last name is required';
            valid = false;
        } else if (!/^[a-zA-Z]+$/.test(formData.lastName.trim())) {
            errors.lastName = 'Last name must contain only alphabets';
            valid = false;
        }
        

        if (formData.companyName.trim() === '') {
            errors.companyName = 'Company name is required';
            valid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(formData.companyName.trim())) {
            errors.companyName = 'Company name must contain only alphabets';
            valid = false;
        }
        

        if (formData.jobTitle.trim() === '') {
            errors.jobTitle = 'Job title is required';
            valid = false;
        }

        if (!formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            errors.email = 'Invalid email address';
            valid = false;
        }

        if (!formData.contactNumber.match(/^\d{10}$/)) {
            errors.contactNumber = 'Invalid contact number (10 digits)';
            valid = false;
        }

        setFormErrors(errors);
        return valid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <>
            <NavigationBar />
            <div style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', minHeight: '100vh' }}>
            <div className="login template d-flex justify-content-center align-items-center vh-100 bg-light ">

                <div className="form_container-fluid p-5 rounded " style={{ width: "60%", boxShadow: '8px 8px 8px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h1 className="text-center mb-4">☎️Get in touch👆</h1>

                    <Row className="d-flex justify-content-center align-items-center mb-4">
                        <Col className="text-center">
                            <FaMapMarkerAlt size={30} color="#007BFF" />
                            <h3 className="mt-3">MUMBAI</h3>
                        </Col>
                        <Col className="text-center">
                            <FaPhone size={30} color="#007BFF" />
                            <h3 className="mt-3">0203 369 0098</h3>
                        </Col>
                        <Col className="text-center">
                            <FaEnvelope size={30} color="#007BFF" />
                            <h3 className="mt-3">canopyfinance@gmail.com</h3>
                        </Col>
                    </Row>

                    <Modal show={showModal} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title className="text-success">Form Submitted</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Your form has been submitted successfully!</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Form onSubmit={handleSubmit}>

                        <Row className='mb-3'>
                            <Col>
                                <Form.Group controlId="formFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your first name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                    {formErrors.firstName && <p className="error-message text-danger">{formErrors.firstName}</p>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your last name"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                    {formErrors.lastName && <p className="error-message text-danger">{formErrors.lastName}</p>}
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col>
                                <Form.Group controlId="formCompanyName">
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your Company name"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                    />
                                    {formErrors.companyName && <p className="error-message text-danger">{formErrors.companyName}</p>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formJobTitle">
                                    <Form.Label>Job Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your job title"
                                        name="jobTitle"
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                    />
                                    {formErrors.jobTitle && <p className="error-message text-danger">{formErrors.jobTitle}</p>}
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {formErrors.email && <p className="error-message text-danger">{formErrors.email}</p>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formContactNumber">
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your contact number"
                                        name="contactNumber"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                    />
                                    {formErrors.contactNumber && <p className="error-message text-danger">{formErrors.contactNumber}</p>}
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <p className="text-center">✌️"We are here with you✌️"</p>
                        <Container className="text-center">
                        <Button type="submit">Submit form</Button>
                        </Container>
                    </Form>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
            </div>
        </>
    );
};
