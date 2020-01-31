import {Jumbotron,Container,Button} from "react-bootstrap";
import React from 'react';
import NavBars from "../nav/nav.js";
import Answer from "../answer/answer.js";


function Result(props) {
    return (
    <>
     <NavBars/>
 <Jumbotron fluid  style={{ margin:' 2% '}}>
  <Container>
    <p>
    You are Done!! Your result is :  {props.result} of {props.length} 
    </p>
    <Answer/>
  </Container>
</Jumbotron>
<Button as="input" type="reset" defaultValue="Reset" onClick={props.resetClick} />
  </>
    );
  }
  
export default Result;