import React from "react";
import Card from "../Cards";

export default function Column({
  title,
  cardTitles,
  color,
  index,
  handleCardAdd,
  handleCardMoveNext,
  handleCardMovePrevious,
}) {
  const promptWindow = () => {
    const input = window.prompt();
    if (
      input == null ||
      input.length == 0
    ) {
      alert(
        "Input cannot be left blank."
      );
    } else {
      handleCardAdd(input, index);
    }
  };
  return (
    <div className="column-container">
      <div
        className="column-title"
        style={{
          backgroundColor: color,
        }}
      >
        {title}
      </div>
      <div className="column-body">
        {cardTitles.map(
          (cardTitle, i) => (
            <Card
              cardTitle={cardTitle}
              cardIndex={i}
              index={index}
              handleCardMoveNext={
                handleCardMoveNext
              }
              handleCardMovePrevious={
                handleCardMovePrevious
              }
            />
          )
        )}
      </div>
      <div className="column-footer">
        <button onClick={promptWindow}>
          + Add a card
        </button>
      </div>
    </div>
  );
}
