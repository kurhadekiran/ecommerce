import React, { useState } from 'react';
import { NavigationBar } from './../components/NavigationBar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Header } from '../components/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddProductImg2 from './images/AddProductImg2.avif';
const TransactionAdd = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        buyerName: '',
        investorName: '',
        productName: '',
        amount: 0,
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
        formData.append('buyerName', product.buyerName);
        formData.append('productName', product.productName);
        formData.append('amount', product.amount);
        formData.append('productUrl', product.productImage);
        formData.append('investorName', product.investorName);
        formData.append('investorId', localStorage.getItem("id"));

        try {
            await axios.post('http://localhost:8080/transaction/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate("/payment");
            console.log('Transaction added successfully');

        } catch (error) {
            console.error('Error adding product', error);
        }
    };

    return (
        <>
            <NavigationBar />
            <div style={{ backgroundImage: `url(${AddProductImg2})`, backgroundSize: 'cover', minHeight: '100vh' }}>
            <Container>
                <Header text="Welcome to Transaction Page" />
                <Row className="justify-content-center">
                    <Col md={6}>
                        <div className="form-container">
                            <h1 className="main-heading">Add Transaction</h1>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBuyerName">
                                    <Form.Label>Buyer Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="buyerName"
                                        value={product.buyerName}
                                        onChange={handleInputChange}
                                        placeholder="Enter Buyer Name"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formProductName">
                                    <Form.Label>Product Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="productName"
                                        value={product.productName}
                                        onChange={handleInputChange}
                                        placeholder="Enter Product Name"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formAmount">
                                    <Form.Label>Amount:</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="amount"
                                        value={product.amount}
                                        onChange={handleInputChange}
                                        placeholder="Enter Product Amount"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formInvestorName">
                                    <Form.Label>Investor Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="investorName"
                                        value={product.investorName}
                                        onChange={handleInputChange}
                                        placeholder="Enter Investor Name"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formProductImage">
                                    <Form.Label>Receipt Photo:</Form.Label>
                                    <Form.Control
                                        type="file"
                                        name="productImage"
                                        accept='image/*'
                                        onChange={handleFileChange}
                                        required
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                   Approve 
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    );
}

export default TransactionAdd;
