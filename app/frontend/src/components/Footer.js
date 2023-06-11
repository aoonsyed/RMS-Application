import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        
        <Row>
          <Col className='text-center py-3' style={{backgroundColor:"	#FFB6C1"}}>Copyright &copy; Foodles</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
