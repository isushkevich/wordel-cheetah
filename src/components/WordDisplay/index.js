import React, {useEffect, useState} from "react";
import './styles.css';
import {wordlist} from "../../data/wordlist";

export const WordDisplay = ({alphabetStatus}) => {

  const handleSelectedWords = () => {

    const selectedWords = [...wordlist];

    const presentLetters = [];

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
      const containsSymbols = presentLetters.every(letter => word.search(letter) > -1);
      const excludesSymbols = excludedLetters.every(letter => word.search(letter) === -1);
      return containsSymbols && excludesSymbols;
    })

    console.log(presentLetters, excludedLetters);

    return filteredResult;
  }


  const wordsToDisplay = handleSelectedWords().map((word) =>
    <li key={word} className={"list-item"}>{word}</li>
  );

  return (<div>
    <ol>
      {wordsToDisplay}
    </ol>
  </div>)
}