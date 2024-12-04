import React from 'react'
import { NavigationBar } from '../components/NavigationBar'
import { Container } from 'react-bootstrap';
import { Header } from './../components/Header';

const FeedbackList = () => {
  return (
    <>
    <NavigationBar/>
   <Container>
    <Header text="Welcome to Feedback Form List"></Header>
   </Container>
   </>
  )
}

export default FeedbackList
