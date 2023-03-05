import React, {useContext} from 'react';
import '../App.css';
import { gameStateContext } from '../helpers/contexts';


function Finished () {
    const {marks,userName, setGameState} = useContext(gameStateContext)
    function reset() {
        setGameState("menu")
    }
    return <div className='Finished'>
        <h1>Scores</h1>
        <h3>Congratulations {userName}</h3>
        <h3>You Scored {marks}</h3>
        <button onClick={reset}>Reset Quiz</button>
    </div>
}

export default Finished
