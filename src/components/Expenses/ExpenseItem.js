import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__desc">
        <p>{props.title}</p>
        <h4>$ {props.amount}</h4>
      </div>
    </Card>
  );
}

export default ExpenseItem;
