import React, { useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Header } from './../components/Header';
import { NavigationBar } from '../components/NavigationBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddPro from './images/AddPro.avif'
const ProductAdd = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: '',
        description: '',
        rating: '',
        price: 0,
        productImage: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleFileChange = (e) => {
        setProduct({ ...product, productImage: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', product.title);
        formData.append('description', product.description);
        formData.append('price', product.price);
        formData.append('productUrl', product.productImage);
        formData.append('rating', product.rating);
        formData.append('supplier_id', localStorage.getItem("id"));

        try {
            await axios.post('http://localhost:8080/product/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate("/supplierproducts");
            console.log('Product added successfully');
        } catch (error) {
            console.error('Error adding product', error);
        }
    };

    return (
        <div style={{ backgroundImage: `url(${AddPro})`, backgroundSize: 'fix', minHeight: '100vh' }}>
            <NavigationBar /> <br/><br/><br/><br/><br/>
            <Container >
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <h1 className="text-center mb-4">📝Add Product📝</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label>Title:</label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={product.title}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            placeholder="Enter Product Title"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Description:</label>
                                        <input
                                            type="text"
                                            name="description"
                                            value={product.description}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            placeholder="Enter Product Description"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Price:</label>
                                        <input
                                            type="number"
                                            name="price"
                                            value={product.price}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            placeholder="Enter Product Price"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Rating:</label>
                                        <input
                                            type="text"
                                            name="rating"
                                            value={product.rating}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            placeholder="Enter Product Rating"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Product Image:</label>
                                        <input
                                            type="file"
                                            name="productImage"
                                            className="form-control"
                                            accept='image/*'
                                            onChange={handleFileChange}
                                            required
                                        />
                                    </div>
                                    <Button type="submit" variant="primary" className="w-100">
                                        Add Product
                                    </Button>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br></br>
        </div>
        
    );
}

export default ProductAdd;
