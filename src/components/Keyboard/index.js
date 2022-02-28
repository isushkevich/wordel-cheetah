import React, {useEffect, useState} from "react";
import {alphabet} from "../../data/alphabet";
import {styles} from "./styles";
import {Box, Button} from "@mui/material";

export const Keyboard = () => {

  const [selectedLetter, setSelectedLetter] = useState("");

  const [alphabetStatus, setAlphabetStatus] = useState({});

  const handleLetterSelect = (letter) => {
    setSelectedLetter(letter)
  }

  const handleAlphabetStatus = (letter, status) => {
    setAlphabetStatus(prevState => ({
        ...prevState,
        [letter]: status
      }));
  }

  useEffect(()=>{    console.log(alphabetStatus)}, [alphabetStatus])

  const createKeyboard = (alphabet) => {
    const result = [];

    for (let row in alphabet) {
      result.push(
        <div className={'keyboard-row'} key={row}>{alphabet[row].map((letter) =>
          <Button onClick={() => handleLetterSelect(letter)} key={letter} variant='contained' size='medium'
                  sx={styles.keyboardButton}>{letter}</Button>
        )}
        </div>
      )
    }

    return result;
  }

  return <Box>
    {/*<Box sx={styles.keyboardContainer}>*/}
    {/*  <Button sx={styles.letterOptionButton} variant='contained' size='small'>{"undefined"}</Button>*/}
    {/*  <Button sx={styles.letterOptionButton} variant='outlined' size='small'>{"not present"}</Button>*/}
    {/*  <Button sx={styles.letterOptionButton} variant='contained' color={'warning'} size='small'>{"present"}</Button>*/}
    {/*  <Button sx={styles.letterOptionButton} variant='contained' color={'success'} size='small'>{"correct"}</Button>*/}
    {/*</Box>*/}


    <Box sx={styles.keyboardContainer}>
      <Box sx={styles.keyboard}>
        {createKeyboard(alphabet)}
      </Box>
      {selectedLetter ? (<Box sx={styles.letterOptions}>
        <Button onClick={()=>handleAlphabetStatus(selectedLetter, "undefined")} sx={styles.letterOptionButton} variant='contained' size='large'>{selectedLetter}</Button>
        <Button onClick={()=>handleAlphabetStatus(selectedLetter, "notincluded")} sx={styles.letterOptionButton} variant='outlined' size='large'>{selectedLetter}</Button>
        <Button onClick={()=>handleAlphabetStatus(selectedLetter, "present")} sx={styles.letterOptionButton} variant='contained' color={'warning'} size='large'>{selectedLetter}</Button>
        <Button onClick={()=>handleAlphabetStatus(selectedLetter, "correct")} sx={styles.letterOptionButton} variant='contained' color={'success'} size='large'>{selectedLetter}</Button>
      </Box>) : (<></>)}
    </Box>
  </Box>
}
