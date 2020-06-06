import React from "react";

export default function Card({
  cardTitle,
  cardIndex,
  index,
  handleCardMoveNext,
  handleCardMovePrevious,
}) {
  return (
    <div className="card-container">
      {index == 0 ? null : (
        <div className="previous">
          <button
            onClick={() =>
              handleCardMovePrevious(
                index,
                cardIndex
              )
            }
          >
            Previous
          </button>
        </div>
      )}
      <div className="card-title">
        {cardTitle}
      </div>
      {index == 3 ? null : (
        <div className="next">
          <button
            onClick={() =>
              handleCardMoveNext(
                index,
                cardIndex
              )
            }
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
