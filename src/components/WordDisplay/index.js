import {Box} from "@mui/material";
import {wordlist} from "../../data/wordlist";

export const WordDisplay = () => {
  const words = wordlist.map((word) =>
    <li key={word}>{word}</li>
  );

  return <>
    <ul>
      {words}
    </ul>
  </>;
}