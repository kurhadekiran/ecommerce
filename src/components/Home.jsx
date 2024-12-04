import { CardGroup, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from './ExampleCarouselImage/ExampleCarouselImage.png'
// import ExampleCarouselImage2 from './ExampleCarouselImage/ExampleCarouselImage2.jpg'
// import ExampleCarouselImage3 from './ExampleCarouselImage/ExampleCarouselImage3.jpg'
import slider from './slider.jpeg'
import slider2 from './slider2.avif'
import slider3 from './slider3.avif'
import Investment from './images/Investment.jpg'
import Supply from './images/Supply.jpg'
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import Buying from './images/Buying.jpg';
import { NavigationBar } from "./NavigationBar";
export function Home() 
  {
    const Navigate=useNavigate();
    const handleButton=()=>{
      Navigate('/SignUp');
      }

    return (
        <>
         <NavigationBar/>
         {/* <Header text="Welcome to Canopy Finance" />  */}
         <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            style={{ height: "85vh" }}
            className="d-block w-100"
            src={slider}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5 style={{ color: "wheat" }}>Canopy Finance..</h5>
            <p style={{ color: "wheat" }}>"It's not organisations that are competing. It's the Supply Chains that are competing."</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "85vh" }}
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5 style={{ color: "black" }}>Environment</h5>
            <p style={{ color: "black" }}>"Supply chain is like nature it is all around us."</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "85vh" }}
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 style={{ color: "wheat" }}>Use of Authentic Parts</h5>
            <p style={{ color: "wheat" }}>
            "Supply chain finance is not just a function, it's a competitive advantage"
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Card style={{display:'flex' , textAlign:'center'}}>
      <Card.Header as="h5">"💶 📈 Canopy finance is an online finance service in India💰💸"</Card.Header>
      <Card.Body>
        <Card.Title>Special treatment for your request..</Card.Title>
        <Card.Text>
        Easy application process and immediate loan decisions.       
         </Card.Text>
        <Button variant="outline-primary" href="/aboutus">About Us..</Button>{' '}
      </Card.Body>
    </Card>


    <CardGroup>
      <Card>
        <Card.Img variant="top" src={Buying} style={{height:'35vh' }}/>
        <Card.Body>
          <Card.Title>SUPPLY🚚</Card.Title>
          <Card.Text>
          Suppliers manage orders, inventory, and extend credit terms to buyers. Through finance tools, they optimize cash flow, reduce costs, and enhance liquidity. Engaging in supply chain finance strengthens buyer relationships and boosts overall efficiency and resilience.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Link to="/SignIn">
        <Button variant="outline-primary">SUPPLY</Button>
        </Link>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= {Investment} style={{height:'35vh' }} />
        <Card.Body>
          <Card.Title> BUYING🤝</Card.Title>
          <Card.Text>
          Buyers in supply chain finance purchase goods/services, negotiate terms, and use finance solutions to optimize cash flow and strengthen supplier ties. Engaging in finance initiatives streamlines transactions, enhances capital management, and fosters collaboration.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Link to="/SignIn">
        <Button variant="outline-primary">BUY</Button>{' '}
        </Link>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Supply} style={{height:'35vh' }} />
        <Card.Body>
          <Card.Title>INVEST📈</Card.Title>
          <Card.Text>
          Investors provide capital to fund transactions within the supply chain network, aiming to earn returns while facilitating smoother operations, optimizing working capital, and mitigating risks.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Link to="/SignIn">
        <Button variant="outline-primary">INVEST</Button>
        </Link>
        </Card.Footer>
      </Card>
    </CardGroup>

   {/* <h4 style={{textAlign: 'center'}}>Our Services</h4>
   <br></br>
    <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Buying} />
        <Card.Body>
          <Card.Title>Buying</Card.Title>
          <Card.Text>
          Buyers in supply chain finance purchase goods/services, negotiate terms, and use finance solutions to optimize cash flow and strengthen supplier ties. Engaging in finance initiatives streamlines transactions, enhances capital management, and fosters collaboration.
          </Card.Text>
          <Link to="/SignIn">
          <Button variant="primary">Buy</Button>
          </Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Supply} />
        <Card.Body>
          <Card.Title>Supply</Card.Title>
          <Card.Text>
          Suppliers manage orders, inventory, and extend credit terms to buyers. Through finance tools, they optimize cash flow, reduce costs, and enhance liquidity. Engaging in supply chain finance strengthens buyer relationships and boosts overall efficiency and resilience.
          </Card.Text>
          <Link to="/SignIn">
          <Button variant="primary">Supply</Button>
          </Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Investment} />
        <Card.Body>
          <Card.Title>Investment</Card.Title>
          <Card.Text>
          Investors provide capital to fund transactions within the supply chain network, aiming to earn returns while facilitating smoother operations, optimizing working capital, and mitigating risks.
          </Card.Text>
          <br></br>
          <br></br>
          <br></br>
          <Link to="/SignIn">
          <Button variant="primary">Invest</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
    <br></br> */}
        </>

    );
}