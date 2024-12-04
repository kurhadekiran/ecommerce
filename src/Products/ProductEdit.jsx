import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { NavigationBar } from '../components/NavigationBar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const ProductEdit = () => {

  const params = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "", 
    description:"",
    rating: "", 
    price:0,
 });

  const [isUpdated, setIsUpdated] = useState(false);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('id', product.id);
      formData.append('title', product.title);
      formData.append('description',product.description);
      formData.append('price', product.price);
      formData.append('rating', product.rating);
      formData.append('supplier_id',localStorage.getItem("id"));

      try {
          const result = await axios.put('http://localhost:8080/product/update',formData);
          setIsUpdated(true);
          navigate("/supplierproducts");
          console.log(result);

      } catch (error) {
          console.log(error)
      }
  }
  const populateBookState = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/product/${params.id}`);
        // console.log(result);
        setProduct(result.data);
        
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
  populateBookState();
  console.log("data fetched..");
}, []);



  return (
    <>
  <NavigationBar/>
   <Container>
    <Header text="Welcome To Edit Page"></Header>
         
    <Row>
                    {product.id == params.id
                        ?
                        <Form onSubmit={handleSubmit} className="formContainer">

                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Product Id </Form.Label>
                                    <Form.Control type="number" value={product.id} name="id" readOnly />
                                </Form.Group>
                            </Col>

                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Product Title</Form.Label>
                                    <Form.Control type="text" value={product.title} name="title" onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" value={product.description}  name="description" onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Rating</Form.Label>
                                    <Form.Control type="text" value={product.rating}  name="rating" onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Price:</Form.Label>
                                    <Form.Control type="number" value={product.price}  name="price" onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            
                            {/* <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Your Id</Form.Label>
                                    <Form.Control type="text" value={formData.supplier_id}  name="supplier_id" onChange={handleChange} />
                                </Form.Group>
                            </Col> */}


                            <Col md={{ span: 6, offset: 3 }}>
                                <Button variant="primary" type="submit" >Update</Button>
                            </Col>
                        </Form> : <Alert variant="danger">Product not found for given Id ....</Alert>
}
                </Row>
                <Row className="mt-3">
                    <Col lg={3}>{
                        isUpdated ? <Alert variant="success"> Case Updated..</Alert> : null
                    }
                    </Col>
                </Row>
   </Container>
   </> 
  )
}

export default ProductEdit
