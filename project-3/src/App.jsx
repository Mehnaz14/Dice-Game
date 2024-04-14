
// import styled  from "styled-components";
// const Button =styled.button`
// background-color:black;
// color:white;
import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

// padding:10px;`;
function App(){
  const [isGameStarted ,setIsGameStarted]= useState(false);
  const toggleGamePlay =()=>{
    setIsGameStarted((prev)=>!prev);
  };

  return (
    <>
    {
      isGameStarted ? <GamePlay/>: <StartGame toggle={toggleGamePlay}/>
    }
      {/* <Button>This is styled component button</Button>   */}
    </>
  );
}

export default App;
// const Button =styled.button`
// background-color:black;
// color:white;
// padding:10px;`;
