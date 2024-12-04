import React from 'react'
import { NavigationBar } from './NavigationBar'
import { Col, Container, Row } from 'react-bootstrap'
import { Header } from './Header'
const placeholderImageUrl = '/error.avif';
const ErrorPage = () => {
  return (
    <> 
    <NavigationBar/>
    <div style={{ backgroundImage: `url(${placeholderImageUrl})`, backgroundSize:'cover', minHeight: '200vh' }}> 
   <Container>
    <Header text="we're unable to locate the content you requested. Please double-check the  request details and try again">
    </Header>
    {/* <Row className="justify-content-center">
      <Col md={12} lg={6}>
      
      </Col>
      </Row> */}

   </Container>
   </div>
   </>
  )
}

export default ErrorPage
