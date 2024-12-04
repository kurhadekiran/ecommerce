import React from 'react'
import { Container } from 'react-bootstrap'
import { Header } from '../components/Header'
import { NavigationBar } from '../components/NavigationBar'

const ProductList = () => {
  return (
    <>
    <NavigationBar/>
   <Container>

    <Header text="Welcome to  Product List"></Header>
    
   </Container>
   </>

  )
}

export default ProductList
