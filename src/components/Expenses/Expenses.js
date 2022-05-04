import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./../UI/Card";

function Expenses(props) {
  const expenseItems = props.expenses.map((expense, index) => {
    return (
      <ExpenseItem
        key={index}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });
  return  <Card className="expenses">{expenseItems}</Card>;
}

export default Expenses;
