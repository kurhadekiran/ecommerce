import React, { useEffect, useState } from 'react'
import { Alert, Button, Col, Container, Form, Modal, Row, Table } from 'react-bootstrap'
import { Header } from '../components/Header'
import { NavigationBar } from '../components/NavigationBar'
import { RedirectIfLoggedIn } from '../components/RedirectIfLoggedIn'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import AddProductImg2 from './images/AddProductImg2.avif'
function Supplier() {

  const [showDialog, setShowDialog] = useState(false);

  const[productId,setProductId] =useState("");

  const navigate = useNavigate();

  const openModalDialog = () => {
      setShowDialog(true);
  }
  const closeModalDialog = () => {
      setShowDialog(false);
  }

  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // using Promises
  useEffect(() => {
      populateProductState();
  }, []);


  async function populateProductState() {
      try {
        const supplier_id=localStorage.getItem("id");
          axios
          // .get("http://localhost:8080/book")
          .get(`http://localhost:8080/product/supplier/${supplier_id}`)
          .then((response) => setMyData(response.data))
          .catch((error) => setIsError(error.message));
      } catch (error) {
          console.log(error);
      }
  }

  const handleDelete = async () => {
      try {
              await axios
              // .delete(`http://localhost:8080/book/${selectedId}`)   
              .delete(`http://localhost:8080/product/delete/${productId}`)             
              populateProductState();
              closeModalDialog();
      } catch (error) {
          console.log(error);
      }
  }

  useEffect(() => {
    populateProductState();
  }, []);
  return (
    <>
     <div style={{ backgroundImage: `url(${AddProductImg2})`, backgroundSize: 'cover', minHeight: '100vh' }}>
    <NavigationBar/>
    <Container>
        {/* <Header text="Welcome to Supplier DashBoard">
         
        </Header>
        <Row> */}
        <br />
                <br />
                <Button size="lg" varient="primary" onClick={() => {
                    navigate(`/addproduct`);
                }}>Add Product</Button>
                
                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button size="lg" varient="primary" onClick={() => {
                    navigate('/');
                }}>Purchase History</Button> */}
                <br />
                <br />
                <h1>List of Products.....</h1>
                {
                    <Table className="mt-4" border={1}>
                        <thead>
                            <tr>
                                <th>Product Id</th>
                                <th>Product Title</th>
                                <th></th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myData.map((post) => {
                                const { id, title, description, rating,price} = post;
                                return (
                                    <tr>
                                        <td>{id}</td>
                                        <td>{title}</td>
                                        <td>{description}</td>
                                        <td>{rating}</td>
                                        <td>{price}</td>
                                        <td>
                                            <Button variant="danger" onClick={() => {
                                                openModalDialog();
                                                setProductId(id);
                                                
                                            }}>Delete</Button>&nbsp;&nbsp;&nbsp;
                                            <Button varient="primary" onClick={() => {
                                            navigate (`/editproduct/${id}`);
                                            }}>Update</Button>
                                        </td>
                                    </tr>
                                );
                            })}



                        </tbody>
                    </Table>

                }
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


                {/* </Row> */}
    </Container>
    </div>
    </>
  )
}

export default Supplier
