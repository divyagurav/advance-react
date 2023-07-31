import { userState } from "@babel/types";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [amount, setTitle] = useState(props.amount);

  function clickHandler() {
    setTitle("100$");
    // console.log("clicked!!!");
  }
  function deleteExpense() {
    console.log("clicked!!!");
  }

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price ">${amount}</div>
      </div>
      <button onClick={clickHandler}>change expense</button>
      <button onClick={deleteExpense}>Delete Expense</button>
    </div>
  );
}

export default ExpenseItem;
