// import React, { useEffect, useState } from 'react'
// import { NavigationBar } from '../components/NavigationBar'
// import { Header } from '../components/Header'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Button, Card, Col, Container, Row } from 'react-bootstrap';
// import img1 from './images/img1.jpg';
// const ViewProductsIn = () => {

//     const [myData, setMyData] = useState([]);
//     const [isError, setIsError] = useState("");
//     const navigate = useNavigate();
 
//     // const[id,setId]= useState();

//     // using Promises
//     useEffect(() => {
//         axios
//             .get("http://localhost:8080/product/viewallproducts")
//             .then((response) => setMyData(response.data))
//             .catch((error) => setIsError(error.message));
//     }, []);

//     const handleBuyNow = (id) => {
      
//         // Add logic here to perform any actions before redirection if needed
//         // For example, you can send an API request to initiate the purchase

//         // Redirect to the "buynow" route with the appropriate parameter
//        // navigate(`/homepage/buynow/${id}`);
//         navigate("/addorder");
//     };

//   return (
//     <>
//     <NavigationBar/>
//     {isError !== "" && <h2>{isError}</h2>}
//     <div style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', minHeight: '100vh' }}>
//      <Container>
//      <Row className="justify-content-md-center">
//                         {myData.map((post) => {
//                             const { id, title, description, rating,price } = post;
//                             return (
//                                 <Col key={id} lg={3}>
//                                     <Card className="mt-5">
//                                         <Card.Img variant="top" src={`http://localhost:8080/product/productImage/${id}`} />
                                        
//                                         <Card.Body className="text-center">
//                                             <Card.Title><strong>Title : </strong>{title}</Card.Title>
//                                             <p><strong>Description : </strong>{description}</p>
//                                             <p><strong>Rating : </strong>{rating}</p>
//                                             <p><strong>Price : </strong>{price}</p>
                                            
                                            
//                                             {/* <Button onClick={() => {
                                               
//                                                 handleBuyNow(id);
//                                             }}>Buy Now</Button>
//                                            */}
                                            
//                                         </Card.Body>
//                                     </Card>
//                                 </Col>
//                             );
//                         })}
//                     </Row>
//      </Container>
//      </div>
//        </>
//       )
// }

// export default ViewProductsIn
