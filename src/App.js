import React, {useState} from 'react';
import {WordDisplay} from "./components/WordDisplay";
import './App.css';
import {wordlist} from "./data/wordlist";

function App() {
  const [selectedWords, setSelectedWords] = useState(wordlist);

  return (
    <>
      <WordDisplay words={selectedWords}/>
    </>
  );
}

export default App;
