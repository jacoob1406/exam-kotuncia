import React from 'react';
import './DrawQuestion.css';

const DrawQuestion = ({ title, index, onClick, question, onCorrect, onIncorrect, isDone }) => (
    <section className='container'>
        <h1>{title}</h1>
        <button onClick={onClick} className="button" disabled={isDone}>Losuj pytanie</button>
        {question && <p>PYTANIE {index} : {question} </p>}
        {question && 
        <div className="buttons">
            <button className="correntBtn" onClick={onCorrect} disabled={isDone}>V</button>
            <button className="incorrentBtn" onClick={onIncorrect} disabled={isDone}>X</button>
        </div>}
    </section>
)

export default DrawQuestion;