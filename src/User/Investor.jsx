import React from 'react'
import { Container } from 'react-bootstrap'
import { Header } from '../components/Header';
import { NavigationBar } from '../components/NavigationBar';

function Investor() {
  return (
    <>
    <NavigationBar/>
   <Container>
    <Header text="Welcome to Investor Dashboard"></Header>
   </Container>
   </>
  )
}

export default Investor
