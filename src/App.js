import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import { useState } from 'react';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    date: new Date(2021, 7, 15),
    title: 'Car Insurance',
    amount: 219.44,
  },
  {
    id: 'e2',
    date: new Date(2021, 12, 5),
    title: 'TV',
    amount: 420.99,
  },
  {
    id: 'e3',
    date: new Date(2022, 1, 23),
    title: 'Netflix Membership',
    amount: 39.99,
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h1 className="main-title">Welcome to Comparetor</h1>
      <NewExpense addExpenseData={addExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
