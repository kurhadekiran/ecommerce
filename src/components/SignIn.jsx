import { useState } from "react";
import { Alert, Button, Card, CardBody, Col, Container, Form, Row } from "react-bootstrap";
// import { login } from "../services/AdminService";
import { login } from "../services/SignIN";
//  import { login } from "../services/StudentService";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import img1 from './images/img1.jpg';
import { Header } from "./Header";
export function SignIn() {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({email:"",password:""});
    const [loginError,setLoginError]=useState(false);

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          const result= await login(formData);
          localStorage.setItem("jwt",result.jwt);
          localStorage.setItem("roles",result.roles);
          localStorage.setItem("id",result.id);
          navigate("/");
          //navigate("/dashboard");
        } catch (error) {
            console.log(error);
            setLoginError(true);
        }
    }
    return (
        <>
        {/* <div style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', minHeight: '100vh' }}> */}
        <NavigationBar/>
     
        <div style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', minHeight: '100vh' }}>
        <Container>
       
            <Row>
                <Col sm={{ span: 5, offset: 3 }} className="mt-4">
                    <Card className="shadow p-4">
                        <CardBody>
                            <h4 className="mb-3">🔑 Login</h4>
                            <Form onSubmit={handleSubmit} className="mb-3">
                                <Row>
                                    
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Enter Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            
                                            />
                                        </Form.Group>
                                </Row>
                                <Row>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Enter password" name="password"
                                                value={formData.password}
                                                onChange={handleChange}  
                                            />
                                            </Form.Group>
                                      
                                      </Row>
                                      <Container className="mb-2">
                                     {/* <Button variant="success" type="submit" href="/UserPage">
                                          Login 
                                       </Button>*/}
                                        <Button variant="success" type="submit">
                                          Login 
                                      </Button>
                                      <a href="/SignUp" className="ml-5 px-5">Register Now..</a>
                                      </Container>
                                      
                                  </Form>
                              </CardBody>
                          </Card>
                      </Col>
                  </Row>
              </Container>
              </div>
            </>
    );
}