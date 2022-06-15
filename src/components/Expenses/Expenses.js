import {useState} from 'react'
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
 const [filteredYear , setFilteredYear] = useState('2020')

   const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }
  
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
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filteredYear={filteredYear} filterChangeHandler={filterChangeHandler} />
        {expenseItems}
      </Card>
      ;
    </div>
  );
}

export default Expenses;
