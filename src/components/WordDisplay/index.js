import React, {useState} from "react";
import './styles.css';
import {wordlist} from "../../data/wordlist";

export const WordDisplay = ({alphabetStatus}) => {
  const [selectedWords, setSelectedWords] = useState(wordlist);

  // const handleSelectedWords = () => {
  //
  //   wordList
  //
  //   setSelectedWords();
  // }


  const wordsToDisplay = selectedWords.map((word) =>
    <li key={word} className={"list-item"}>{word}</li>
  );

  return <div>
    <ol>
      {wordsToDisplay}
    </ol>
  </div>;
}