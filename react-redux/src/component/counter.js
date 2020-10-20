import React, { Component } from 'react';
import styled from "styled-components";
const MainDiv=styled.div`
justify-content:center;
text-align:center;
`;
const Button = styled.div`
background-color:#35503f;
margin:2%;
cursor:pointer;
`;
const CounterDiv = styled.div`
color:#35503f;
`;
class Counter extends Component {
   render() {
      const {counter,increment,decrement,reset} = this.props;
      return (
         <MainDiv>
            <CounterDiv>{counter}</CounterDiv>
            <div>
               <Button onClick = {increment}>INCREMENT BY 1</Button>
            </div>
            <div>
               <Button onClick = {decrement}>DECREMENT BY 1</Button>
            </div>
            <button onClick = {reset}>RESET</button>
         </MainDiv>
      );
   }
}
export default Counter;