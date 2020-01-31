import { Navbar,Nav,Button,FormControl,Form} from "react-bootstrap";
import React from 'react';
import './nav.scss';

function NavBars(props) {
    return (
    <>
  <Navbar bg="dark" variant="dark" style={{flexFlow: 'row wrap'}}>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2"  />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    </>
    );
  }
  
export default NavBars;