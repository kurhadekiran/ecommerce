import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Header } from '../components/Header'
import { NavigationBar } from './../components/NavigationBar';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import  Goutam  from "./images/G.jpg"
import  Kiran  from "./images/K.jpg";
import  Shubham  from "./images/S.jpg";
import  Yogita from "./images/Y.jpg";
// import  Muhammad from "./images/M.jpg";
import back3 from './images/back3.avif';


const Aboutus = () => {
    const fixedImageStyle = {
        height: '150px', // Adjust this value as needed
        objectFit: 'contain',
      };
    //   const footerStyle = {
    //     color: 'white',
    //     padding: '20px',
    //     marginTop: '350px',
    //   };
  return (
    <>
    <NavigationBar/>
    <div style={{ backgroundImage: `url(${ back3 })`, backgroundSize: 'cover', minHeight: '100vh' }}>
    <br/><br/><br/><br/>

    <Container align="center">
      <h1 style={{ textAlign: 'center', color:'black'}}>👩‍💻🧑‍💻Our Team👩‍💻🧑‍💻</h1>
      <br/><br/><br/><br/>


      <Row>
        <Col  md={3} style={{ marginBottom: '20px', textAlign: 'center' }}>
          <Card>
            <Card.Img src={Goutam} alt="Goutam Hukeri" style={fixedImageStyle} />
            <Card.Body>
              <Card.Title>Goutam Hukeri</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">CDAC-Mumbai</Card.Subtitle>
              <Card.Text>PRN No. 230940320045</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} style={{ marginBottom: '20px', textAlign: 'center' }}>
          <Card>
            <Card.Img src={Kiran} alt="Kiran Kurhade" style={fixedImageStyle} />
            <Card.Body>
              <Card.Title>Kiran Kurhade</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">CDAC-Mumbai</Card.Subtitle>
              <Card.Text>PRN No. 230940520033</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} style={{ marginBottom: '20px', textAlign: 'center' }}>
          <Card>
            <Card.Img src={Shubham} alt="Shubham Rathee" style={fixedImageStyle} />
            <Card.Body>
              <Card.Title>Shubham Rathee</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">CDAC-Mumbai</Card.Subtitle>
              <Card.Text>PRN No. 230940320110</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} style={{ marginBottom: '20px', textAlign: 'center' }}>
          <Card>
            <Card.Img src={Yogita} alt="Yogita Zirange" style={fixedImageStyle} />
            <Card.Body>
              <Card.Title>Yogita Zirange</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">CDAC-Mumbai</Card.Subtitle>
              <Card.Text>PRN No. 230940320133</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* <Col md={3} style={{ marginBottom: '20px', textAlign: 'center' }}>
          <Card>
            <Card.Img src={Muhammad} alt="Muhammad Omar" style={fixedImageStyle} />
            <Card.Body>
              <Card.Title>Muhammad Sirkazi</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">CDAC-Mumbai</Card.Subtitle>
              <Card.Text>230340320059</Card.Text>
            </Card.Body>
          </Card>
        </Col> */}
        
      </Row>
      {/* <footer style={footerStyle}>
    </footer> */}
    </Container>
  
    </div>
    </>
  )
}
export default Aboutus