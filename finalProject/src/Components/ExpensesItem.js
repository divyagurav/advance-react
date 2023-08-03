import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpensesItem.css";

function ExpensesItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpensesItem;
