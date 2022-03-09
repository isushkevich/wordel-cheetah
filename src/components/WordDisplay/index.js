import React, {useEffect, useState} from "react";
import './styles.css';
import {wordlist} from "../../data/wordlist";

export const WordDisplay = ({alphabetStatus}) => {
  const [selectedWords, setSelectedWords] = useState(wordlist);

  const handleSelectedWords = () => {

    const presentLetters = ['z'];

    const excludedLetters = [];

    for (let letter in alphabetStatus) {
      if (alphabetStatus[letter] === 'present') {
        presentLetters.push(letter);
      } else if (alphabetStatus[letter] === 'excluded') {
        excludedLetters.push(letter);
      }
    }

    console.log(presentLetters, excludedLetters)

    const filteredResult = selectedWords.filter((word) => {
      return word.search(presentLetters[0]) > -1
    })


    setSelectedWords(filteredResult);
    // console.log(filteredResult)
  }

  useEffect(()=>{
    // handleSelectedWords();
  });


  const wordsToDisplay = selectedWords.map((word) =>
    <li key={word} className={"list-item"}>{word}</li>
  );

  return <div>
    <ol>
      {wordsToDisplay}
    </ol>
  </div>;
}