import React from "react";
import {alphabet} from "../../data/alphabet";
import {styles} from "./styles";
import {Box, Button} from "@mui/material";

export const Keyboard = () => {

  const createKeyboard = (alphabet) => {
    const result = [];

    for (let row in alphabet) {
      result.push(
        <div className={'keyboard-row'} key={row}>{alphabet[row].map((letter) =>
          <Button key={letter} variant='outlined' size='medium' sx={styles.keyboardButton}>{letter}</Button>
        )}
        </div>
      )
    }

    return result;
  }

  return <Box sx={styles.keyboardContainer}>
    <Box sx={styles.letterOptions}>
      <Button variant='outlined' size='large'>{"A"}</Button>
      <Button variant='outlined' size='large'>{"A"}</Button>
      <Button variant='outlined' size='large'>{"A"}</Button>
      <Button variant='outlined' size='large'>{"A"}</Button>
    </Box>
    <Box sx={styles.keyboard}>
      {createKeyboard(alphabet)}
    </Box>
  </Box>;
}
