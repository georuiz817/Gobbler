import React from 'react'
import homeLogo from "../photos/large-logo.png";
import {Container, Row} from 'react-bootstrap';

const LogoComp = () => {
    return (
      <Container className='logo-container'>
        <Row>
          <img  id="gobblerHeader"  width='40%' height='40%' src={homeLogo} alt="n/a" />
          <hr className="borderh1"></hr>
        </Row>
      </Container>
    )
  }

export default LogoComp   
   
