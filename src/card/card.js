import {Card} from "react-bootstrap";
import React from 'react';
import './card.scss';

function Cards(props) {
let count = props.count;
    let item = props.answer.map(item => item);
   let q = item[count].responses.map(number => 
    <Card key={number.key} bg="dark" text="white" className="cards rgba-red-strong" onClick={() => props.handleChange(number, item[count])} >
        <Card.Header>Question</Card.Header>
        <Card.Body>
        <Card.Text  >
       {number.text}
         </Card.Text>
        </Card.Body>
    </Card>     
  )
    return (
    <>
 {q}
  </>
    );
  }
  
export default Cards;