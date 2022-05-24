import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('All');
  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear.toString();
  });

  const getExpenseYearHandler = (value) => {
    setFilteredYear(value);
  };

  let expensesContent = <h2>Expenses list is empty</h2>;

  if (filteredYear === 'All' && props.items.length) {
    expensesContent = props.items.map((item) => (
      <ExpenseItem
        title={item.title}
        date={item.date}
        amount={item.amount}
        key={item.id}
      />
    ));
  }

  if (
    filteredExpenses.length === 0 &&
    filteredYear !== 'All' &&
    props.items.length
  ) {
    expensesContent = <h2>Expenses is not found</h2>;
  }

  if (filteredExpenses.length !== 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem
        title={item.title}
        date={item.date}
        amount={item.amount}
        key={item.id}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilteredExpense={getExpenseYearHandler}
      />

      {expensesContent}
    </Card>
  );
};

export default Expenses;
