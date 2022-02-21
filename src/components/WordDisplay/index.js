import React from "react";
import './styles.css';

export const WordDisplay = ({words}) => {
  const wordsToDisplay = words.map((word) =>
    <li key={word} className={"list-item"}>{word}</li>
  );

  return <div>
    <ol>
      {wordsToDisplay}
    </ol>
  </div>;
}