
import React, {useContext} from 'react'
import '../App.css'
import {gameStateContext} from '../helpers/contexts'

function Menu() {
    const {gameState, setGameState, userName, setUserName} = useContext(gameStateContext)
  return (
    <div className='menu'>
        <label>Enter your name:</label>
        <input type="text" placeholder='ex. Neha Mohammad' onChange={(event) => {setUserName(event.target.value)}} required></input>
        <button onClick={() => setGameState("playing")}>Start Quiz</button>
    </div>
  )
}

export default Menu