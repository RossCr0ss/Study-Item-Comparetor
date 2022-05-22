import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const changeTitleHandler = () => {
    setTitle('Updated!');
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__desc">
        <p>{title}</p>
        <h4>$ {props.amount}</h4>
      </div>
      <button onClick={changeTitleHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
