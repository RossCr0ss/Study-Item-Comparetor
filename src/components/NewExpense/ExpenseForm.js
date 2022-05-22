import './ExpenseForm.css';

const ExpenseForm = () => {
  return (
    <form className="expense-form">
      <div className="controls">
        <div className="controls__item">
          <label for="name">Text</label>
          <input type="text" id="name" />
        </div>
        <div className="controls__item">
          <label for="amount">Amount</label>
          <input type="number" id="amount" min="0.01" step="0.01" />
        </div>
        <div className="controls__item">
          <label for="date">Date</label>
          <input id="date" type="date" min="2021-01-01" max="2022-12-31" />
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
