import styled from "styled-components";
//import { useState } from "react";
const RoleDice = (
    {roleDice, currentDice}
) => {
   
    // const generateRandomNumber =(min,max) =>{
    //     return Math.floor( Math.random()*(max-min)+min);
    // };
    // const roleDice=()=>{
    //     const randomNumber=generateRandomNumber(1,7);
    //     setCurrentDice((prev)=> randomNumber);
    // };
  return (
    <DiceContainer>
        <div className="dice" onClick={roleDice}>
<img src={`/images/dice/dice_${currentDice}.png`}alt="dice 1"/>
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;
const DiceContainer =styled.div`
margin-top:48px;
display:flex;
flex-direction:column;
align-items:center;
.dice{
    cursor:pointer;
}
p{
    font-size:24px;
}`;
