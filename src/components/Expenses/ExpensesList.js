import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  return (
    <Card className="expenses">
      {Object.keys(props.items).map((index) => (
        <ExpenseItem
          title={props.items[index].title}
          date={props.items[index].date}
          amount={props.items[index].amount}
          key={props.items[index].id}
        />
      ))}
    </Card>
  );
};

export default ExpensesList;
