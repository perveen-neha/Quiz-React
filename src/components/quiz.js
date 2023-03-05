import '../App.css';
import React, {useState} from 'react'
import {Questions} from './questions'
import { useContext } from 'react';
import { gameStateContext } from '../helpers/contexts';

function Quiz () {
    const [currQues, setCurrQues] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const {marks, setMarks, setGameState} = useContext(gameStateContext)

    function check(option) {
        setOptionChosen(option)
        if(option === Questions[currQues].Answer ) setMarks( marks => marks+1)
        setCurrQues(currQues => currQues+1)
        if(currQues === Questions.length-1) setGameState("Finished")
    }

    return (
        <div className='Quiz'>
            <h3>{Questions[currQues].prompt}</h3>
            <button onClick={()=> {check("optionA")}}>{Questions[currQues].optionA}</button>
            <button onClick={()=> {check("optionB")}}>{Questions[currQues].optionB}</button>
            <button onClick={()=> {check("optionC")}}>{Questions[currQues].optionC}</button>
            <button onClick={()=> {check("optionD")}}>{Questions[currQues].optionD}</button>
        </div>
    )
}

export default Quiz;