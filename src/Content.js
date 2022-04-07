import React from 'react'
import logo from './logo.svg';

const Content = () => {
  return (
    <main>
        <img src={logo} className="App-logo"></img>
        <h1>
            Hello faggot! Please click the button below to determine if you are gay.
        </h1>
        <p>
            Warning! An intense algorithm will bitch slap god and give us the answers
        </p>

        <button className="GayButton">Click if you dare</button>
    </main>
  )
}

export default Content