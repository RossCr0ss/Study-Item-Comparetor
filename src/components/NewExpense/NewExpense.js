import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enterdExpense) => {
    const expenseData = {
      ...enterdExpense,
      id: Math.random().toString(),
    };

    props.addExpenseData(expenseData);
  };
  const showFormHandler = () => {
    return setShowForm(true);
  };

  const hideFormHandler = () => {
    return setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm ? (
        <div className="show-form">
          <button className="show-form-btn" onClick={showFormHandler}>
            Add New Expense
          </button>
        </div>
      ) : (
        <ExpenseForm
          showForm={showForm}
          onShowForm={hideFormHandler}
          onAddExpense={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
