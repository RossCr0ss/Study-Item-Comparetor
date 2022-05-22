import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [formValues, setFormValues] = useState({
    title: '',
    price: '',
    date: '',
  });
  const changeTitleHandler = (event) => {
    setFormValues({ ...formValues, title: event.target.value });
  };

  const changeAmountHandler = (event) => {
    setFormValues({ ...formValues, price: event.target.value });
  };

  const changeDateHandler = (event) => {
    setFormValues({ ...formValues, date: event.target.value });
  };
  return (
    <form className="expense-form">
      <div className="controls">
        <div className="controls__item">
          <label>Title</label>
          <input
            type="text"
            onChange={changeTitleHandler}
            name="title"
            placeholder="Enter name..."
          />
        </div>
        <div className="controls__item">
          <label>Amount</label>
          <input
            type="number"
            name="price"
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
            min="2021-01-01"
            max="2022-12-31"
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
