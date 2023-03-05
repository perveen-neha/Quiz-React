import React, { useState } from 'react'
import './App.css';
import Menu from './components/menu';
import { gameStateContext } from './helpers/contexts';
import Quiz from './components/quiz';
import Finished from './components/Finished';


function App() {
  const [gameState, setGameState] = useState("menu")
  const [userName, setUserName] = useState("")
  const [marks, setMarks] = useState(0)

  return (
    <div className="App">
      <gameStateContext.Provider value={{gameState, setGameState, setUserName, userName, marks, setMarks}}>
      <h1>Quiz App</h1>
      {gameState === "menu" && <Menu/>}
      {gameState === "playing" && <Quiz/>}
      {gameState === "Finished" && <Finished/>}
      </gameStateContext.Provider>
      
    </div>
  );
}

export default App;
