import React, {useEffect, useState} from "react";
import {alphabet} from "../../data/alphabet";
import {styles} from "./styles";
import {Box, Button} from "@mui/material";

export const Keyboard = ({alphabetStatus, handleAlphabetStatus}) => {

  const [selectedLetter, setSelectedLetter] = useState("");


  const handleLetterSelect = (letter) => {
    setSelectedLetter(letter)
  }


  const createButton = (letter) => {
    if (alphabetStatus[letter] === "undefined") {
      return <Button onClick={() => handleLetterSelect(letter)} key={letter} variant='contained' size='medium'
                     sx={styles.keyboardButton}>{letter}</Button>
    } else if (alphabetStatus[letter] === "notincluded") {
      return <Button onClick={() => handleLetterSelect(letter)} key={letter} variant='outlined' size='medium'
                     sx={styles.keyboardButton}>{letter}</Button>
    } else if (alphabetStatus[letter] === 'present') {
      return <Button onClick={() => handleLetterSelect(letter)} key={letter} variant='contained' size='medium'
                     color={'warning'} sx={styles.keyboardButton}>{letter}</Button>
    } else {
      return <Button onClick={() => handleLetterSelect(letter)} key={letter} variant='contained' size='medium'
                     color={'success'} sx={styles.keyboardButton}>{letter}</Button>
    }
  }

  useEffect(() => {
    console.log(alphabetStatus)
  }, [alphabetStatus])

  const createKeyboard = (alphabet) => {
    const result = [];

    for (let row in alphabet) {
      result.push(
        <div className={'keyboard-row'} key={row}>{alphabet[row].map((letter) =>
          createButton(letter)
        )}
        </div>
      )
    }

    return result;
  }

  return <Box>
    <Box sx={styles.keyboardContainer}>
      <Box sx={styles.keyboard}>
        {createKeyboard(alphabet)}
      </Box>
      {selectedLetter ? (<Box sx={styles.letterOptions}>
        <Button onClick={() => handleAlphabetStatus(selectedLetter, "undefined")} sx={styles.letterOptionButton}
                variant='contained' size='large'>{selectedLetter}</Button>
        <Button onClick={() => handleAlphabetStatus(selectedLetter, "notincluded")} sx={styles.letterOptionButton}
                variant='outlined' size='large'>{selectedLetter}</Button>
        <Button onClick={() => handleAlphabetStatus(selectedLetter, "present")} sx={styles.letterOptionButton}
                variant='contained' color={'warning'} size='large'>{selectedLetter}</Button>
        <Button onClick={() => handleAlphabetStatus(selectedLetter, "correct")} sx={styles.letterOptionButton}
                variant='contained' color={'success'} size='large'>{selectedLetter}</Button>
      </Box>) : (<></>)}
    </Box>
  </Box>
}
