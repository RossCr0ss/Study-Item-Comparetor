import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enterdExpense) => {
    const expenseData = {
      ...enterdExpense,
      id: Math.random().toString(),
    };

    props.addExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
