import React, { useEffect, useState } from 'react'
import { NavigationBar } from '../components/NavigationBar'
import { Header } from '../components/Header'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import AddProductImg from './AddProductImg.avif';
const ViewOrders = () => {

    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    const navigate = useNavigate();
 
    // const[id,setId]= useState();

    // using Promises
    useEffect(() => {
        axios
            .get("http://localhost:8080/order/viewallorders")
            .then((response) => setMyData(response.data))
            .catch((error) => setIsError(error.message));
    }, []);

    const handleBuyNow = (id) => {
      
        // Add logic here to perform any actions before redirection if needed
        // For example, you can send an API request to initiate the purchase

        // Redirect to the "buynow" route with the appropriate parameter
       // navigate(`/homepage/buynow/${id}`);
        navigate("/");
    };

  return (
    <>
    <NavigationBar/>
    {isError !== "" && <h2>{isError}</h2>}
    <div style={{ backgroundImage: `url(${AddProductImg})`, backgroundSize: 'cover', minHeight: '100vh' }}>
     <Container>
     <Header text="Welcome to Buyer Request List  Section"></Header>
     <Row className="justify-content-md-center">
                        {myData.map((post) => {
                            const { id, buyerName, addreass, mobileNo,price } = post;
                            return (
                                <Col key={id} lg={3}>
                                    <Card className="mt-5">
                                        <Card.Img variant="top" src={`http://localhost:8080/order/productImage/${id}`} />
                                        
                                        <Card.Body className="text-center">
                                            <Card.Title><strong>Buyer Name : </strong>{buyerName}</Card.Title>
                                            <p><strong>Addreass: </strong>{addreass}</p>
                                            <p><strong>Mobile No : </strong>{mobileNo}</p>
                                            <p><strong>Product Price : </strong>{price}</p>
                                            
                                            
                                            <Button onClick={() => {
                                               
                                               navigate ("/addtransaction");
                                            }}>New Request</Button>
                                          
                                            
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
     </Container>
     </div>
       </>
      )
}

export default ViewOrders
