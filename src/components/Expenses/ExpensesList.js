import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
  if (!props.expenseList.length) {
    return <h2 className="expenses-list__fallback">No Expense Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenseList.map((expense, index) => {
        return (
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
