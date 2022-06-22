import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addNewExpenseButton, toggleAddNewExpenseButton] = useState(true);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpenseHandler(expenseData);
  };

  const showAddNewExpenseButton = () => {
    toggleAddNewExpenseButton(true);
  };
  
  const hideAddNewExpenseButton = () => {
    toggleAddNewExpenseButton(false)
  }

  return (
    <div className="new-expense">
      {addNewExpenseButton && (
        <button onClick={hideAddNewExpenseButton}>Add New Expense</button>
      )}
      {!addNewExpenseButton && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          showAddNewExpenseButton={showAddNewExpenseButton}
        />
      )}
    </div>
  );
};

export default NewExpense;
