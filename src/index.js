import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const boardData = [
  [
    { id: 0, value: null, isClicked: false },
    { id: 1, value: null, isClicked: false },
    { id: 2, value: null, isClicked: false },
  ],
  [
    { id: 3, value: null, isClicked: false },
    { id: 4, value: null, isClicked: false },
    { id: 5, value: null, isClicked: false },
  ],
  [
    { id: 6, value: null, isClicked: false },
    { id: 7, value: null, isClicked: false },
    { id: 8, value: null, isClicked: false },
  ],
];
const WINNING_NUMBERS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
ReactDOM.render(
  <React.StrictMode>
    <App boardData={boardData} WINNING_NUMBERS={WINNING_NUMBERS} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
