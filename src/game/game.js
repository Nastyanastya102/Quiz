import {Jumbotron,Container} from "react-bootstrap";
import React from 'react';

function Game(props) {
    let count = props.count;
    let question = props.question.map(quest => quest);
    return (
    <>
 <Jumbotron fluid  style={{ marginTop:' 2% '}} >
  <Container>
    <h1>Сhoose the right answer</h1>
    <p>
    {question[count].text}
    </p>
  </Container>
</Jumbotron>
  </>
    );
  }
  
export default Game;