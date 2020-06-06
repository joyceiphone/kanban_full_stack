import React from "react";
import "./App.css";
// import data from "./Constants/data";
import {
  useState,
  useEffect,
} from "react";
import axios from "axios";
import Column from "./components/Column";

function App() {
  const [
    columns,
    setColumns,
  ] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        "https://kabanboardjoyce.herokuapp.com/fetch"
      );
      console.log(data);
      setColumns(data.data.data);
    };
    fetchData();
  }, []);

  const handleCardAdd = async (
    text,
    index
  ) => {
    const nextColumns = [...columns];
    const data = await axios.post(
      "https://kabanboardjoyce.herokuapp.com/addCard",
      {
        index: index,
        text: text,
      }
    );
    nextColumns[index] = data.data.data;
    setColumns(nextColumns);
    // const nextColumns = [...columns];
    // nextColumns[index].card.push(text);
    // setColumns(nextColumns);
  };
  const handleCardMove = (
    indexStart,
    indexEnd,
    i
  ) => {
    const newColumns = [...columns];
    const info = newColumns[
      indexStart
    ].card.splice(i, 1);
    newColumns[indexEnd].card.push(
      info
    );
    setColumns(newColumns);
  };

  const handleCardMoveNext = async (
    index,
    cardIndex
  ) => {
    const nextColumns = [...columns];
    const data = await axios.post(
      "https://kabanboardjoyce.herokuapp.com/moveNext",
      {
        index: index,
        cardIndex: cardIndex,
      }
    );
    nextColumns[index] =
      data.data.data[0];
    nextColumns[index + 1] =
      data.data.data[1];
    setColumns(nextColumns);
  };

  const handleCardMovePrevious = async (
    index,
    cardIndex
  ) => {
    const nextColumns = [...columns];
    const data = await axios.post(
      "https://kabanboardjoyce.herokuapp.com/movePrevious",
      {
        index: index,
        cardIndex: cardIndex,
      }
    );
    console.log(data);
    nextColumns[index] =
      data.data.data[1];
    nextColumns[index - 1] =
      data.data.data[0];
    setColumns(nextColumns);
  };
  return (
    <div className="App">
      <div className="columns">
        {columns.map(
          (column, index) => (
            <Column
              title={column.title}
              cardTitles={column.card}
              color={column.color}
              index={index}
              handleCardAdd={
                handleCardAdd
              }
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
    </div>
  );
}

export default App;
