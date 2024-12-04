import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/TokenUtil";
import { getUser, isAuthenticated } from './../utils/TokenUtil';


export function NavigationBar() {

    const userRole = getUser();

    const navigate=useNavigate();

    const handleLogoutClick=()=>{
        logout();
        navigate("/");
    }
    return (
    
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">

                        {/* <LinkContainer to="/">
                            <Nav.Link>Dashboard</Nav.Link>
                        </LinkContainer> */}
                         { (userRole === "ADMIN" || userRole === "INVESTOR" || userRole === "BUYER" || userRole === "SUPPLIER") && (
                        <LinkContainer to="/viewalltransaction">

                        <Nav.Link>View All Transaction</Nav.Link>

                        </LinkContainer>

                         )}
{/*                         
                        {userRole === "ADMIN" && (
                        <LinkContainer to="/admin">
                            <Nav.Link>Admin Dashboard</Nav.Link>
                        </LinkContainer>
                        )} */}
                        

                        {userRole === "SUPPLIER" && (
                        <LinkContainer to="/supplier">
                            <Nav.Link>Supplier Dashboard</Nav.Link>
                        </LinkContainer>
                        )}
                         
                         
                         
                        

                       {/* <LinkContainer to="/addaddress">
                            <Nav.Link>Address</Nav.Link>
                        </LinkContainer> */}


                       {userRole === "SUPPLIER" && (
                        <LinkContainer to="/addproduct">
                            <Nav.Link>Add Products</Nav.Link>
                        </LinkContainer>
                       )}
                       
                       

                      {userRole === "SUPPLIER" && (
                       <LinkContainer to="/supplierproducts">
                            <Nav.Link>Products List</Nav.Link>
                        </LinkContainer>
                        )
                      }
                          {userRole === "BUYER" && "INVESTOR " &&(
                        <LinkContainer to="/viewallproduct">
                            <Nav.Link>All Products</Nav.Link>
                        </LinkContainer>
                          )
                           } 


                           {userRole === "BUYER" && (
                        <LinkContainer to="/addorder">
                            <Nav.Link>Request Form</Nav.Link>
                        </LinkContainer>
                           )}


                        {userRole === "BUYER" && (
                        <LinkContainer to="/vieworder">
                            <Nav.Link>Request List</Nav.Link>
                        </LinkContainer>
                        )}

                         {userRole === "BUYER" && (
                        <LinkContainer to="/email">
                            <Nav.Link>Connect To Investor</Nav.Link>
                        </LinkContainer>
                        )}

                         
                        {userRole === "INVESTOR" && (
                        <LinkContainer to="/viewallorder">
                            <Nav.Link>View All Request List</Nav.Link>
                        </LinkContainer>
                        )}

                        {userRole === "INVESTOR" && (
                        <LinkContainer to="/addtransaction">

                        <Nav.Link>Transaction</Nav.Link>
                        </LinkContainer>
                        )}
                   
                       {userRole === "INVESTOR" && (
                        <LinkContainer to="/viewtransaction">
                        <Nav.Link>View Transaction</Nav.Link>
                        </LinkContainer> ) }

                        {userRole === "INVESTOR" && (
                        <LinkContainer to="/payment">
                        <Nav.Link>Payment</Nav.Link>
                        </LinkContainer> ) }
                        
                       
                         
                        {/* <LinkContainer to="/addfeedback">

                        <Nav.Link>FeedBack</Nav.Link>
                        </LinkContainer> */}


                  
                

{/*                   
                        <LinkContainer to="/addfeedback">
                        {["SUPPLIER", "BUYER", "INVESTOR"].includes(userRole) && ( 

                        <Nav.Link>FeedBack</Nav.Link>
                        )}
                        </LinkContainer> */}
                  
                 


                        {/* <LinkContainer to="/editfeedback">
                          {["SUPPLIER", "BUYER", "INVESTOR"].includes(userRole) && (
                                <Nav.Link>FeedBack</Nav.Link>
                     )}
                        <Nav.Link>FeedBack</Nav.Link>
                        </LinkContainer> */}

                        {/* {userRole === "ADMIN" && (
                        <LinkContainer to="/viewfeedback">
                        <Nav.Link>FeedBacks</Nav.Link>
                        </LinkContainer>
                        )}
                   */}

                        <LinkContainer to="/aboutus">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contactus">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                        
   
                 {!isAuthenticated() && (       
                    <>
                        

                        <LinkContainer to="/signin">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    </>
                      )}

   
                       {/* <LinkContainer to="/buyer">
                            <Nav.Link>Buyer Dashboard</Nav.Link>
                        </LinkContainer>
                          */}

                        {/* <LinkContainer to="/dashboard">
                            <Nav.Link>Dashboard</Nav.Link>
                        </LinkContainer> */}

                    </Nav>
                    {isAuthenticated()  &&  <Button variant="primary" size="sm" onClick={handleLogoutClick}>Logout</Button> }  
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
}