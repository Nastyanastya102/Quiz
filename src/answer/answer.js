import {Button} from "react-bootstrap";
import React from 'react';

function Answer(props) {
    return (
    <>
<Button as="input" type="reset" defaultValue="Show Answers" onClick={props.showAnswers} />
  </>
    );
  }
  
export default Answer