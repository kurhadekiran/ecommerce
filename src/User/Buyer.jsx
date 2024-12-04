import React from 'react'
import { Container } from 'react-bootstrap';
import { Header } from './../components/Header';
import { NavigationBar } from '../components/NavigationBar';

function Buyer() {
  return (
    <>
    <NavigationBar/>
   <Container>
    <Header text="Welcome to Buyer Dashboard"></Header>
   </Container>
   </>
  )
}

export default Buyer
