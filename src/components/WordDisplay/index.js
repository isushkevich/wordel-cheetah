import React, {useEffect, useState} from "react";
import './styles.css';
import {wordlist} from "../../data/wordlist";

export const WordDisplay = ({alphabetStatus}) => {

  const handleSelectedWords = () => {

    const selectedWords = [...wordlist];

    const presentLetters = [];

    const excludedLetters = [];

    const correctLetters = [];

    for (let letter in alphabetStatus) {
      if (alphabetStatus[letter] === 'present') {
        presentLetters.push(letter);
      } else if (alphabetStatus[letter] === 'excluded') {
        excludedLetters.push(letter);
      } else if (typeof(alphabetStatus[letter])==='number') {
        correctLetters.push([letter,  alphabetStatus[letter]]);
      }
    }

    console.log(presentLetters, excludedLetters)

    const filteredResult = selectedWords.filter((word) => {
      const containsSymbols = presentLetters.every(letter => word.search(letter) > -1);
      const excludesSymbols = excludedLetters.every(letter => word.search(letter) === -1);
      const containsCorrectSymbols = correctLetters.every(entry => word[entry[1]-1] === entry[0]);
      return containsSymbols && excludesSymbols && containsCorrectSymbols;
    })

    // console.log(correctLetters);

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