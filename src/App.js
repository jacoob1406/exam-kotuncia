import React, { useState } from 'react';
import './App.css';
import DrawQuestion from './components/DrawQuestion/DrawQuestion';
import { architektura } from './questions/architektura';
import { historiaArchitektury } from './questions/historiaArchitektury';
import { technika } from './questions/technika';
import { urbanistyka } from './questions/urbanistyka';

function App() {
  const [firstIndex, setFirstQuestion] = useState(null);
  const [secondIndex, setSecondQuestion] = useState(null);
  const [thirdIndex, setThirdQuestion] = useState(null);
  const [fourthIndex, setFourthQuestion] = useState(null);
  const [isFirstCorrect, setFirstCorrect] = useState(null);
  const [isSecondCorrect, setSecondCorrect] = useState(null);
  const [isThirdCorrect, setThirdCorrect] = useState(null);
  const [isFourthCorrect, setFourthCorrect] = useState(null);
  const [neverFirst, setNeverFirst] = useState(Array.from(Array(35), (_, i) => i + 1));
  const [neverSecond, setNeverSecond] = useState(Array.from(Array(32), (_, i) => i + 1));
  const [neverThird, setNeverThird] = useState(Array.from(Array(25), (_, i) => i + 1));
  const [neverFourth, setNeverFourth] = useState(Array.from(Array(30), (_, i) => i + 1));


  const resetApp = () => {
    setFirstQuestion(null);
    setSecondQuestion(null);
    setThirdQuestion(null);
    setFourthQuestion(null);
    setFirstCorrect(null);
    setSecondCorrect(null);
    setThirdCorrect(null);
    setFourthCorrect(null);
  }

  const drawFirstQuestion = () => {
    const index = Math.floor(Math.random() * (36 - 1) + 1);
    setFirstQuestion(index);
    setNeverFirst(neverFirst.filter(num => num !== index))
  }

  const drawSecondQuestion = () => {
    const index = Math.floor(Math.random() * (33 - 1) + 1);
    setSecondQuestion(index);
    setNeverSecond(neverSecond.filter(num => num !== index))
  }

  const drawThirdQuestion = () => {
    const index = Math.floor(Math.random() * (26 - 1) + 1);
    setThirdQuestion(index);
    setNeverThird(neverThird.filter(num => num !== index))
  }

  const drawFourthQuestion = () => {
    const index = Math.floor(Math.random() * (30 - 1) + 1);
    setFourthQuestion(index);
    setNeverFourth(neverFourth.filter(num => num !== index))
  }

  const isExamDone = () => {
    if ((isFirstCorrect === 0 || isFirstCorrect === 1) &&
      (isSecondCorrect === 0 || isSecondCorrect === 1) &&
      (isThirdCorrect === 0 || isThirdCorrect === 1) &&
      (isFourthCorrect === 0 || isFourthCorrect === 1)) {
      return true;
    } return false;
  }

  return (
    <div className="appContainer">
      <header className="appHeader">
        Egzamin Kotunci
      </header>
      <div className="notAnswered">
        <h2>
          <p><div>Architektura:</div><div>{neverFirst.join(', ')}</div></p>
          <p><div>Historia arch. i szt.:</div><div>{neverSecond.join(', ')}</div></p>
          <p><div>Technika:</div><div>{neverThird.join(', ')}</div></p>
          <p><div>Urbanistyka:</div><div>{neverFourth.join(', ')}</div></p>
        </h2>
      </div>
      <div className="contentContainer">
        <DrawQuestion
          title="Architektura"
          index={firstIndex}
          question={architektura[firstIndex] || null}
          onClick={drawFirstQuestion}
          onCorrect={() => setFirstCorrect(1)}
          onIncorrect={() => setFirstCorrect(0)}
          isDone={isFirstCorrect === 1 | isFirstCorrect === 0}
        />
        <DrawQuestion
          title="Historia architektury i sztuki"
          index={secondIndex}
          question={historiaArchitektury[secondIndex] || null}
          onClick={drawSecondQuestion}
          onCorrect={() => setSecondCorrect(1)}
          onIncorrect={() => setSecondCorrect(0)}
          isDone={isSecondCorrect === 1 | isSecondCorrect === 0}
        />
        <DrawQuestion
          title="Technika"
          index={thirdIndex}
          question={technika[thirdIndex] || null}
          onClick={drawThirdQuestion}
          onCorrect={() => setThirdCorrect(1)}
          onIncorrect={() => setThirdCorrect(0)}
          isDone={isThirdCorrect === 1 | isThirdCorrect === 0}
        />
        <DrawQuestion
          title="Urbanistyka"
          index={fourthIndex}
          question={urbanistyka[fourthIndex] || null}
          onClick={drawFourthQuestion}
          onCorrect={() => setFourthCorrect(1)}
          onIncorrect={() => setFourthCorrect(0)}
          isDone={isFourthCorrect === 1 | isFourthCorrect === 0}
        />
      </div>
      {isExamDone() && <div className="score">
        <p>WYNIK: {isFirstCorrect + isSecondCorrect + isThirdCorrect + isFourthCorrect}/4</p>
        {!isFirstCorrect && <p className="repeat">Powtórz pytanie nr {firstIndex} z kategorii Architektura: {architektura[firstIndex]}</p>}
        {!isSecondCorrect && <p className="repeat">Powtórz pytanie nr {secondIndex} z kategorii Historia architektury i sztuki: {historiaArchitektury[secondIndex]}</p>}
        {!isThirdCorrect && <p className="repeat">Powtórz pytanie nr {thirdIndex} z kategorii Technika: {technika[thirdIndex]}</p>}
        {!isFourthCorrect && <p className="repeat">Powtórz pytanie nr {fourthIndex} z kategorii Urbanistyka: {urbanistyka[fourthIndex]}</p>}
        {isFirstCorrect + isSecondCorrect + isThirdCorrect + isFourthCorrect === 4 && <p className="grats">GRATULACJE KOTUNCIA!!!</p>}
        <button className="reset" onClick={resetApp}>RAZ JESZCZE!</button>
      </div>}
    </div>
  );
}

export default App;
