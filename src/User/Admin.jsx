import React from 'react'
import { Container } from 'react-bootstrap';
import { Header } from './../components/Header';
import { NavigationBar } from '../components/NavigationBar';

function Admin() {
  return (
    <> 
   <NavigationBar/>
   <Container>
    <Header text="Welcome to Admin Dashboard">

    </Header>
   </Container>
   </>
  )
}

export default Admin
