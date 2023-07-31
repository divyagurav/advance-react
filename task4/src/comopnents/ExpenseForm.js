import "./ExpenseForm.css";
import React, { useState } from "react";
function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangehandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChandeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChandeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>{enteredTitle}</label>
          <input type="text" onChange={titleChangehandler} />
        </div>
        <div className="new-expense__control">
          <label>{enteredAmount}</label>
          <input type="number" onChange={amountChandeHandler} />
        </div>
        <div className="new-expense__control">
          <label>{enteredDate}</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChandeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
