import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  const [filteredYear, setFilteredYear] = useState('All');
  const filteredExpensesList = props.items.filter((item) => {
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

  if (filteredExpensesList.length !== 0) {
    expensesContent = filteredExpensesList.map((item) => (
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

export default ExpensesList;
