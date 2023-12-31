import React from "react";

import "./ExpensesList.css";
import ExpensesItem from "./ExpensesItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpensesItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpensesItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
