import {Container,CardDeck} from "react-bootstrap";
import React from 'react';
import './questions.scss';
import NavBars from "../nav/nav.js";
import Cards from "../card/card.js";
import Game from "../game/game.js";

function Question(props) {
let count = props.count;
    return (
    <Container fluid>
     <NavBars/>
     <Game question={props.responses} count={count}/>
         <CardDeck>
             <Cards answer={props.responses} count={count} handleChange={props.handleChange}/>
        </CardDeck>
  </Container>
    );
  }
  
export default Question;