import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const changeAmountHandler = (event) => {
    setAmount(event.target.value);
  };

  const changeDateHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };

    props.onAddExpense(expenseData);

    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <div className="controls">
        <div className="controls__item">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={changeTitleHandler}
            name="title"
            placeholder="Enter name..."
          />
        </div>
        <div className="controls__item">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            name="amount"
            placeholder="Enter price..."
            min="0.01"
            step="0.01"
            onChange={changeAmountHandler}
          />
        </div>
        <div className="controls__item">
          <label>Date</label>
          <input
            name="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={changeDateHandler}
          />
        </div>
      </div>
      <div className="actions">
        <button title="Add Expense" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
