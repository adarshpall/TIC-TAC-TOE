import React from 'react'
import "./ADA.css";

const TIC = () => {
  return (
    <div>
      <div className="msg-container hide">
      <p id="msg">Winner</p>
      <button id="new-btn">New Game</button>
    </div>
    <main>
      <h1>Tic Tac Toe</h1>
      <div className="container">
        <div className="game">
          <button className="box"></button>
          <button className="box"></button>
          <button className="box"></button>
          <button className="box"></button>
          <button className="box"></button>
          <button className="box"></button>
          <button className="box"></button>
          <button className="box"></button>
          <button className="box"></button>
        </div>
      </div>
      <button id="reset-btn">Reset Game</button>
    </main>
    </div>
  )
}

export default TIC
