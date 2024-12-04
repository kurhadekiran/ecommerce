import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, Col,  Modal, Row } from 'react-bootstrap';
import { NavigationBar } from '../components/NavigationBar';
import { Header } from '../components/Header';
import img1 from './images/img1.jpg';
const placeholderImageUrl = '/logo192.png';

const ViewTransaction = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    const[investorId,setInvestorId] =useState("");

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
      
       const investorId=localStorage.getItem("id");
        if(investorId){
            axios                             ///buyer/{buyerId}"
            .get(`http://localhost:8080/transaction/investor/${investorId}`)
            .then((response) => setMyData(response.data))
            .catch((error) => setIsError(error.message));
        }
        else{
            setIsError("Investor id is not found in localStorage");
        }

        
    }, []);

    const handleDelete = async() => {
        
        try {  
       await axios                    ///delete/{orderId}
       .delete(`http://localhost:8080/order/delete/${investorId}`)
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
    <div style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', minHeight: '100vh' }}>
    <Container>
   
       <Row className="justify-content-md-center">
                    {myData.map((post) => {
                        const { id, buyerName, productName, amount,investorName } = post;
                        return (
                            <Col key={id} lg={3}>
                                <Card className="mt-5">                                          
                                    <Card.Img variant="top" src={`http://localhost:8080/transaction/productImage/${id}`} onError={(e) => { e.target.src = placeholderImageUrl }} />
                                    
                                    <Card.Body className="text-center">
                                        <Card.Title><strong>Buyer Name : </strong>{buyerName}</Card.Title>
                                        <p><strong>Product Name : </strong>{productName}</p>
                                        <p><strong>Investor Name : </strong>{investorName}</p>
                                        <p><strong>Sanction Amount : </strong>{amount}</p>
                                        
                                        {/* <div className="mt-3">
                                        <Button onClick={() => {
                                           openModalDialog();
                                           setInvestorId(id);
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
                    <Modal.Body>Do you really want to delete Book with id {investorId}</Modal.Body>
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

export default ViewTransaction
