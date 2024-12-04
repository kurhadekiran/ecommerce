import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { NavigationBar } from '../components/NavigationBar';
import AddPro from './images/AddPro.avif';
const placeholderImageUrl = '/logo192.png';

const ViewOrder = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    const[productId,setProductId] =useState("");

    const[showDialog,setShowDialog]=useState(false);


    const navigate = useNavigate();

    const openModalDialog = () => {
        setShowDialog(true);
    }
    const closeModalDialog = () => {
        setShowDialog(false);
    }

    // const[id,setId]= useState();

    // using Promises
    useEffect(() => {
      
       const buyerId=localStorage.getItem("id");
        if(buyerId){
            axios                             ///buyer/{buyerId}"
            .get(`http://localhost:8080/order/buyer/${buyerId}`)
            .then((response) => setMyData(response.data))
            .catch((error) => setIsError(error.message));
        }
        else{
            setIsError("Buyer id is not found in localStorage");
        }

        
    }, []);

    const handleDelete = async() => {
        
        try {  
       await axios                    ///delete/{orderId}
       .delete(`http://localhost:8080/order/delete/${productId}`)
        closeModalDialog();
        //populate 
       
        }
       catch (error){
         console.log(error)
        
       }


        // Add logic here to perform any actions before redirection if needed
        // For example, you can send an API request to initiate the purchase

        // Redirect to the "buynow" route with the appropriate parameter
        // navigate(`/homepage/buynow/${id}`);
        //navigate("");
    };
  
  
  
    return (
    <>
    <NavigationBar/>
    {isError !== "" && <h2>{isError}</h2>}
    <div style={{ backgroundImage: `url(${AddPro})`, backgroundSize: 'fix', minHeight: '100vh' }}>
    <Container>
       <Header text="Welcome to Request Form list Page"></Header>
       <Row className="justify-content-md-center">
                    {myData.map((post) => {
                        const { id, buyerName, addreass, price,mobileNo } = post;
                        return (
                            <Col key={id} lg={3}>
                                <Card className="mt-5">                                          
                                    <Card.Img variant="top" src={`http://localhost:8080/order/productImage/${id}`} onError={(e) => { e.target.src = placeholderImageUrl }} />
                                    
                                    <Card.Body className="text-center">
                                        <Card.Title><strong>Buyer Name : </strong>{buyerName}</Card.Title>
                                        <p><strong>Address : </strong>{addreass}</p>
                                        <p><strong>Mobile No : </strong>{mobileNo}</p>
                                        <p><strong>Product Price : </strong>{price}</p>
                                        
                                        {/* <div className="mt-3">
                                        <Button onClick={() => {
                                           openModalDialog();
                                           setProductId(id);
                                            // handleBuyNow(id);
                                        }}>Delete </Button> 
                                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                         <Button varient="primary" onClick={() => {
                                            // navigate (`/bookupdate/${id}`);
                                            navigate (`/editproduct/${id}`);
                                            }}>Update</Button>
                                        </div> */}
                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}

                   <Modal show={showDialog} onHide={closeModalDialog}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you really want to delete Book with id {productId}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={() => {
                            handleDelete()
                        }
                        }>
                            Yes
                        </Button>
                        <Button variant="danger" onClick={closeModalDialog}>
                            NO
                        </Button>
                    </Modal.Footer>
                </Modal>

                </Row>

    </Container>
    </div>
    </>
  )
}

export default ViewOrder
