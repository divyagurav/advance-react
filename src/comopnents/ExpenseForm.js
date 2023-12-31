import "./ExpenseForm.css";
function ExpenseForm() {
  const titleChangehandler = (event) => {
    console.log(event.target.value);
  };

  const amountChandeHandler = (event) => {
    console.log(event.target.value);
  };

  const dateChandeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangehandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={amountChandeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
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
