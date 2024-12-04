import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useState } from "react";
// import { saveStudent } from "../services/StudentService";
import { NavigationBar } from "./NavigationBar";
import { signup } from "../services/SignUp";
import img1 from './images/img1.jpg';
import { useNavigate } from "react-router-dom";
export function SignUp() {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", role: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear previous errors
        setErrors({ ...errors, [name]: null });

        // Validation for first and last names
        if ((name === 'firstName' || name === 'lastName') && /\d/.test(value)) {
            setErrors({ ...errors, [name]: "Name should not contain numbers" });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation for email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            setErrors({ ...errors, email: "Invalid email address" });
            return;
        }

        // Validation for password
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
        if (!formData.password || !passwordRegex.test(formData.password)) {
            setErrors({ ...errors, password: "Password should contain 8-15 alphanumeric characters and at least one special character" });
            return;
        }

        try {
            const result = await signup(formData);
            setFormData({ firstName: "", lastName: "", email: "", password: "", role: "" });
            setIsSubmitted(true);
            navigate("/signin");
            setTimeout(() => {
                setIsSubmitted(false);
            }, 1500);
            console.log(result.message);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <NavigationBar />
            <div style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', minHeight: '100vh' }}>
              <br></br>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={4} className="mt-5">
                  {/* </Col>  <Col sm={{ span: 5, offset: 3 }} className="mt-4"> */}
                        <div className="card shadow border-secondary">
                            <div className="card-body ">
                            <h4 className="mb-3 center" >🔑 Registration Form</h4>
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col lg={12}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter First Name"
                                                    name="firstName"
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.firstName}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.firstName}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    {/* Similarly, add validation for Last Name, Email, Password, and Role fields */}
                                    <Row>
                                        <Col lg={12}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter last Name"
                                                    name="lastName"
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.lastName}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.lastName}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    {/* Add validation for other fields */}
                                    <Row>
                                        <Col lg={12}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter email"
                                                    name="email"
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.email}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.email}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    {/* Add validation for password field */}
                                    <Row>
                                        <Col lg={12}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Enter Password"
                                                    name="password"
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.password}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.password}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    {/* Add validation for role field */}
                                    <Row>
                                        <Col lg={12}>
                                            <Form.Group className=" mb-3" >
                                                <Form.Label htmlFor="role">Role:</Form.Label>
                                                <br />
                                                <select
                                                    id="role"
                                                    name="role"
                                                    value={formData.role}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="">Select Role</option>
                                                    <option value="ADMIN">Admin</option>
                                                    <option value="SUPPLIER">Supplier</option>
                                                    <option value="INVESTOR">Investor</option>
                                                    <option value="BUYER">Buyer</option>
                                                </select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <Button className="btn btn-lg" variant="primary" type="submit">
                                                Register
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col lg={12}>
                                            {isSubmitted ? (
                                                <Alert variant="success">User Registered</Alert>
                                            ) : null}
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    );
}
