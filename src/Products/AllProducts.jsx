import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { NavigationBar } from '../components/NavigationBar';
import img1 from './images/img1.jpg';

const placeholderImageUrl = '/logo192.png';
const AllProducts = () => {

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
      
       const supplier_id=localStorage.getItem("id");
        if(supplier_id){
            axios
            .get(`http://localhost:8080/product/supplier/${supplier_id}`)
            .then((response) => setMyData(response.data))
            .catch((error) => setIsError(error.message));
        }
        else{
            setIsError("Supplier id is not found in localStorage");
        }

        
    }, []);

    const handleDelete = async() => {
        
        try {  
       await axios
       .delete(`http://localhost:8080/product/delete/${productId}`)
        closeModalDialog();

       
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
               <div style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', minHeight: '100vh' }}>

<NavigationBar/>
{isError !== "" && <h2>{isError}</h2>}
 <Container>
 <Header text="Welcome to All Products Section"></Header>
 <Row className="justify-content-md-center">
                    {myData.map((post) => {
                        const { id, title, description, rating,price } = post;
                        return (
                            <Col key={id} lg={3}>
                                <Card className="mt-5">
                                    <Card.Img variant="top" src={`http://localhost:8080/product/productImage/${id}`} onError={(e) => { e.target.src = placeholderImageUrl }} />
                                    
                                    <Card.Body className="text-center">
                                        <Card.Title><strong>Title : </strong>{title}</Card.Title>
                                        <p><strong>Description : </strong>{description}</p>
                                        <p><strong>Rating : </strong>{rating}</p>
                                        <p><strong>Price : </strong>{price}</p>
                                        
                                        {/* <div className="mt-3">
                                        &nbsp;&nbsp;&nbsp;&nbsp;     <Button onClick={() => {
                                           openModalDialog();
                                           setProductId(id);
                                            // handleBuyNow(id);
                                        }}>Delete </Button> 
                                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
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
                    <Modal.Body>Do you really want to delete Product with id {productId}</Modal.Body>
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

export default AllProducts
