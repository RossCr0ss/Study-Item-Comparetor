import ExpenseItem from './ExpenseItem';

function ExpensesList() {
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

  return (
    <>
      {Object.keys(expenses).map((index) => (
        <ExpenseItem
          title={expenses[index].title}
          date={expenses[index].date}
          amount={expenses[index].amount}
          key={expenses[index].id}
        />
      ))}
    </>
  );
}

export default ExpensesList;
