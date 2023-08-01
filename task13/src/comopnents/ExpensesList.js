import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  // let expensesContent = <p>No expenses found.</p>;
  if (props.items.length === 0) {
    return <h2>Found no Expenses.</h2>;
  } else if (props.items.length === 1) {
    return <h2>Only single Expense here. Please add more..."</h2>;
  }

  return (
    <div>
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
