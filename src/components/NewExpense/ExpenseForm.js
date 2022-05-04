import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [userInput, updateUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const updateUserInputHandler = (event) => {
    const newValue =
      event.target.name === "enteredDate"
        ? { [event.target.name]: new Date(event.target.value) }
        : { [event.target.name]: event.target.value };
    updateUserInput((previousState) => {
      return {
        ...previousState,
        ...newValue,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData(userInput)
    updateUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
   };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="enteredTitle"
            type="text"
            value={userInput.enteredTitle}
            onChange={updateUserInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            name="enteredAmount"
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={updateUserInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            name="enteredDate"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={updateUserInputHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
