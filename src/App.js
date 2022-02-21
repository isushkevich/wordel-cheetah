import React, {useState} from 'react';
import {WordDisplay} from "./components/WordDisplay";
import {Keyboard} from "./components/Keyboard";
import './App.css';
import {wordlist} from "./data/wordlist";

function App() {
  const [selectedWords, setSelectedWords] = useState(wordlist);

  return (
    <div className={"app-container"}>
      <WordDisplay words={selectedWords}/>
      <Keyboard/>
    </div>
  );
}

export default App;
