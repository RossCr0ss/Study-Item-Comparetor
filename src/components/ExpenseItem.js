import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__desc">
        <p>{props.title}</p>
        <h4>$ {props.amount}</h4>
      </div>
    </div>
  );
}

export default ExpenseItem;
