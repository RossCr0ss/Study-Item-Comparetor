import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

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
    <Card className="expenses">
      {Object.keys(expenses).map((index) => (
        <ExpenseItem
          title={expenses[index].title}
          date={expenses[index].date}
          amount={expenses[index].amount}
          key={expenses[index].id}
        />
      ))}
    </Card>
  );
}

export default ExpensesList;
