import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  function clickHandler() {
    console.log("clicked!!!");
  }
  function deleteExpense() {
    console.log("clicked");
  }
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price ">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
      <button onClick={deleteExpense}>Delete Expense</button>
    </div>
  );
}

export default ExpenseItem;
