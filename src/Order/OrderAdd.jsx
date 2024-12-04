import React, { useState } from 'react';
import { NavigationBar } from '../components/NavigationBar';
import { Container, Form, Button } from 'react-bootstrap';
import { Header } from '../components/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddPro from './images/AddPro.avif';
const OrderAdd = () => {
    const navigate = useNavigate();
    const [order, setOrder] = useState({
        buyerName: '',
        address: '',
        mobileNo: '',
        price: 0,
        productImage: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrder({ ...order, [name]: value });
    };

    const handleFileChange = (e) => {
        setOrder({ ...order, productImage: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('buyerName', order.buyerName);
        formData.append('address', order.address);
        formData.append('price', order.price);
        formData.append('productUrl', order.productImage);
        formData.append('mobileNo', order.mobileNo);
        formData.append('buyerId', localStorage.getItem('id'));

        try {
            await axios.post('http://localhost:8080/order/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate('/vieworder');
            console.log('Order added successfully');
        } catch (error) {
            console.error('Error adding order', error);
        }
    };

    return (
        <>
            <NavigationBar />
            <div className="mt-5" style={{ backgroundImage: `url(${AddPro})`, backgroundSize: 'fix', minHeight: '100vh' }}>
            <Container className="form_container-fluid p-5 rounded " style={{ width: "60%", boxShadow: '8px 8px 8px 8px rgba(0, 0, 0, 0.1)' }}>

                <div className="app">
                    <div className="form-container" style={{fontWeight:"700"}} >
                        <h1 className="main-heading justify-content-center">Request Form To Investor</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBuyerName">
                                <Form.Label>Buyer Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="buyerName"
                                    value={order.buyerName}
                                    onChange={handleInputChange}
                                    placeholder="Enter Your Name"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formAddress">
                                <Form.Label>Enter Your Full Address:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    value={order.address}
                                    onChange={handleInputChange}
                                    placeholder="Enter Your Full Address"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formPrice">
                                <Form.Label>Product Price:</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="price"
                                    value={order.price}
                                    onChange={handleInputChange}
                                    placeholder="Enter Product Price"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formMobileNo">
                                <Form.Label>Mobile number:</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="mobileNo"
                                    value={order.mobileNo}
                                    onChange={handleInputChange}
                                    placeholder="Enter Mobile number"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formProductImage">
                                <Form.Label>Salary Slip:</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="productImage"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    required
                                />
                            </Form.Group>
                            <Button type="submit">Submit the Form for Request</Button>
                        </Form>
                    </div>
                </div>
            </Container>
            </div>
        </>
    );
};

export default OrderAdd;
