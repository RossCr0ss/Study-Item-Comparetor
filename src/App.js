import NewExpense from './components/NewExpense/NewExpense';
import ExpensesList from './components/Expenses/ExpensesList';

const App = () => {
  const expenses = [
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

  const addExpenseDataHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <h1>Hello World!</h1>
      <NewExpense addExpenseData={addExpenseDataHandler} />
      <ExpensesList items={expenses} />
    </div>
  );
};

export default App;
