import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      date: new Date(),
      title: 'Car Insurance',
      amount: 219.44,
    },
  ];
  return (
    <div>
      <h1>Hello World!</h1>
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
        key={expenses[0].id}
      />
    </div>
  );
}

export default App;
