import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
  let currentYear = new Date().getFullYear();

  const rangeYear = [];

  for (let i = 0; i < 4; i++) {
    rangeYear.push(currentYear--);
  }

  const selectedYearHandler = (event) => {
    props.onFilteredExpense(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectedYearHandler} value={props.selected}>
          <option value="All">All</option>
          {rangeYear.map((year, index) => (
            <option value={year} key={index}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
