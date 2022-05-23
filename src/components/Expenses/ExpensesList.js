import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  const [filteredYear, setFilteredYear] = useState(2022);
  const filteredExpensesList = Object.values(props.items).filter(
    (item) => item.date.getFullYear().toString() === filteredYear.toString()
  );

  const getExpenseYearHandler = (value) => {
    setFilteredYear(value);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilteredExpense={getExpenseYearHandler}
      />

      {Object.keys(filteredExpensesList).length > 0 &&
        filteredExpensesList.map((item) => (
          <ExpenseItem
            title={item.title}
            date={item.date}
            amount={item.amount}
            key={item.id}
          />
        ))}
      {Object.keys(filteredExpensesList).length === 0 && <h2>No Data</h2>}
    </Card>
  );
};

export default ExpensesList;
