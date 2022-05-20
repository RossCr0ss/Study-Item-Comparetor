import './ExpenseDate.css';

function ExpenseDate(props) {
  const weekday = props.date.toLocaleDateString('en-US', { weekday: 'long' });
  const month = props.date.toLocaleDateString('en-US', { month: 'long' });
  const year = props.date.toLocaleDateString('en-US', { year: 'numeric' });
  const day = props.date.toLocaleDateString('en-US', { day: 'numeric' });
  return (
    <div className="expense-item__date">
      <span className="weekday">{weekday}</span>
      <span className="day">{day}</span>
      <p>
        <span className="month">{month}</span>
        <span className="year">{year}</span>
      </p>
    </div>
  );
}

export default ExpenseDate;
