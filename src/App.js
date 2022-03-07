import React, {useState} from 'react';
import {WordDisplay} from "./components/WordDisplay";
import {Keyboard} from "./components/Keyboard";
import './App.css';
import {wordlist} from "./data/wordlist";

function App() {
  const handleAlphabetStatus = (letter, status) => {
    setAlphabetStatus(prevState => ({
      ...prevState,
      [letter]: status
    }));
  }

   const [alphabetStatus, setAlphabetStatus] = useState({
    a: "undefined",
    b: "undefined",
    c: "undefined",
    d: "undefined",
    e: "undefined",
    f: "undefined",
    g: "undefined",
    h: "undefined",
    i: "undefined",
    j: "undefined",
    k: "undefined",
    l: "undefined",
    m: "undefined",
    n: "undefined",
    o: "undefined",
    p: "undefined",
    q: "undefined",
    r: "undefined",
    s: "undefined",
    t: "undefined",
    u: "undefined",
    v: "undefined",
    w: "undefined",
    x: "undefined",
    y: "undefined",
    z: "undefined",
  });



  return (
    <div className={"app-container"}>
      <WordDisplay alphabetStatus={alphabetStatus}/>
      <Keyboard alphabetStatus={alphabetStatus} handleAlphabetStatus={handleAlphabetStatus}/>
    </div>
  );
}

export default App;
